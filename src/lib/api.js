/**
 * Centralized API configuration
 * This ensures all API calls use the correct base URL
 */

// Get API URL from environment variable or use default
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

/**
 * Make an API request with proper error handling
 */
export async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  };

  // Add auth token if available
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      defaultOptions.headers.Authorization = `Bearer ${token}`;
    }
  }

  try {
    const response = await fetch(url, {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `HTTP error! status: ${response.status}`);
    }

    return { data, response };
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
}

/**
 * API endpoints
 */
export const api = {
  // Auth endpoints
  signup: (userData) =>
    apiRequest("/signup", {
      method: "POST",
      body: JSON.stringify(userData),
    }),

  signin: (credentials) =>
    apiRequest("/signin", {
      method: "POST",
      body: JSON.stringify(credentials),
    }),

  getProfile: () => apiRequest("/profile"),

  // Template endpoints
  getTemplates: () => apiRequest("/template"),
  getTemplate: (templateName) => apiRequest(`/template/${templateName}`),
  createTemplate: (templateData) =>
    apiRequest("/template", {
      method: "POST",
      body: JSON.stringify(templateData),
    }),
  updateTemplate: (templateName, templateData) =>
    apiRequest(`/template/${templateName}`, {
      method: "PUT",
      body: JSON.stringify(templateData),
    }),
  deleteTemplate: (templateName) =>
    apiRequest(`/template/${templateName}`, {
      method: "DELETE",
    }),

  // Campaign endpoints
  getCampaigns: () => apiRequest("/campaign"),
  getCampaign: (id) => apiRequest(`/campaign/${id}`),
  createCampaign: (campaignData) =>
    apiRequest("/campaign", {
      method: "POST",
      body: JSON.stringify(campaignData),
    }),
  deleteCampaign: (id) =>
    apiRequest(`/campaign/${id}`, {
      method: "DELETE",
    }),

  // Contact endpoints
  getContact: (name) => apiRequest(`/contact/${name}`),
  createContact: (contactData) =>
    apiRequest("/contact", {
      method: "POST",
      body: JSON.stringify(contactData),
    }),
  updateContact: (name, contactData) =>
    apiRequest(`/contact/${name}`, {
      method: "PUT",
      body: JSON.stringify(contactData),
    }),
  deleteContact: (name) =>
    apiRequest(`/contact/${name}`, {
      method: "DELETE",
    }),
  uploadContactsCSV: (formData) =>
    apiRequest("/upload-csv", {
      method: "POST",
      headers: {}, // Let browser set Content-Type for FormData
      body: formData,
    }),
};

export default api;

