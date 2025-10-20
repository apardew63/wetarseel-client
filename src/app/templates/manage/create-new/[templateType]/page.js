"use client";
import React, { useState, useEffect } from "react";
import { Layout, Button, Form, Input, Select, Upload, message, Grid, Drawer } from "antd";
import { SoundOutlined, MenuOutlined, UploadOutlined } from "@ant-design/icons";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import darshboad from "../../../../../../public/dashboard.png";
import Sidebar from "@/components/ui/Sidebar";

const { Sider, Header, Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;
const { useBreakpoint } = Grid;

export default function TemplateFormPage() {
  const router = useRouter();
  const params = useParams();
  const templateType = params.templateType;
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [form] = Form.useForm();
  const screens = useBreakpoint();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };


  const onFinish = async (values) => {
    try {
      const response = await fetch("http://localhost:3001/template", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: values.category,
          templateName: values.name,
          language: values.language,
          message: values.content,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        message.success("Template created successfully!");
        router.push("/templates");
      } else {
        const error = await response.json();
        message.error(error.error || "Failed to create template");
      }
    } catch (error) {
      message.error("Network error. Please try again.");
    }
  };

  const getTemplateTitle = () => {
    switch (templateType) {
      case "marketing":
        return "Create Marketing Template";
      case "carousel":
        return "Create Carousel Template";
      case "utility":
        return "Create Utility Template";
      default:
        return "Create Template";
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
                {getTemplateTitle()}
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

        <Content className="p-6 bg-gray-100">
          <div className="flex-1 h-full overflow-y-auto">
            <div className="mx-auto p-6 min-h-full">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold">{getTemplateTitle()}</h2>
                <div className="text-xl">Create New Template</div>
                <hr />
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  className="space-y-6"
                >
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Please enter template name" }]}
                  >
                    <Input placeholder="Enter template name" />
                  </Form.Item>

                  <Form.Item
                    label="Category"
                    name="category"
                    rules={[{ required: true, message: "Please select a category" }]}
                  >
                    <Select placeholder="Select category">
                      <Option value="Marketing">Marketing</Option>
                      <Option value="Carousel">Carousel</Option>
                      <Option value="Utility">Utility</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="Language"
                    name="language"
                    rules={[{ required: true, message: "Please select language" }]}
                  >
                    <Select placeholder="Select language">
                      <Option value="en">English</Option>
                      <Option value="es">Spanish</Option>
                      <Option value="fr">French</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="Message Content"
                    name="content"
                    rules={[{ required: true, message: "Please enter message content" }]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Enter your message content"
                    />
                  </Form.Item>

                  {templateType === "carousel" && (
                    <Form.Item label="Media Upload" name="media">
                      <Upload
                        listType="picture-card"
                        maxCount={10}
                        accept="image/*"
                      >
                        <div>
                          <UploadOutlined />
                          <div style={{ marginTop: 8 }}>Upload Images</div>
                        </div>
                      </Upload>
                    </Form.Item>
                  )}

                  <Form.Item>
                    <div className="flex space-x-4">
                      <Button onClick={() => router.back()}>
                        Cancel
                      </Button>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="bg-gradient-to-r from-green-500 to-emerald-500 border-none"
                      >
                        Create Template
                      </Button>
                    </div>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}