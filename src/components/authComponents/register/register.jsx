import React, { useState } from "react";
import "./registerStyle.css";

const RegisterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email: ", email);
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="register-label">
            Email address
          </label>
          <input
            type="text"
            id="username"
            className="register-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <p>A link to set a new password will be sent to your email address.</p>
        <p>
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <span className="privacy">privacy policy.</span>
        </p>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
