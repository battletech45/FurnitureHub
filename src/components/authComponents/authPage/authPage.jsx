import React from "react";
import LoginForm from "../login/login";
import RegisterForm from "../register/register";
import AuthBanner from "../authBanner/authBanner";
import AuthFooter from "../authFooter/authFooter";
import Navbar from "@/components/navbar";
import HeroBanner from "@/components/banner";

const AuthPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroBanner title={'My Account'}/>
      <div className="flex items-center justify-evenly">
        <LoginForm />
        <RegisterForm />
      </div>
      <AuthBanner />
      <AuthFooter />
      <div className="flex flex-col items-center">
        <div className="bg-[#D9D9D9] w-9/12 h-0.5 items-center justify-center flex my-12"></div>
        <div className="justify-start items-start flex w-9/12">
          <p className="text-black text-base font-normal mb-8">
            2022 Meubel House. All rights reverved
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
