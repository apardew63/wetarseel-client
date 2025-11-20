import React from "react";

const AlertBanner = () => {
  return (
    <div className="w-full flex items-center justify-center border border-orange-200 bg-orange-100 p-2 text-sm">
      <div className="flex items-center gap-2 text-orange-800">
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
          className="lucide lucide-circle-alert h-5 w-5"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" x2="12" y1="8" y2="12"></line>
          <line x1="12" x2="12.01" y1="16" y2="16"></line>
        </svg>
        <div>Your Business profile is incomplete.</div>
        <a className="underline font-semibold" href="/profile">
          Update in Profile
        </a>
      </div>
    </div>
  );
};

export default AlertBanner;