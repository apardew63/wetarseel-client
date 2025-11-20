import React from "react";
import { Button } from "antd";
import { SoundOutlined, MenuOutlined } from "@ant-design/icons";

const AppHeader = ({ title, screens, setDrawerVisible, onLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    onLogout();
  };

  return (
    <div className="!bg-white border-b border-gray-200 px-6 py-0 h-16">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center space-x-4">
          {!screens.lg && (
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setDrawerVisible(true)}
              className="mr-2"
            />
          )}
          <h1 className="md:text-2xl font-bold truncate md:w-full w-[100px] sm:text-sm">
            {title}
            <div className="inline-flex items-center justify-center w-4 h-4 bg-green-100 rounded-full ml-2">
              <SoundOutlined className="text-green-600 text-xs" />
            </div>
          </h1>
        </div>

        <div className="sm:flex ml-auto items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-2">
            <div>Free Package</div>
          </div>
          <div className="text-red-500 lg:block hidden underline decoration-dotted hover:cursor-pointer">
            No Limit Assigned
          </div>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:Rdt7m9ukq:"
              data-state="closed"
            >
              <div className="items-center rounded-full border px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 lg:hidden flex text-xs">
                Package{" "}
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
                  className="lucide lucide-info ml-2 h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
            </button>
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full hover:cursor-pointer border border-gray-200" type="button" id="radix-:R3lt7m9ukq:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-slate-100 font-bold hover:bg-black hover:text-white">
                DU
              </span>
            </span>
            <Button onClick={handleLogout} type="primary" danger>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;