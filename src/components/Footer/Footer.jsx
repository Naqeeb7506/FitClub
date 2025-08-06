import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="blur l-blur"></div>
      <div className="container">
        <div className="f-logos">
          <a href="https://github.com/Naqeeb7506">
            <img src="/image/github.png" alt="github" />
          </a>
          <a href="https://www.instagram.com/ansari.naqeeb/">
            <img src="/image/instagram.png" alt="instagram" />
          </a>
          <a href="https://www.linkedin.com/in/ansari-mohd-naqeeb2002/">
            <img src="/image/linkedin.png" alt="linkedin" />
          </a>
        </div>
        <div className="footer-logo">
          <img src="/image/logo.png" alt="" />
        </div>
      </div>
      <div className="blur r-blur"></div>
    </footer>
  );
};

export default Footer;
