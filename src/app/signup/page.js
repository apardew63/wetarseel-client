"use client";
import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();

  const onFinish = async (values) => {
    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
        }),
      });

      const data = await response.json();

      console.log(data, "ddd")

      if (response.ok) {
        message.success(data.message || 'Signup successful!');
        router.push('/login');
      } else {
        message.error(data.error || 'Signup failed');
      }
    } catch (error) {
      message.error('Network error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Sign up for an account
          </h2>
        </div>
        <Form
          name="signup"
          onFinish={onFinish}
          layout="vertical"
          size="large"
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              { required: true, message: 'Please input your first name!' },
            ]}
          >
            <Input placeholder="Enter your first name" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              { required: true, message: 'Please input your last name!' },
            ]}
          >
            <Input placeholder="Enter your last name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Please input your password!' },
              { min: 6, message: 'Password must be at least 6 characters!' },
            ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center">
          <span className="text-gray-600">Already have an account? </span>
          <a href="/login" className="text-blue-600 hover:text-blue-500">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}