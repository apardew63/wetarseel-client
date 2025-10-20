import React from "react";

const TemplateTable = () => {
  return (
    <div className="rounded-md border">
      <div className="relative w-full overflow-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
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
            <tr className="border-b transition-colors hover:bg-gray-200">
              <td className="p-4 py-2 align-middle">
                <div className="font-medium truncate">class_confirmation</div>
              </td>
              <td className="p-4 py-2 align-middle">
                <div>Utility</div>
              </td>
              <td className="p-4 py-2 align-middle">
                <div className="inline-flex items-center border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 border-transparent bg-green-600 text-white hover:bg-green-600/80 rounded-full">
                  Approved
                </div>
              </td>
              <td className="p-4 py-2 align-middle">
                <div className="inline-flex items-center border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 border-transparent bg-green-800 text-white hover:bg-green-800/80 rounded-full">
                  Unkown
                </div>
              </td>
              <td className="p-4 py-2 align-middle">
                <div className="whitespace-nowrap">Jazib Ashraf</div>
              </td>
              <td className="p-4 py-2 align-middle">
                <div className="whitespace-nowrap">October 9, 2025 4:20 PM</div>
              </td>
              <td className="p-4 py-2 align-middle">N/A</td>
              <td className="p-4 py-2 align-middle">
                <div className="whitespace-nowrap">WeTarseel Official</div>
              </td>
              <td className="p-4 py-2 align-middle">
                <div className="whitespace-nowrap">October 9, 2025 4:20 PM</div>
              </td>
              <td className="p-4 py-2 align-middle">
                <div className="flex space-x-4 items-center">
                  <a href="send-message/class_confirmation">
                    <button
                      className="inline-flex text-black items-center justify-center text-sm font-medium transition-colors 
focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 
disabled:pointer-events-none disabled:opacity-50 
border bg-white hover:bg-gray-50 h-9 rounded-md px-3"
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
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white border border-input bg-background hover:bg-gray-50 hover:text-accent-foreground h-9 rounded-md px-3"
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TemplateTable;
