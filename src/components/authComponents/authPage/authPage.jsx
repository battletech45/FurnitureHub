import React from 'react';
import LoginForm from '../login/login';
import RegisterForm from '../register/register';
import './authPageStyle.css';

const authPage = () => {
  return (
    <div className="auth-row">
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default authPage;
