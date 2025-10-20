import React from "react";

const ColumnDropdown = ({ columnDropdownOpen, setColumnDropdownOpen }) => {
  return (
    <div className="relative ml-auto">
      <button
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white border border-input bg-background hover:bg-gray-50 hover:text-accent-foreground h-10 px-4 py-2"
        type="button"
        onClick={() => setColumnDropdownOpen(!columnDropdownOpen)}
      >
        Column
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
          className="lucide lucide-chevron-down ml-2 h-4 w-4"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
      {columnDropdownOpen && (
        <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <div className="py-1">
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setColumnDropdownOpen(false)}
            >
              Name
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setColumnDropdownOpen(false)}
            >
              Category
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setColumnDropdownOpen(false)}
            >
              Status
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setColumnDropdownOpen(false)}
            >
              Quality
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setColumnDropdownOpen(false)}
            >
              Created By
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setColumnDropdownOpen(false)}
            >
              Created
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setColumnDropdownOpen(false)}
            >
              Type
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setColumnDropdownOpen(false)}
            >
              Previous Category
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setColumnDropdownOpen(false)}
            >
              Business
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setColumnDropdownOpen(false)}
            >
              Updated At
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setColumnDropdownOpen(false)}
            >
              Template Edit
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setColumnDropdownOpen(false)}
            >
              Action
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColumnDropdown;