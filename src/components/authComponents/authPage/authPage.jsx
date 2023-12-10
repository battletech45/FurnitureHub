import React from "react";
import LoginForm from "../login/login";
import RegisterForm from "../register/register";
import AuthBanner from "../authBanner/authBanner";
import AuthFooter from "../authFooter/authFooter";
import "./authPageStyle.css";

const authPage = () => {
  return (
    <div>
      <div className="auth-row">
        <LoginForm />
        <RegisterForm />
      </div>
      <AuthBanner />
      <AuthFooter />
      <div className="rights-container">
        <p className="rights">2022 Meubel House. All rights reverved</p>
      </div>
    </div>
  );
};

export default authPage;
