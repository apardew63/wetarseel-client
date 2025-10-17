"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const onFinish = async (values) => {
    try {
      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Signup successful!");
        router.push("/login");
      } else {
        alert(data.error || "Signup failed");
      }
    } catch (error) {
      alert("Network error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <section className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left side: Full height image */}
        <div className="relative w-full h-full">
          <Image
            src="/bg-wetarseel.jpg"
            alt="Signup banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right side: Signup form */}
        <div className="flex items-center justify-center p-8 bg-background">
          <div className="w-full max-w-md space-y-6 p-4">
            <div className="p-4">
              <h1 className="font-bold text-2xl mb-3 w-full text-gray-900">
                Create your account
              </h1>

              {/* Google Signup Button */}
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#F2F2F2] w-full font-roboto text-black font-semibold hover:bg-[#EDEDED]"
                type="button"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="20" fill="#F2F2F2" />
                  <g clipPath="url(#clip0_710_6221)">
                    <path
                      d="M29.6 20.2273C29.6 19.5182 29.5364 18.8364 29.4182 18.1818H20V22.05H25.3818C25.15 23.3 24.4455 24.3591 23.3864 25.0682V27.5773H26.6182C28.5091 25.8364 29.6 23.2727 29.6 20.2273Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M20 30C22.7 30 24.9636 29.1045 26.6181 27.5773L23.3863 25.0682C22.4909 25.6682 21.3454 26.0227 20 26.0227C17.3954 26.0227 15.1909 24.2636 14.4045 21.9H11.0636V24.4909C12.7091 27.7591 16.0909 30 20 30Z"
                      fill="#34A853"
                    />
                    <path
                      d="M14.4045 21.9C14.2045 21.3 14.0909 20.6591 14.0909 20C14.0909 19.3409 14.2045 18.7 14.4045 18.1V15.5091H11.0636C10.3864 16.8591 10 18.3864 10 20C10 21.6136 10.3864 23.1409 11.0636 24.4909L14.4045 21.9Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M20 13.9773C21.4681 13.9773 22.7863 14.4818 23.8227 15.4727L26.6909 12.6045C24.9591 10.9909 22.6954 10 20 10C16.0909 10 12.7091 12.2409 11.0636 15.5091L14.4045 18.1C15.1909 15.7364 17.3954 13.9773 20 13.9773Z"
                      fill="#E94235"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_710_6221">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(10 10)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className="flex-1 text-center">Sign up with Google</span>
              </button>

              <div className="flex space-x-4 items-center my-3 w-full justify-center">
                <div className="h-[1px] w-full bg-gray-200"></div>
                <div className="text-gray-400 text-xs">OR</div>
                <div className="h-[1px] w-full bg-gray-200"></div>
              </div>
            </div>

            {/* Signup form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                onFinish(Object.fromEntries(formData.entries()));
              }}
              className="w-full flex flex-col space-y-6 mb-6 items-center justify-center gap-2 p-4 rounded shadow-slate-300"
            >
              <Input
                name="firstName"
                type="text"
                placeholder="First Name"
                required
                className="flex h-10 w-full rounded-md border-2 border-gray-400 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:border-[#075E54] focus:ring-0"
              />

              <Input
                name="lastName"
                type="text"
                placeholder="Last Name"
                required
                className="flex h-10 w-full rounded-md border-2 border-gray-400 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:border-[#075E54] focus:ring-0"
              />

              <Input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="flex h-10 w-full rounded-md border-2 border-gray-400 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:border-[#075E54] focus:ring-0"
              />

              <Input
                name="phone"
                type="tel"
                placeholder="Personal WhatsApp Number"
                required
                className="flex h-10 w-full rounded-md border-2 border-gray-400 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:border-[#075E54] focus:ring-0"
              />

              {/* Password & Confirm */}
              <div className="relative w-full">
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  className="flex h-10 w-full rounded-md border-2 border-gray-400 bg-white px-3 py-2 pr-10 text-sm placeholder:text-gray-400 focus:border-[#075E54] focus:ring-0"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              <Input
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                required
                className="flex h-10 w-full rounded-md border-2 border-gray-400 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:border-[#075E54] focus:ring-0"
              />

              <div className="flex items-start space-x-2 text-sm text-gray-800 mb-2">
                <input
                  id="terms"
                  type="checkbox"
                  name="terms"
                  className="h-4 w-4 shrink-0 rounded-sm border border-slate-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-slate-900 checked:text-slate-50 dark:border-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:checked:bg-slate-50 dark:checked:text-slate-900"
                  required
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                  <p className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <a
                      className="underline hover:text-primary"
                      target="_blank"
                      href="#"
                    >
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      className="underline hover:text-primary"
                      target="_blank"
                      href="#"
                    >
                      Privacy Statement
                    </a>
                    .
                  </p>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#075E54] hover:bg-[#064C45]"
              >
                Sign Up
              </Button>
            </form>

            <div className="p-4 text-center text-gray-800">
              Already have an account?{" "}
              <a href="/login" className="underline text-[#075E54]">
                Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
