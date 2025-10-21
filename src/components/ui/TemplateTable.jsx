import React, { useState, useEffect } from "react";
import { Input } from "./input";
import StatusDropdown from "./StatusDropdown";
import ColumnDropdown from "./ColumnDropdown";

const TemplateTable = () => {
  const [templates, setTemplates] = useState([]);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [columnDropdownOpen, setColumnDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        let url = "http://localhost:3001/template";
        if (searchTerm.trim()) {
          url += `/${encodeURIComponent(searchTerm.trim())}`;
        }
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setTemplates(searchTerm.trim() ? [data] : data);
        } else {
          setTemplates([]);
        }
      } catch (error) {
        console.error("Error fetching templates:", error);
        setTemplates([]);
      }
    };
    fetchTemplates();
  }, [searchTerm]);

  return (
    <>
      <div className="flex items-center pb-6 space-x-4">
        <Input
          className="flex h-10 w-full rounded-md border-2 border-gray-400 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 focus:ring-0 focus:outline-none focus:border-[#075E54] max-w-72"
          placeholder="Filter by template"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <StatusDropdown
          statusDropdownOpen={statusDropdownOpen}
          setStatusDropdownOpen={setStatusDropdownOpen}
        />
        <div className="text-sm tracking-tight">
          {searchTerm.trim() ? `Showing results for "${searchTerm}"` : "Showing all records"}
        </div>
        <ColumnDropdown
          columnDropdownOpen={columnDropdownOpen}
          setColumnDropdownOpen={setColumnDropdownOpen}
        />
        <div
          role="alert"
          className="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 border-orange-500/50 text-orange-500 [&>svg]:text-orange-500 dark:border-orange-900/50 dark:text-orange-900 dark:dark:border-orange-900 dark:[&>svg]:text-orange-900 max-w-fit py-2"
        >
          <div className="text-sm [&_p]:leading-relaxed">
            Some columns are hidden
          </div>
        </div>
      </div>
      <div className="mb-1 text-sm">
        Showing {templates.length} of {templates.length} row(s).
      </div>
      <div className="rounded-md border border-gray-100">
        <div className="relative w-full overflow-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                  Template Name
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                  Category
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                  Quality
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                  Created By
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                  Created At
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                  Previous Category
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                  Business
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                  Last Edit
                </th>
              </tr>
            </thead>
            <tbody>
              {templates.map((template, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 transition-colors hover:bg-gray-100"
                >
                  <td className="p-4 py-2 align-middle">
                    <div className="font-medium truncate">
                      {template.templateName}
                    </div>
                  </td>
                  <td className="p-4 py-2 align-middle">
                    <div>{template.category}</div>
                  </td>
                  <td className="p-4 py-2 align-middle">
                    <div className="inline-flex items-center border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 border-transparent bg-green-600 text-white hover:bg-green-600/80 rounded-full">
                      Approved
                    </div>
                  </td>
                  <td className="p-4 py-2 align-middle">
                    <div className="inline-flex items-center border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 border-transparent bg-green-800 text-white hover:bg-green-800/80 rounded-full">
                      Unknown
                    </div>
                  </td>
                  <td className="p-4 py-2 align-middle">
                    <div className="whitespace-nowrap">
                      {template.createdBy}
                    </div>
                  </td>
                  <td className="p-4 py-2 align-middle">
                    <div className="whitespace-nowrap">
                      {new Date(template.createdAt).toLocaleString()}
                    </div>
                  </td>
                  <td className="p-4 py-2 align-middle">N/A</td>
                  <td className="p-4 py-2 align-middle">
                    <div className="whitespace-nowrap">WeTarseel Official</div>
                  </td>
                  <td className="p-4 py-2 align-middle">
                    <div className="whitespace-nowrap">
                      {new Date(template.updatedAt).toLocaleString()}
                    </div>
                  </td>
                  <td className="p-4 py-2 align-middle">
                    <div className="flex space-x-4 items-center">
                      <a href={`send-message/${template.templateName}`}>
                        <button
                          className="inline-flex text-black items-center justify-center text-sm font-medium transition-colors
focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2
disabled:pointer-events-none disabled:opacity-50
border border-gray-100 bg-white hover:bg-gray-50 h-9 rounded-md px-3"
                        >
                          Send Template
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
                            className="lucide lucide-arrow-right h-4 w-4 ml-2 text-black group-hover:text-white"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </button>
                      </a>
                      <button
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
                      </button>
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

export default TemplateTable;
