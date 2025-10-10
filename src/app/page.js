"use client"
import React, { useState, useEffect } from 'react';
import { Layout, Button, Badge, Drawer, Grid } from 'antd';
import { SoundOutlined, MenuOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const { Sider, Header, Content } = Layout;
const { useBreakpoint } = Grid;

export default function WetarseelDashboard() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const screens = useBreakpoint();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  const sidebarItems = [
    { key: 'dashboard', icon: <SoundOutlined />, label: 'Dashboard', active: true },
    { key: 'live-chat', icon: <SoundOutlined />, label: 'Live Chat' },
    { key: 'contacts', icon: <SoundOutlined />, label: 'Contacts' },
    { key: 'templates', icon: <SoundOutlined />, label: 'Templates' },
    { key: 'campaign', icon: <SoundOutlined />, label: 'Campaign' },
    { key: 'reports', icon: <SoundOutlined />, label: 'Reports' },
    { key: 'agents', icon: <SoundOutlined />, label: 'Agents' },
    { key: 'flows', icon: <SoundOutlined />, label: 'Flows' },
    { key: 'messaging', icon: <SoundOutlined />, label: 'Messaging Limits' },
    { key: 'api', icon: <SoundOutlined />, label: 'API Settings' },
    { key: 'office', icon: <SoundOutlined />, label: 'Office Settings' },
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
            className={`mx-2 mb-1 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
              item.active
                ? 'bg-gray-700 text-white'
                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
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
          bodyStyle={{ padding: 0, background: '#111827' }}
        >
          <SidebarContent />
        </Drawer>
      )}

      <Layout>
        {/* Top Alert Banner */}
        <div className="bg-orange-50 border-b border-orange-200 px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full border-2 border-orange-400 flex items-center justify-center">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>
              <span className="text-orange-800 text-sm">
                Your Business profile is incomplete.
                <span className="underline cursor-pointer ml-1">Update in Profile</span>
              </span>
            </div>
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
              <h1 className="lg:text-xl text-base font-semibold text-gray-900">
                Wetarseel demo account
                {/* <span className="text-sm text-gray-500 ml-2">(Admin)</span>
                <span className="text-sm text-gray-700 ml-2">Business Quality:</span>
                <span className="text-green-600 font-medium ml-1">• GREEN</span> */}
                <div className="inline-flex items-center justify-center w-4 h-4 bg-green-100 rounded-full ml-2">
                  <SoundOutlined className="text-green-600 text-xs" />
                </div>
              </h1>
            </div>
            <div className="flex items-center space-x-6">
              <Button onClick={handleLogout} type="primary" danger>
                Logout
              </Button>
              {/* <span className="text-sm text-gray-600">Free Package</span> */}
              <span className="text-sm text-red-500">No Limit Assigned</span>
              <span className="text-sm font-medium">DU</span>
            </div>
          </div>
        </Header>

        {/* Main Content */}
        <Content className="p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Message */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-700 mb-2">
                    Hey Demo User, Welcome to WeTarseel! Your business phone number is +923292161124
                  </p>
                  <p className="text-gray-700">Your verified name is: WeTarseel AI PK</p>
                </div>
                <Button type="link" className="text-gray-600">
                  Refresh to get latest updates
                </Button>
              </div>
            </div>

            {/* Business Status */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Business Status</h2>

              {/* Connected Status */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <SoundOutlined className="text-green-600 text-lg" />
                    <span className="text-green-800 font-medium">Connected successfully!</span>
                  </div>
                  <Badge
                    status="success"
                    text="Live"
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium"
                  />
                </div>
              </div>

              {/* Phone Verification */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <SoundOutlined className="text-gray-600 text-lg" />
                    <span className="text-gray-700 font-medium">Phone and display verification</span>
                  </div>
                  <Badge
                    status="success"
                    text="Verified"
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* QR Code Section */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Download your QR code</h2>

                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white rounded-lg border-2 border-gray-200">
                    {/* Replace with Ant QRCode */}
                    <div className="w-40 h-40 flex items-center justify-center border border-gray-300">
                      <span className="text-gray-500">QR Code</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    type="primary"
                    block
                    size="large"
                    className="bg-black hover:bg-gray-800 border-black text-white h-12"
                  >
                    Download QR Code
                  </Button>

                  <div className="grid grid-cols-2 gap-3">
                    <Button block className="h-10">
                      Open in WhatsApp
                    </Button>
                    <Button block className="h-10">
                      Copy Link
                    </Button>
                  </div>
                </div>
              </div>

              {/* Recent Campaign Performances - Placeholder */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Campaign Performances</h2>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Campaign performance data will appear here</p>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}