import React from "react";
import TransparentBtn from "./ui/TransparentBtn";

const QrCode = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div class="flex flex-col space-y-1.5 p-6">
        <h3 class="text-2xl font-semibold leading-none tracking-tight">
          Download your QR code
        </h3>
      </div>

      <div className="flex justify-center mb-6">
        <div className="p-4 bg-white rounded-lg border-2 border-gray-200">
          {/* Replace with Ant QRCode */}
          <div className="w-40 h-40 flex items-center justify-center border border-gray-300">
            <span className="text-gray-500">QR Code</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white bg-zinc-950 hover:bg-zinc-950/90 text-white h-10 px-4 py-2 w-full">
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
            class="lucide lucide-download mr-2 h-4 w-4"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" x2="12" y1="15" y2="3"></line>
          </svg>{" "}
          Download QR Code
        </button>

        <div className="grid grid-cols-2 gap-3">
          <TransparentBtn onClick={() => alert("Clicked!")}>
            Open in WhatsApp
          </TransparentBtn>
          <TransparentBtn onClick={() => alert("Clicked!")}>
            Copy Link
          </TransparentBtn>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
