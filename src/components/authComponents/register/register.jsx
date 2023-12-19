import React, { useState } from "react";
import "./registerStyle.css";

const RegisterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email: ", email);
  };

  return (
    <div className="flex flex-col items-start max-w-[350px] m-auto p-5">
      <h2 className=" text-center mb-8 text-black text-4xl font-semibold">Register</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="text-black text-base font-medium">
            Email address
          </label>
          <input
            type="text"
            id="username"
            className=" my-8 w-full rounded-xl border border-[#9F9F9F] bg-[#FFF] h-12"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <p className="text-black text-justify text-base font-light">A link to set a new password will be sent to your email address.</p>
        <p className="text-black text-justify text-base font-light">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <span className="text-black text-base font-semibold">privacy policy.</span>
        </p>
        <button type="submit" className=" w-52 py-2 px-16 rounded-2xl border border-black cursor-pointer text-black text-xl font-normal hover:bg-[#FAF4F4]">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
