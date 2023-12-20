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
    </div>
  );
};

export default AuthPage;
