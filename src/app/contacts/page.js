"use client";
import React, { useState, useEffect } from "react";
import { Layout, Button, Badge, Drawer, Grid } from "antd";
import { SoundOutlined, MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Image from "next/image";
import darshboad from "../../../public/dashboard.png";
import Toggle from "@/components/ui/Toggle";
import ContactTable from "@/components/ui/ContactTable";
import Sidebar from "@/components/ui/Sidebar";
import AppHeader from "@/components/ui/AppHeader";
import AlertBanner from "@/components/ui/AlertBanner";
import Input from "antd/es/input/Input";

const { Sider, Header, Content } = Layout;
const { useBreakpoint } = Grid;

export default function ContactsPage() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
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
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        drawerVisible={drawerVisible}
        setDrawerVisible={setDrawerVisible}
        activeItem="contacts"
      />

      <Layout>
        <AlertBanner />

        <AppHeader
          title="Contacts"
          screens={screens}
          setDrawerVisible={setDrawerVisible}
          onLogout={() => router.push("/login")}
        />

        {/* Main Content */}
        <Content className=" bg-gray-50">
          <div className="flex-1 h-full overflow-y-auto">
            <div className="bg-gray-100 min-h-full flex-row gap-5 flex">
              <div className="lg:hidden bg-white h-screen p-2">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white border border-input bg-background hover:bg-gray-50 hover:text-accent-foreground h-10 w-full p-2"
                  type="button"
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
                    className="lucide lucide-menu h-4 w-4"
                  >
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="hidden lg:block w-1/6 shadow-md bg-white p-2 max-w-[250px] h-screen overflow-y-auto">
                <div className="flex flex-col gap-2">
                  <a href="/add-contact">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white bg-gradient-to-r from-green-500 to-emerald-500 hover:bg-gradient-to-bl text-white h-10 px-4 py-2 w-full">
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
                        data-darkreader-inline-stroke=""
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 12h8"></path>
                        <path d="M12 8v8"></path>
                      </svg>
                      Add Contact
                    </button>
                  </a>
                  <a href="/upload-contact">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white bg-zinc-950 hover:bg-zinc-950/90 text-white h-10 px-4 py-2 w-full mb-0">
                      Bulk Import
                    </button>
                  </a>
                  <a href="/list">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white bg-zinc-950 hover:bg-zinc-950/90 text-white h-10 px-4 py-2 w-full mb-0">
                      Lists
                    </button>
                  </a>
                </div>
                <div className="mt-4 flex-1 min-h-0 flex flex-col">
                  <div className="text-xl font-bold my-2">Log History</div>
                  <div className="text-sm flex-1 min-h-0 overflow-y-auto flex flex-col">
                    <div className="p-2 bg-gray-50 rounded-md">
                      <div className="">
                        24/09/2025{" "}
                        <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                          1 log
                        </span>
                      </div>
                      <div>
                        <a className="p-2 w-full text-sm items-center flex space-x-2 cursor-pointer rounded-md hover:bg-gray-100">
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
                            className="lucide lucide-tag h-4 w-4 flex-shrink-0"
                            data-darkreader-inline-stroke=""
                          >
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                            <circle
                              cx="7.5"
                              cy="7.5"
                              r=".5"
                              fill="currentColor"
                              data-darkreader-inline-fill=""
                            ></circle>
                          </svg>
                          <div className="text-xs truncate flex-1">
                            csvOhioLicenseeSearchExport.csv
                          </div>
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 flex-shrink-0">
                            0
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full overflow-x-auto max-w-full">
                <div className="flex items-center max-w-full my-2">
                  <div className="flex flex-col space-y-2">
                    <div className="font-bold text-2xl">Contact List</div>
                    <div className="View and manage contacts">
                      View and manage contacts
                    </div>
                  </div>
                  <div className="ml-auto mr-4">
                    <div>
                      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white bg-blue-100 underline-offset-4 hover:underline h-10 px-4 py-2 text-primary hover:text-primary/80">
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
                          className="lucide lucide-info h-5 w-5 mr-2"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                        Show Help
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="sticky top-0 bg-white z-10">
                    <div className="flex flex-col py-2 sm:py-4 space-y-3 sm:space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        <Input
                          className="flex h-10 w-full rounded-md border-2 border-gray-400 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 focus:ring-0 focus:outline-none focus:border-[#075E54] max-w-90"
                          placeholder="Search By Filter"
                        />
                        <Input
                          className="flex h-10 w-full rounded-md border-2 border-gray-400 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 focus:ring-0 focus:outline-none focus:border-[#075E54] max-w-90"
                          placeholder="Filter By Phone Number"
                        />
                        <Input
                          className="flex h-10 w-full rounded-md border-2 border-gray-400 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 focus:ring-0 focus:outline-none focus:border-[#075E54] max-w-90"
                          placeholder="Filter By Tags"
                        />
                        <Input
                          className="flex h-10 w-full rounded-md border-2 border-gray-400 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 focus:ring-0 focus:outline-none focus:border-[#075E54] max-w-90"
                          placeholder="Search For Country"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        <button
                          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white border border-input bg-background hover:bg-gray-50 hover:text-accent-foreground h-10 px-4 py-2 w-full"
                          type="button"
                        >
                          Filter by status
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
                            className="lucide lucide-chevron-down ml-2 h-4 w-4"
                          >
                            <path d="m6 9 6 6 6-6"></path>
                          </svg>
                        </button>
                        <Toggle />
                      </div>
                    </div>
                    <ContactTable />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
