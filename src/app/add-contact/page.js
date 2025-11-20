"use client";
import React, { useState, useEffect } from "react";
import { Layout, Button, Form, Input, Select, message } from "antd";
import { SoundOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/ui/Sidebar";
import AlertBanner from "@/components/ui/AlertBanner";
import AppHeader from "@/components/ui/AppHeader";

const { Content } = Layout;
const { Option } = Select;

export default function AddContactPage() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const handleSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        message.success("Contact added successfully!");
        router.push("/contacts");
      } else {
        message.error("Failed to add contact");
      }
    } catch (error) {
      console.error("Error adding contact:", error);
      message.error("Error adding contact");
    }
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
          title="Add Contact"
          screens={{ lg: true }} // Assuming desktop for simplicity
          setDrawerVisible={setDrawerVisible}
          onLogout={() => router.push("/login")}
        />

        <Content className="p-6 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Add Contact</h1>
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                className="space-y-4"
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: "Please enter the name" }]}
                >
                  <Input placeholder="Enter contact name" />
                </Form.Item>

                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[{ required: true, message: "Please enter the phone number" }]}
                >
                  <Input placeholder="Enter phone number" />
                </Form.Item>

                <Form.Item label="Tags" name="tags">
                  <Input placeholder="Enter tags (comma separated)" />
                </Form.Item>

                <Form.Item label="Add Lead to a list (Optional)" name="list">
                  <Input placeholder="Enter list name" />
                </Form.Item>

                <Form.Item
                  label="Status"
                  name="status"
                  rules={[{ required: true, message: "Please select a status" }]}
                >
                  <Select placeholder="Select status">
                    <Option value="new">New</Option>
                    <Option value="active">Active</Option>
                    <Option value="inactive">Inactive</Option>
                  </Select>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="w-full">
                    Add Contact
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}