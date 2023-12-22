import React from "react";

const ContactField = ({ title }) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-black text-base font-medium mb-6">{title}</h4>
      <input
        type="text"
        className="rounded-2xl py-4 px-4 h-20 border border-[#9F9F9F] outline-none text-black"
      />
    </div>
  );
};

export default ContactField;
