"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CampaignForm = ({ onSubmit }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    campaignName: "",
    listName: "",
    status: "",
    type: "",
    template: "",
    createdBy: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("Submitting form data:", formData);

    try {
      const response = await fetch("http://localhost:3001/campaign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newCampaign = await response.json();
        console.log("Campaign created:", newCampaign);
        router.push('/campaign');
        // You might want to show a success message here
      } else {
        const error = await response.json();
        console.error("Error creating campaign:", error);
        console.error("Response status:", response.status);
        console.error("Response body:", error);
        // You might want to show an error message here
      }
    } catch (error) {
      console.error("Network error:", error);
      // You might want to show an error message here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-200"
    >
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Create Campaign</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Campaign Name */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Campaign Name</label>
          <input
            type="text"
            name="campaignName"
            placeholder="Enter campaign name"
            value={formData.campaignName}
            onChange={handleChange}
            className="border-2 border-gray-400 rounded-md px-3 py-2 text-sm focus:border-[#075E54] focus:outline-none"
          />
        </div>

        {/* List Name */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">List Name</label>
          <input
            type="text"
            name="listName"
            placeholder="Enter list name"
            value={formData.listName}
            onChange={handleChange}
            className="border-2 border-gray-400 rounded-md px-3 py-2 text-sm focus:border-[#075E54] focus:outline-none"
          />
        </div>

        {/* Status */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border-2 border-gray-400 rounded-md px-3 py-2 text-sm focus:border-[#075E54] focus:outline-none bg-white"
          >
            <option value="">Select status</option>
            <option value="Draft">Draft</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Sent">Sent</option>
          </select>
        </div>

        {/* Type */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="border-2 border-gray-400 rounded-md px-3 py-2 text-sm focus:border-[#075E54] focus:outline-none bg-white"
          >
            <option value="">Select type</option>
            <option value="Email">Email</option>
            <option value="SMS">SMS</option>
            <option value="WhatsApp">WhatsApp</option>
          </select>
        </div>

        {/* Template */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Template</label>
          <input
            type="text"
            name="template"
            placeholder="Enter template name"
            value={formData.template}
            onChange={handleChange}
            className="border-2 border-gray-400 rounded-md px-3 py-2 text-sm focus:border-[#075E54] focus:outline-none"
          />
        </div>

        {/* Created By */}
        <div className="flex flex-col">
          <label className="text-gray-700 mb-1">Created By</label>
          <input
            type="text"
            name="createdBy"
            placeholder="Enter creator name or ID"
            value={formData.createdBy}
            onChange={handleChange}
            className="border-2 border-gray-400 rounded-md px-3 py-2 text-sm focus:border-[#075E54] focus:outline-none"
          />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-md px-6 py-2 hover:bg-gradient-to-bl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Saving..." : "Save Campaign"}
        </button>
      </div>
    </form>
  );
};

export default CampaignForm;
