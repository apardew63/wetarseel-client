import React from "react";

const ActionDropdown = ({ isOpen, onToggle, onDuplicate, onView }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-10 z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in">
      <div className="px-2 py-1.5 text-sm font-semibold">Actions</div>

      <button
        className="w-full flex items-center text-orange-500 rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
        onClick={onDuplicate}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-copy mr-2 text-orange-500"
        >
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
        </svg>
        Duplicate
      </button>

      <button
        className="w-full flex items-center text-blue-500 rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
        onClick={onView}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-bar-chart-horizontal-big mr-2 text-blue-500"
        >
          <path d="M3 3v18h18"></path>
          <rect width="12" height="4" x="7" y="5" rx="1"></rect>
          <rect width="7" height="4" x="7" y="13" rx="1"></rect>
        </svg>
        View
      </button>
    </div>
  );
};

export default ActionDropdown;