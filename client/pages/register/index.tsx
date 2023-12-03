import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Register() {
  return (
    <div className="w-full h-screen flex items-center justify-center p-10 md:p-20 bg-gray-800">
      <div className="w-full bg-gray-300">
        <div className="w-full flex justify-center">
          <div
            className="hidden lg:w-1/2 lg:flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url('../rock_register.png')` }}
          ></div>
          <div className="w-full lg:w-1/2 py-16 px-10 md:px-32 lg:px-18 xl:px-32 items-center justify-center">
            <h1 className="font-germania text-[48px] mb-4">Register</h1>
            <Input
              inputLabel="User Name"
              labelFor="name"
              inputType="name"
              inputId="name"
              inputName="name"
              placeholderText="Enter your user name"
              ariaLabelName="Username"
              error="Error message"
            />
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
              <Button type="submit" aria-label="Register">
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
