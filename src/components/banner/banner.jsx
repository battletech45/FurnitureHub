import React from 'react';
import './bannerStyle.css';
import arrow from '../../assets/arrowImage.svg';
import MySvg from '../../assets/companyLogo.svg';

const HeroBanner = ({title}) => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <img src={MySvg} alt="Cover" />
        <h1>{ title }</h1>
        <div className="hero-route">
          <p className="pathRoot"> Home </p>
          <img src={arrow} />
          <p className="path">{ title }</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
