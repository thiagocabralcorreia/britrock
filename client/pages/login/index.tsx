import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Login() {
  return (
    <div className="w-full h-screen flex items-center justify-center p-10 md:p-20 bg-gray-800">
      <div className="w-full bg-gray-300">
        <div className="w-full flex justify-center">
          <div className="w-full lg:w-1/2 py-10 px-10 md:px-32 lg:px-18 xl:px-32 items-center justify-center">
            <h1 className="font-germania text-[48px] mb-4">Login</h1>
            <Input
              inputLabel="Email Address"
              labelFor="email"
              inputType="email"
              inputId="email"
              inputName="email"
              placeholderText="Enter your email"
              ariaLabelName="Email"
              error="Error message"
            />
            <Input
              inputLabel="Password"
              labelFor="password"
              inputType="password"
              inputId="password"
              inputName="password"
              placeholderText="Enter your password"
              ariaLabelName="password"
              error="Error message"
            />
            <div className="w-full flex justify-end mt-8">
              <Button type="submit" aria-label="Login">
                Login
              </Button>
            </div>
          </div>
          <div
            className="hidden lg:w-1/2 lg:flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url('../rock_login.jpg')` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
