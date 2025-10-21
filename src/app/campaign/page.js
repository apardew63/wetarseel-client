"use client";
import React, { useState, useEffect } from "react";
import { Layout, Button, Badge, Drawer, Grid } from "antd";
import { SoundOutlined, MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/ui/Sidebar";
import { Input } from "@/components/ui/input";
import ColumnDropdown from "@/components/ui/ColumnDropdown";
import CampaignForm from "@/components/ui/CampaignForm";
import Image from "next/image";
import darshboad from "../../../public/dashboard.png";

const { Sider, Header, Content } = Layout;
const { useBreakpoint } = Grid;

export default function CampaignPage() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const screens = useBreakpoint();
  const [columnDropdownOpen, setColumnDropdownOpen] = useState(false);

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleDropdownToggle = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleCreateCampaign = () => {
    router.push('/campaign/create');
  };

  const handleFormSubmit = (formData) => {
    console.log("Campaign data:", formData);
    // Here you would typically send the data to your backend
    setShowForm(false);
    // You might want to refresh the table or show a success message
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };


  const sidebarItems = [
    {
      key: "dashboard",
      icon: <Image height={16} width={16} src={darshboad} alt="image" />,
      label: "Dashboard",
      active: false,
    },
    { key: "live-chat", icon: <SoundOutlined />, label: "Live Chat" },
    { key: "contacts", icon: <SoundOutlined />, label: "Contacts" },
    { key: "templates", icon: <SoundOutlined />, label: "Templates" },
    {
      key: "campaign",
      icon: <SoundOutlined />,
      label: "Campaign",
      active: true,
    },
    { key: "reports", icon: <SoundOutlined />, label: "Reports" },
    { key: "agents", icon: <SoundOutlined />, label: "Agents" },
    { key: "flows", icon: <SoundOutlined />, label: "Flows" },
    { key: "messaging", icon: <SoundOutlined />, label: "Messaging Limits" },
    { key: "api", icon: <SoundOutlined />, label: "API Settings" },
    { key: "office", icon: <SoundOutlined />, label: "Office Settings" },
  ];

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="h-16 flex items-center justify-center bg-gray-900 border-b border-gray-700">
        <div className="text-green-400 text-2xl font-bold">WT</div>
      </div>

      {/* Navigation Menu */}
      <div className="py-4">
        {sidebarItems.map((item) => (
          <div
            key={item.key}
            onClick={() =>
              router.push(item.key === "dashboard" ? "/" : `/${item.key}`)
            }
            className={`mx-2 mb-1 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
              item.active
                ? "bg-gray-700 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg">{item.icon}</span>
              {!collapsed && <span className="text-sm">{item.label}</span>}
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <Layout className="min-h-screen">
      {/* Sidebar (Desktop) */}
      {screens.lg ? (
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          className="bg-gray-900"
          width={240}
        >
          <SidebarContent />
        </Sider>
      ) : (
        <Drawer
          title="Menu"
          placement="left"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          width={240}
          closable={true}
          styles={{ body: { padding: 0, background: "#111827" } }}
        >
          <SidebarContent />
        </Drawer>
      )}

      <Layout>
        {/* Top Alert Banner */}
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

        {/* Header */}
        <Header className="!bg-white border-b border-gray-200 px-6 py-0 h-16  ">
          <div className="flex items-center justify-between h-full ">
            <div className="flex items-center space-x-4  ">
              {!screens.lg && (
                <Button
                  type="text"
                  icon={<MenuOutlined />}
                  onClick={() => setDrawerVisible(true)}
                  className="mr-2"
                />
              )}
              <h1 className="md:text-2xl font-bold truncate md:w-full w-[100px] sm:text-sm">
                Campaign
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
                <span
                  className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full hover:cursor-pointer border border-gray-200"
                  type="button"
                  id="radix-:R3lt7m9ukq:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                >
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

        {/* Main Content */}
        <Content className="p-6 bg-gray-50">
          <div className="flex-1 h-full overflow-y-auto">
            <div className="mx-auto p-6 min-h-full">
              <div className="flex justify-between mb-4">
                <div>
                  <h1 className="text-gray-800 text-xl font-bold sm:text-2xl">
                    Campaign List
                  </h1>
                  <p className="text-gray-600 mt-2">
                    Select the campaign which you would like to view
                  </p>
                  <a>
                    <div className="text-gray-600 flex space-x-2 items-center group hover:underline hover:cursor-help">
                      <div>
                        Hover over the <span className="font-bold">Type</span>{" "}
                        field cell to see when the campaign is scheduled for.
                      </div>
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
                        className="lucide lucide-info h-5 w-5"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </div>
                  </a>
                  <a>
                    <div className="text-gray-600 flex space-x-2 items-center group hover:underline hover:cursor-help">
                      <div>
                        Click on the <span className="font-bold">Type</span>{" "}
                        field cell to update the scheduled time if status is
                        scheduled.
                      </div>
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
                        className="lucide lucide-info h-5 w-5"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={handleCreateCampaign}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white bg-gradient-to-r from-green-500 to-emerald-500 hover:bg-gradient-to-bl text-white h-10 px-4 py-2"
                  >
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
                      className="lucide lucide-circle-plus mr-2 h-5 w-5"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 12h8"></path>
                      <path d="M12 8v8"></path>
                    </svg>
                    Create Campaign
                  </button>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                {showForm ? (
                  <CampaignForm onSubmit={handleFormSubmit} />
                ) : (
                  <>
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
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
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
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
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
                                  onClick={() => handleDropdownToggle(0)} // use campaign index if dynamic
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

                                {/* Dropdown */}
                                {openDropdownIndex === 0 && (
                                  <div className="absolute right-0 top-10 z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in">
                                    <div className="px-2 py-1.5 text-sm font-semibold">
                                      Actions
                                    </div>

                                    <button
                                      className="w-full flex items-center text-orange-500 rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                                      onClick={() => alert("Duplicate clicked")}
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
                                        <rect
                                          width="14"
                                          height="14"
                                          x="8"
                                          y="8"
                                          rx="2"
                                          ry="2"
                                        ></rect>
                                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                      </svg>
                                      Duplicate
                                    </button>

                                    <button
                                      className="w-full flex items-center text-blue-500 rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100"
                                      onClick={() => alert("View clicked")}
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
                                        <rect
                                          width="12"
                                          height="4"
                                          x="7"
                                          y="5"
                                          rx="1"
                                        ></rect>
                                        <rect
                                          width="7"
                                          height="4"
                                          x="7"
                                          y="13"
                                          rx="1"
                                        ></rect>
                                      </svg>
                                      View
                                    </button>
                                  </div>
                                )}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
