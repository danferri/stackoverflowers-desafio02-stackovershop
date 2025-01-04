import React from "react";
import "./Footer.css";
import plantIcon2 from "../../../assets/fotos/plant_icon.png";


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="top-section">
        <div className="left">
          <p id="stay-fresh">Stay Fresh</p>
          <p className="p-left">compassinhos@gmail.com</p>
          <p className="p-left">+55 41 99999-9999</p>
        </div>

        <div className="links">
          <div>
            <h4>Links</h4>
            <br />
            <ul>
                <li>About us</li>
                <li>Products</li>
                <li>Blogs</li>
            </ul>
          </div>

          <div>
            <h4>Community</h4>
            <br />
            <ul>
              <li>About us</li>
              <li>Products</li>
              <li>Blogs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="bottom-section">
        <a href="/">
          <div className="logo">
            <img src={plantIcon2} alt="plantPeace Logo" />
          </div>
        </a>

        <p className="rights-reserved">Compassinhos® - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
