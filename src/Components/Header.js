import React from "react";
import { SiHotelsdotcom } from "react-icons/si";

const Header = () => {
  return (
    <section className="headerSection">
      <div className="header">
        <h1>GET FIT</h1>
      </div>
      <div className="headerOptions">
        <SiHotelsdotcom />
        <h3>About us</h3>
        <h3>Services</h3>
        <h3>Contact us</h3>
      </div>
    </section>
  );
};

export default Header;
