import React from "react";
import "./authFooterStyle.css";
import styled from "styled-components";

const Footer = () => {
  const CustomTextField = styled.input`
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
    padding: 8px;
    ::placeholder {
        color: #000; /* Adjust placeholder color */
      }
  `;

  return (
    <footer className="footer">
      <div className="column-center">
        <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
      </div>

      <div className="column">
        <h4>Links</h4>
        <div className="list">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="column">
        <h4>Help</h4>
        <div className="list">
          <a href="#">Payment Options</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Policies</a>
        </div>
      </div>

      <div className="column">
        <h4>Newsletter</h4>
        <div className="row">
          <CustomTextField type="text" placeholder="Enter Your Email Address" />
          <button className="button">SUBSCRIBE</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
