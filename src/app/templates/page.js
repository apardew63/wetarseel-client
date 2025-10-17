"use client";
import React, { useState, useEffect } from "react";
import { Layout, Button, Badge, Drawer, Grid } from "antd";
import { SoundOutlined, MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Image from "next/image";
import darshboad from "../../../public/dashboard.png";
import SyncTemplate from "@/components/ui/SyncTemplate";
import { Input } from "@/components/ui/input";

const { Sider, Header, Content } = Layout;
const { useBreakpoint } = Grid;

export default function TemplatesPage() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [syncModalVisible, setSyncModalVisible] = useState(false);
  const screens = useBreakpoint();

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
      icon: <Image height={16} width={16} src={darshboad} />,
      label: "Dashboard",
      active: false,
    },
    { key: "live-chat", icon: <SoundOutlined />, label: "Live Chat" },
    { key: "contacts", icon: <SoundOutlined />, label: "Contacts" },
    {
      key: "templates",
      icon: <SoundOutlined />,
      label: "Templates",
      active: true,
    },
    { key: "campaign", icon: <SoundOutlined />, label: "Campaign" },
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
          bodyStyle={{ padding: 0, background: "#111827" }}
        >
          <SidebarContent />
        </Drawer>
      )}

      <Layout>
        {/* Top Alert Banner */}
        <div class="w-full flex items-center justify-center border border-orange-200 bg-orange-100 p-2 text-sm">
          <div class="flex items-center gap-2 text-orange-800">
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
              class="lucide lucide-circle-alert h-5 w-5"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" x2="12" y1="8" y2="12"></line>
              <line x1="12" x2="12.01" y1="16" y2="16"></line>
            </svg>
            <div>Your Business profile is incomplete.</div>
            <a class="underline font-semibold" href="/nfjylyqk8yk8ssq/profile">
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
                Templates
                <div className="inline-flex items-center justify-center w-4 h-4 bg-green-100 rounded-full ml-2">
                  <SoundOutlined className="text-green-600 text-xs" />
                </div>
              </h1>
            </div>

            <div class="sm:flex ml-auto items-center space-x-10">
              <div class="hidden lg:flex items-center space-x-2">
                <div>Free Package</div>
              </div>
              <div
                class="text-red-500 lg:block hidden underline decoration-dotted hover:cursor-pointer"
                data-state="closed"
              >
                No Limit Assigned
              </div>
              <div class="flex items-center space-x-2">
                <button
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:Rdt7m9ukq:"
                  data-state="closed"
                >
                  <div class="items-center rounded-full border px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 lg:hidden flex text-xs">
                    Package{" "}
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
                      class="lucide lucide-info ml-2 h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                  </div>
                </button>
                <span
                  class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full hover:cursor-pointer border border-gray-200"
                  type="button"
                  id="radix-:R3lt7m9ukq:"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                >
                  <span class="flex h-full w-full items-center justify-center rounded-full bg-slate-100 font-bold hover:bg-black hover:text-white">
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
        <Content className="p-6 bg-gray-100">
          <div className="flex-1 h-full overflow-y-auto">
            <div className="mx-auto p-6 min-h-full">
              <div className="flex mb-4">
                <div className="flex-1">
                  <div className="text-gray-800 text-xl font-bold sm:text-2xl">
                    Message Templates
                  </div>
                  <p className="text-gray-600 mt-2">
                    Select the template which you would like to bulk send
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setSyncModalVisible(true)}
                    className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white border border-input hover:bg-gray-50 hover:text-accent-foreground h-10 px-4 py-2 flex items-center space-x-2 bg-white"
                    type="button"
                  >
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
                      className="lucide lucide-download h-4 w-4"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" x2="12" y1="15" y2="3"></line>
                    </svg>
                    <span>Sync from Meta</span>
                  </button>
                  <a href="/nfjylyqk8yk8ssq/templates/migrate-templates">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white bg-blue-100 text-blue-500 underline-offset-4 hover:underline h-10 px-4 py-2">
                      Migrate Templates
                    </button>
                  </a>
                  <a
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white bg-gradient-to-r from-green-500 to-emerald-500 hover:bg-gradient-to-bl text-white h-10 px-4 py-2"
                    id="create-template1"
                    href="/nfjylyqk8yk8ssq/templates/manage/create-new"
                  >
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
                      className="lucide lucide-circle-plus mr-2 h-5 w-5"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 12h8"></path>
                      <path d="M12 8v8"></path>
                    </svg>
                    Create Template
                  </a>
                </div>
              </div>
              <div classNameName="bg-white p-6 rounded-lg shadow-lg">
                <div classNameName="flex items-center pb-6 space-x-4">
                  <Input classNameName="flex h-10 w-full rounded-md border-2 border-gray-400 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 focus:ring-0 focus:outline-none focus:border-[#075E54] max-w-72" placeholder="Filter by template" />
                  <div className="flex items-center space-x-2"><button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white border border-input bg-background hover:bg-gray-50 hover:text-accent-foreground h-10 px-4 py-2 mb-0" type="button">Filter by status<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down ml-1"><path d="m6 9 6 6 6-6"></path></svg></button></div>
                  <div className="text-sm tracking-tight">Showing all records</div>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white border border-input bg-background hover:bg-gray-50 hover:text-accent-foreground h-10 px-4 py-2 ml-auto" type="button" class="lucide lucide-chevron-down ml-2 h-4 w-4"><path d="m6 9 6 6 6-6"></path></svg></button>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>

      {/* Sync Template Modal */}
      {syncModalVisible && (
        <>
          <div className="fixed inset-0 bg-black/20 bg-opacity-50 z-40" onClick={() => setSyncModalVisible(false)}></div>
          <SyncTemplate />
        </>
      )}
    </Layout>
  );
}
