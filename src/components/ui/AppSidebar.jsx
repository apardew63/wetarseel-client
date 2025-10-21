import React from "react";
import { Layout, Drawer } from "antd";
import { SoundOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Image from "next/image";
import darshboad from "../../../public/dashboard.png";

const { Sider } = Layout;

const AppSidebar = ({
  screens,
  collapsed,
  setCollapsed,
  drawerVisible,
  setDrawerVisible,
  activeItem,
}) => {
  const router = useRouter();

  const sidebarItems = [
    {
      key: "dashboard",
      icon: <Image height={16} width={16} src={darshboad} />,
      label: "Dashboard",
      active: activeItem === "dashboard",
    },
    {
      key: "live-chat",
      icon: <SoundOutlined />,
      label: "Live Chat",
      active: activeItem === "live-chat",
    },
    {
      key: "contacts",
      icon: <SoundOutlined />,
      label: "Contacts",
      active: activeItem === "contacts",
    },
    {
      key: "templates",
      icon: <SoundOutlined />,
      label: "Templates",
      active: activeItem === "templates",
    },
    {
      key: "campaign",
      icon: <SoundOutlined />,
      label: "Campaign",
      active: activeItem === "campaign",
    },
    {
      key: "reports",
      icon: <SoundOutlined />,
      label: "Reports",
      active: activeItem === "reports",
    },
    {
      key: "agents",
      icon: <SoundOutlined />,
      label: "Agents",
      active: activeItem === "agents",
    },
    {
      key: "flows",
      icon: <SoundOutlined />,
      label: "Flows",
      active: activeItem === "flows",
    },
    {
      key: "messaging",
      icon: <SoundOutlined />,
      label: "Messaging Limits",
      active: activeItem === "messaging",
    },
    {
      key: "api",
      icon: <SoundOutlined />,
      label: "API Settings",
      active: activeItem === "api",
    },
    {
      key: "office",
      icon: <SoundOutlined />,
      label: "Office Settings",
      active: activeItem === "office",
    },
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
    <>
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
    </>
  );
};

export default AppSidebar;