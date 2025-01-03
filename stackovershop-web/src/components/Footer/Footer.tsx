import React from 'react';
import './Footer.css';
import plantIcon from '/src/assets/fotos/plant_icon.png'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="top-section">
        <div className="left">
          <h4>Stay Fresh</h4>
          <p>compassinhos@gmail.com</p>
          <p>+55 41 99999-9999</p>
        </div>

        <div className="links">
          <div>
            <h4>Links</h4>
            <ul>
              <li>About us</li>
              <li>Products</li>
              <li>Blogs</li>
            </ul>
          </div>

          <div>
            <h4>Community</h4>
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
          <img src={plantIcon} alt="plantPeace Logo" />
        </div>
        </a>
        
        <p className="rights-reserved">Compassinhos® - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


