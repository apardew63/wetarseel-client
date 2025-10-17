"use client";
import React, { useState, useEffect } from "react";
import { Layout, Button, Badge, Drawer, Grid } from "antd";
import { SoundOutlined, MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import tiktok from "../../public/tik-tok.png";
import instagram from "../../public/instagram.png";
import facebook from "../../public/messenger.png";
import QrCode from "@/components/QrCode";
import Image from "next/image";
import darshboad from '../../public/dashboard.png'

const { Sider, Header, Content } = Layout;
const { useBreakpoint } = Grid;

export default function WetarseelDashboard() {
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

  const sidebarItems = [
    {
      key: "dashboard",
      icon: <Image height={16} width={16} src={darshboad}/>,
      label: "Dashboard",
      active: true,
    },
    { key: "live-chat", icon: <SoundOutlined />, label: "Live Chat" },
    { key: "contacts", icon: <SoundOutlined />, label: "Contacts" },
    { key: "templates", icon: <SoundOutlined />, label: "Templates" },
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
            onClick={() => router.push(item.key === 'dashboard' ? '/' : `/${item.key}`)}
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
        {/* <div className="bg-orange-50 border-b border-orange-200 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full border-2 border-orange-400 flex items-center justify-center">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>
              <span className="text-orange-800 text-sm">
                Your Business profile is incomplete.
                <span className="underline cursor-pointer ml-1">
                  Update in Profile
                </span>
              </span>
            </div>
          </div>
        </div> */}

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
                Wetarseel demo account
                {/* <span className="text-sm text-gray-500 ml-2">(Admin)</span>
                <span className="text-sm text-gray-700 ml-2">Business Quality:</span>
                <span className="text-green-600 font-medium ml-1">• GREEN</span> */}
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

        <div className="p-6 bg-gray-100 min-h-full">
          <div class="flex items-center space-x-1 flex-col md:flex-row p-4">
            <div class="text-gray-600">
              <div class="flex items-center space-x-1">
                <div>Hey Demo User, Welcome to WeTarseel!</div>
                <div>Your business phone number is +923292161124</div>
              </div>
              <div>Your verified name is: WeTarseel AI Pakistan</div>
            </div>
          </div>

          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-gradient-to-br from-purple-200 via-purple-100 to-blue-100 rounded-lg p-5 text-gray-800 border border-purple-200/50 flex flex-col justify-between h-full w-full">
              <div>
                <div class="font-bold mb-2">
                  Connect Social Media for your Business
                </div>
                <div class="mb-1">
                  You'll need to Connect Facebook &amp; Instagram Business
                  accounts to use social features
                </div>
              </div>
              <div>
                <button
                  class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 white bg-zinc-950 hover:bg-zinc-950/90 h-10 bg-gradient-to-r from-[#4267B2] to-[#E1306C] hover:from-[#365899] hover:to-[#C13584] text-white border-none rounded-lg px-6 py-2 shadow-md"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:rc:"
                  data-state="closed"
                >
                  <span></span>Connect Social Accounts
                </button>
              </div>
            </div>
            <div class="bg-gradient-to-br from-gray-600 via-gray-800 to-gray-800 rounded-lg p-5 text-gray-800 border border-black-200/50 flex flex-col justify-between h-full w-full">
              <h2 class="font-semibold text-xl text-white">Setup TikTok</h2>
              <p class="text-gray-300 mb-2">
                Connect your TikTok account to get started.
              </p>
              <a
                class="p-2 inline-block w-[250px] rounded-md bg-white text-black text-center font-medium border border-gray-300 hover:bg-gray-100 transition"
                target="_blank"
                href="https://www.tiktok.com/v2/auth/authorize?client_key=7533122493645602832&amp;scope=user.info.basic%2Cuser.account.type%2Cmessage.list.read%2Cmessage.list.send%2Cmessage.list.manage%2Cuser.info.username%2Cuser.info.stats%2Cuser.info.profile&amp;response_type=code&amp;redirect_uri=https%3A%2F%2Fapp.wetarseel.ai%2Fapi%2Ftiktok&amp;state=nfjylyqk8yk8ssq"
              >
                Connect TikTok
              </a>
            </div>
          </div>

          <div>
            {/* Business Status */}
            <div className="mt-6 mb-6">
              <div className="grid gap-3 md:grid-cols-2">
                <div class="bg-white rounded-lg p-5 border space-y-4 border-gray-200">
                  <div class="font-bold">Business Status</div>
                  <div class="p-5 bg-green-100 border border-gray-200 rounded-lg">
                    <div class="flex items-center w-full">
                      <div class="space-x-2 flex-1 flex items-center">
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
                          class="lucide lucide-message-circle text-green-800"
                        >
                          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                        </svg>
                        <div class="text-green-800 font-bold">
                          Connected successfuly!
                        </div>
                      </div>
                      <div class="bg-green-500 rounded-lg px-2 py-1 text-white ">
                        Live
                      </div>
                    </div>
                  </div>
                  <div class="space-y-4">
                    <div class="p-5 bg-white border border-gray-200 rounded-lg">
                      <div class="flex items-center w-full">
                        <div class="space-x-2 flex-1 flex items-center">
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
                            class="lucide lucide-message-square "
                          >
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                          </svg>
                          <div class=" font-bold">
                            Phone and display verification
                          </div>
                        </div>
                        <div class="bg-green-500 rounded-lg px-2 py-1 text-white ">
                          Verified
                        </div>
                      </div>
                    </div>
                    <div class="p-5 bg-white border border-gray-200 rounded-lg mb-4">
                      <div class="flex items-center w-full">
                        <div class="space-x-2 flex-1 flex items-center">
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
                            class="lucide lucide-circle-check-big text-green-600"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <path d="m9 11 3 3L22 4"></path>
                          </svg>
                          <div class="font-bold">
                            Display Name Registered Successfully
                          </div>
                        </div>
                        <div class="text-green-600">Success</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-white rounded-lg p-5 border border-gray-200">
                  <div class="font-bold mb-2">Connected Social Accounts</div>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3 p-3 border border-gray-200 rounded-lg bg-blue-50/50">
                      <div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                        <Image height={20} width={20} src={facebook} />
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium">Facebook Page</p>
                        <span class="inline-block px-2 py-1 text-xs font-medium text-red-600 bg-red-100 rounded-full">
                          Not Connected
                        </span>
                      </div>
                    </div>
                    <div class="flex items-center gap-3 p-3 border border-gray-200 rounded-lg bg-pink-50/50">
                      <div class="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
                        <Image height={20} width={20} src={instagram} />
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium">Instagram Business</p>
                        <span class="inline-block px-2 py-1 text-xs font-medium text-red-600 bg-red-100 rounded-full">
                          Not Connected
                        </span>
                      </div>
                    </div>
                    <div class="flex items-center gap-3 p-3 border rounded-lg border-gray-200 bg-gray-50/50">
                      <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                        <Image height={20} width={20} src={tiktok} />
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium">TikTok Business</p>
                        <span class="inline-block px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
                          Not Connected
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* QR Code Section */}
              <QrCode />

              

              {/* Recent Campaign Performances - Placeholder */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h1 class="text-3xl font-bold">Recent Campaign Performances</h1>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">
                    Campaign performance data will appear here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Layout>
  );
}
