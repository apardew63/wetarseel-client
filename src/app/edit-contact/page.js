"use client";
import React, { useState, useEffect } from "react";
import { Layout, Button, Form, Input, Select, message } from "antd";
import { SoundOutlined } from "@ant-design/icons";
import { useRouter, useSearchParams } from "next/navigation";
import Sidebar from "@/components/ui/Sidebar";
import AlertBanner from "@/components/ui/AlertBanner";
import AppHeader from "@/components/ui/AppHeader";

const { Content } = Layout;
const { Option } = Select;

export default function EditContactPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contactName = searchParams.get('name');
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchContact = async () => {
      if (!contactName) return;

      try {
        const response = await fetch(`http://localhost:3001/contact/search/${encodeURIComponent(contactName)}`);
        if (response.ok) {
          const contact = await response.json();
          form.setFieldsValue({
            name: contact.name,
            phone: contact.phone,
            tags: contact.tags,
            list: contact.list,
            status: contact.status,
          });
        } else {
          message.error("Contact not found");
          router.push("/contacts");
        }
      } catch (error) {
        console.error("Error fetching contact:", error);
        message.error("Error loading contact");
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, [contactName, form, router]);

  const handleSubmit = async (values) => {
    try {
      const response = await fetch(`http://localhost:3001/contact/${encodeURIComponent(contactName)}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        message.success("Contact updated successfully!");
        router.push("/contacts");
      } else {
        message.error("Failed to update contact");
      }
    } catch (error) {
      console.error("Error updating contact:", error);
      message.error("Error updating contact");
    }
  };

  if (loading) {
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
            title="Edit Contact"
            screens={{ lg: true }}
            setDrawerVisible={setDrawerVisible}
            onLogout={() => router.push("/login")}
          />
          <Content className="p-6 bg-gray-50 flex items-center justify-center">
            <div>Loading...</div>
          </Content>
        </Layout>
      </Layout>
    );
  }

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
          title="Edit Contact"
          screens={{ lg: true }}
          setDrawerVisible={setDrawerVisible}
          onLogout={() => router.push("/login")}
        />

        <Content className="p-6 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Contact</h1>
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
                    Update Contact
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