"use client";
import React, { useState, useEffect } from "react";
import { Layout, Button, Drawer, Grid } from "antd";
import { SoundOutlined, MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Image from "next/image";
import darshboad from "../../../../../public/dashboard.png";
import Sidebar from "@/components/ui/Sidebar";

const { Sider, Header, Content } = Layout;
const { useBreakpoint } = Grid;

// ✅ Reusable TemplateOption component
const TemplateOption = ({ title, description, value, selectedValue, onSelect }) => {
  const isSelected = selectedValue === value;

  return (
    <div
      onClick={() => onSelect(value)}
      className={`flex space-x-4 p-3 rounded-lg transition cursor-pointer 
        ${isSelected ? "bg-blue-50" : "bg-white"} hover:bg-gray-50`}
    >
      <button
        className={`aspect-square h-6 w-6 rounded-full border border-slate-900 text-slate-900 
          ring-offset-white flex items-center justify-center`}
      >
        {isSelected && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-slate-900"
          >
            <circle cx="12" cy="12" r="6" />
          </svg>
        )}
      </button>

      <div className="text-sm leading-none flex flex-col justify-start space-y-1 font-normal text-left w-full">
        <div className="font-medium">{title}</div>
        <div className="text-xs text-gray-600">{description}</div>
      </div>
    </div>
  );
};

export default function CreateTemplatePage() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("marketing");
  const [currentStep, setCurrentStep] = useState(1);
  const screens = useBreakpoint();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };


  // ✅ Template options data
  const templates = [
    {
      title: "Marketing Template",
      value: "marketing",
      description:
        "Send promotional offers, announcements and more to increase awareness and engagement.",
    },
    {
      title: "Carousel Template",
      value: "carousel",
      description:
        "Send messages about your entire catalog or multiple products from it.",
    },
    {
      title: "Utility Template",
      value: "utility",
      description:
        "Provide useful updates or important notifications about account activities, order confirmations, transactions, appointments, or system alerts.",
    },
  ];

  const handleTemplateSelect = (templateValue) => {
    setSelectedTemplate(templateValue);
  };

  const handleContinue = () => {
    if (selectedTemplate) {
      // Navigate to a new page based on selected template
      router.push(`/templates/manage/create-new/${selectedTemplate}`);
    }
  };

  return (
    <Layout className="min-h-screen">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        drawerVisible={drawerVisible}
        setDrawerVisible={setDrawerVisible}
        activeItem="templates"
      />

      <Layout>
        {/* Header + Banner */}
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

        <Header className="!bg-white border-b border-gray-200 px-6 py-0 h-16">
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
                Create Template
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
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full hover:cursor-pointer border border-gray-200">
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
        </Header>

        {/* ✅ Main Content with Template Type */}
        <Content className="p-6 bg-gray-100">
          <div className="flex h-full flex-col bg-blue-50 p-6 overflow-y-scroll">
            <div className="flex flex-1 items-center bg-white py-3 px-5 shadow-sm">
              <div className="font-bold text-xl flex-1">
                New message template
              </div>
              <div className="space-x-4">
                <a href="#" className="mb-0">
                  Cancel
                </a>
                <button
                  onClick={handleContinue}
                  disabled={!selectedTemplate}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:bg-gradient-to-bl text-white h-10 px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  type="button"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>

          {/* ✅ Template Type Section */}
          {currentStep === 1 && (
            <div className="p-5 flex flex-col space-y-2 items-center bg-gray-200">
              <div className="bg-white space-y-2 p-4 w-9/12 rounded-lg shadow-sm">
                <div className="text-sm font-bold mb-1">Template Type</div>
                <div className="text-sm mb-4 text-gray-600">
                  Choose your template type
                </div>

                <div className="mt-2 pb-4 grid gap-2">
                  {templates.map((item) => (
                    <TemplateOption
                      key={item.value}
                      title={item.title}
                      description={item.description}
                      value={item.value}
                      selectedValue={selectedTemplate}
                      onSelect={handleTemplateSelect}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ✅ Next Step Section */}
          {currentStep === 2 && (
            <div className="p-5 flex flex-col space-y-2 items-center bg-gray-200">
              <div className="bg-white space-y-2 p-4 w-9/12 rounded-lg shadow-sm">
                <div className="text-sm font-bold mb-1">Template Details</div>
                <div className="text-sm mb-4 text-gray-600">
                  You selected: <strong>{templates.find(t => t.value === selectedTemplate)?.title}</strong>
                </div>
                <div className="mt-2 pb-4">
                  <p className="text-gray-500">Template creation form for {selectedTemplate} template coming soon...</p>
                </div>
              </div>
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
}
