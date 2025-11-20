import React, { useState, useEffect } from "react";
import { Input } from "./input";
import StatusDropdown from "./StatusDropdown";
import ColumnDropdown from "./ColumnDropdown";

const timeAgo = (date) => {
  const now = new Date();
  const past = new Date(date);
  const diffInSeconds = Math.floor((now - past) / 1000);

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 }
  ];

  for (let interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
    }
  }
  return 'just now';
};

const ContactTable = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        let url = "http://localhost:3001/contact";
  
        if (searchTerm.trim()) {
          url = `http://localhost:3001/contact/search/${encodeURIComponent(searchTerm.trim())}`;
        }
  
        const response = await fetch(url);
  
        if (response.ok) {
          const data = await response.json();
          setContacts(data); // ALWAYS ARRAY
        } else {
          setContacts([]);
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
        setContacts([]);
      }
    };
  
    fetchContacts();
  }, [searchTerm]);
  

  return (
    <>
      <div className="rounded-md border border-gray-100">
        <div className="relative w-full overflow-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                  Name
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                  Phone
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                  Tags
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                  Created At
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 transition-colors hover:bg-gray-100"
                >
                  <td className="p-4 py-2 align-middle">
                    <div className="font-medium truncate">
                      {contact.name || contact.firstName + " " + contact.lastName}
                    </div>
                  </td>
                  <td className="p-4 py-2 align-middle">
                    <div>{contact.phone}</div>
                  </td>
                  
                  <td className="p-4 py-2 align-middle">
                    <div className={`inline-flex items-center border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 border-transparent rounded-full ${
                      contact.status === 'active' ? 'bg-green-600 text-white hover:bg-green-600/80' :
                      contact.status === 'inactive' ? 'bg-red-600 text-white hover:bg-red-600/80' :
                      contact.status === 'new' ? 'bg-blue-600 text-white hover:bg-blue-600/80' :
                      'bg-gray-600 text-white hover:bg-gray-600/80'
                    }`}>
                      {contact.status || 'Unknown'}
                    </div>
                  </td>
                  <td className="p-4 py-2 align-middle">
                    <div>{contact.tags}</div>
                  </td>
                  <td className="p-4 py-2 align-middle">
                    <div className="whitespace-nowrap">
                      {timeAgo(contact.createdAt)}
                    </div>
                  </td>
                  <td className="p-4 py-2 align-middle">
                    <div className="flex space-x-4 items-center">
                      <a href={`/edit-contact?name=${encodeURIComponent(contact.name || contact.id)}`}>
                        <button
                          className="inline-flex text-black items-center justify-center text-sm font-medium transition-colors
focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2
disabled:pointer-events-none disabled:opacity-50
border border-gray-100 bg-white hover:bg-gray-50 h-9 rounded-md px-3"
                        >
                          Edit
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-edit h-4 w-4 ml-2 text-black group-hover:text-white"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5Z"></path>
                          </svg>
                        </button>
                      </a>
                      {/* <button
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium border-gray-100 ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white border border-input bg-background hover:bg-gray-50 hover:text-accent-foreground h-9 rounded-md px-3"
                        type="button"
                      >
                        View
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-eye h-4 w-4 ml-2 text-black group-hover:text-white"
                        >
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </button> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ContactTable;