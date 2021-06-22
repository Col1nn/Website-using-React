import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { SiAffinitydesigner } from "react-icons/si";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlinePhone, AiOutlineHome } from "react-icons/ai";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact Info</h2>
            <p>
              <AiOutlineHome className="footer-link-items-home" /> Address:
              st.XYZ 11, city Tychy
            </p>
            <p>
              <AiOutlinePhone className="footer-link-items-phone" /> Phone:
              222222222
            </p>
            <p>
              <HiOutlineMailOpen className="footer-link-items-email" /> Email:
              Vovage@xyz.com
            </p>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <p>
              Facebook <FiFacebook className="footer-link-items-facebook" />
            </p>
            <p>
              Instagram <FaInstagram className="footer-link-items-instagram" />
            </p>
            <p>
              Twitter <RiTwitterLine className="footer-link-items-twitter" />
            </p>
          </div>
        </div>
      </div>
      <section className="copyright">
        <div className="copyright-rights">
          © TRLTOUR 2021 <SiAffinitydesigner className="copyright-logo" />
        </div>
      </section>
    </div>
  );
};

export default Footer;
