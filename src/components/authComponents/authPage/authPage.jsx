import React from "react";
import LoginForm from "../login/login";
import RegisterForm from "../register/register";
import AuthBanner from "../authBanner/authBanner";
import AuthFooter from "../authFooter/authFooter";

const AuthPage = () => {
  return (
    <div>
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
