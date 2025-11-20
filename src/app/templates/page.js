"use client";
import React, { useState, useEffect } from "react";
import { Layout, Button, Grid } from "antd";
import { SoundOutlined, MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import SyncTemplate from "@/components/ui/SyncTemplate";
import Sidebar from "@/components/ui/Sidebar";
import TemplateTable from "@/components/ui/TemplateTable";
import AlertBanner from "@/components/ui/AlertBanner";
import AppHeader from "@/components/ui/AppHeader";

const { Sider, Header, Content } = Layout;
const { useBreakpoint } = Grid;

export default function TemplatesPage() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [syncModalVisible, setSyncModalVisible] = useState(false);
  // const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  // const [columnDropdownOpen, setColumnDropdownOpen] = useState(false);
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

  return (
    <Layout className="min-h-screen">
      {/* Sidebar */}
      {screens.lg ? (
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          drawerVisible={drawerVisible}
          setDrawerVisible={setDrawerVisible}
          activeItem="templates"
        />
      ) : (
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          drawerVisible={drawerVisible}
          setDrawerVisible={setDrawerVisible}
          activeItem="templates"
        />
      )}

      <Layout>
        <AlertBanner />

        <AppHeader
          title="Templates"
          screens={screens}
          setDrawerVisible={setDrawerVisible}
          onLogout={() => router.push("/login")}
        />

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
                    className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white border border-gray-100 border-input hover:bg-gray-50 hover:text-accent-foreground h-10 px-4 py-2 flex items-center space-x-2 bg-white"
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
                  <a href="/templates/migrate-templates">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white bg-blue-100 text-blue-500 underline-offset-4 hover:underline h-10 px-4 py-2">
                      Migrate Templates
                    </button>
                  </a>
                  <a
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-green-500 to-emerald-500 hover:bg-gradient-to-bl text-white h-10 px-4 py-2"
                    id="create-template1"
                    href="/templates/manage/create-new"
                    target="_blank"
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
                    Create Template
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                {/* <div className="flex items-center pb-6 space-x-4">
                  <Input
                    className="flex h-10 w-full rounded-md border-2 border-gray-400 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 focus:ring-0 focus:outline-none focus:border-[#075E54] max-w-72"
                    placeholder="Filter by template"
                  />
                  <StatusDropdown statusDropdownOpen={statusDropdownOpen} setStatusDropdownOpen={setStatusDropdownOpen} />
                  <div className="text-sm tracking-tight">
                    Showing all records
                  </div>
                  <ColumnDropdown columnDropdownOpen={columnDropdownOpen} setColumnDropdownOpen={setColumnDropdownOpen} />
                  <div
                    role="alert"
                    className="relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 border-orange-500/50 text-orange-500 [&>svg]:text-orange-500 dark:border-orange-900/50 dark:text-orange-900 dark:dark:border-orange-900 dark:[&>svg]:text-orange-900 max-w-fit py-2"
                  >
                    <div className="text-sm [&_p]:leading-relaxed">
                      Some columns are hidden
                    </div>
                  </div>
                </div> */}
                <div className="mb-1 text-sm">Showing 50 of 50 row(s).</div>
                <TemplateTable />
              </div>
            </div>
          </div>
        </Content>
      </Layout>

      {syncModalVisible && (
        <>
          <div
            className="fixed inset-0 bg-black/20 bg-opacity-50 z-40"
            onClick={() => setSyncModalVisible(false)}
          ></div>
          <SyncTemplate />
        </>
      )}
    </Layout>
  );
}
