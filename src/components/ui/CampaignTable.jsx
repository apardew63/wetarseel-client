import React, { useState } from "react";
import { Input } from "./input";
import ColumnDropdown from "./ColumnDropdown";
import ActionDropdown from "./ActionDropdown";

const CampaignTable = () => {
  const [columnDropdownOpen, setColumnDropdownOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleDropdownToggle = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleDuplicate = () => {
    alert("Duplicate clicked");
  };

  const handleView = () => {
    alert("View clicked");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center pb-6 space-x-4">
        <Input
          placeholder={"Filter By Campaign"}
          className={"max-w-72 border-gray-200"}
        />
        <ColumnDropdown
          columnDropdownOpen={columnDropdownOpen}
          setColumnDropdownOpen={setColumnDropdownOpen}
        />
        <div className="relative w-full rounded-lg border p-4 max-w-fit py-2 border-red-500/50">
          <div className="text-sm [&_p]:leading-relaxed text-red-500/50">
            Some columns are hidden
          </div>
        </div>
      </div>
      <div className="rounded-md border border-gray-200">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b border-gray-200 transition-colors hover:bg-gray-100">
                <th className="h-12 px-4 text-left align-middle font-medium text-slate-500 [&:has([role=checkbox])]:pr-0 dark:text-slate-400">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white hover:bg-accent hover:text-accent-foreground h-10 py-2 px-0 mb-0">
                    Campaign Name
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
                      className="lucide lucide-arrow-up-down ml-2 h-4 w-4"
                    >
                      <path d="m21 16-4 4-4-4"></path>
                      <path d="M17 20V4"></path>
                      <path d="m3 8 4-4 4 4"></path>
                      <path d="M7 4v16"></path>
                    </svg>
                  </button>
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-slate-500">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white hover:bg-accent hover:text-accent-foreground h-10 py-2 px-0 mb-0">
                    List Name
                  </button>
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-slate-500 [&:has([role=checkbox])]:pr-0 dark:text-slate-400">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white hover:bg-accent hover:text-accent-foreground h-10 py-2 px-0 mb-0">
                    Status
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
                      className="lucide lucide-arrow-up-down ml-2 h-4 w-4"
                    >
                      <path d="m21 16-4 4-4-4"></path>
                      <path d="M17 20V4"></path>
                      <path d="m3 8 4-4 4 4"></path>
                      <path d="M7 4v16"></path>
                    </svg>
                  </button>
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-slate-500">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white hover:bg-accent hover:text-accent-foreground h-10 py-2 px-0 mb-0">
                    Type
                  </button>
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-slate-500">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white hover:bg-accent hover:text-accent-foreground h-10 py-2 px-0 mb-0">
                    Template
                  </button>
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-slate-500">
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white hover:bg-accent hover:text-accent-foreground h-10 py-2 px-0 mb-0">
                    Created By
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="transition-colors hover:bg-gray-100">
                <td className="p-4 py-4 align-middle hover:cursor-pointer">
                  wetarseel demo cam
                </td>
                <td className="p-4 py-4 align-middle hover:cursor-pointer">
                  a demo list
                </td>
                <td className="p-4 py-4 align-middle hover:cursor-pointer">
                  Published
                </td>
                <td className="p-4 py-4 align-middle hover:cursor-pointer">
                  Sent 9 months ago
                </td>
                <td className="p-4 py-4 align-middle hover:cursor-pointer">
                  Happy new year
                </td>
                <td className="p-4 py-4 align-middle hover:cursor-pointer">
                  abdul rehman
                </td>
                <td className="p-4 py-4 align-middle relative">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white hover:text-accent-foreground h-8 w-8 p-0 hover:bg-gray-100"
                    type="button"
                    onClick={() => handleDropdownToggle(0)}
                  >
                    <span className="sr-only">Open menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-ellipsis h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </button>

                  <ActionDropdown
                    isOpen={openDropdownIndex === 0}
                    onToggle={() => handleDropdownToggle(0)}
                    onDuplicate={handleDuplicate}
                    onView={handleView}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CampaignTable;