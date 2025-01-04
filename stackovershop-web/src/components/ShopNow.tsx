import React from "react";
import "../pages/Home/home.css";
import flower from "../assets/fotos/flower.png";
import flower2 from "../assets/fotos/flor2sfd.png";

const ShopNow: React.FC = () => {
  return (
    <div className="shop-now-container">
      <div className="text-shop-now">
        <h4 className="shop-now-subheading">Love for Nature</h4>
        <h1 className="shop-now-heading">
          Discover Your <span className="shop-now-highlight">Green</span> Side
        </h1>
        <p className="shop-now-text">
          We are your one-stop destination for all things green and growing. Our
          website offers a wide array of stunning plants, ranging from vibrant
          flowers to lush indoor foliage, allowing you to create your very own
          green oasis.
        </p>
        <button className="shop-now-button">Shop now</button>
      </div>
      <div className="planta-verde">
        <img src={flower} alt="green-plant" />
      </div>
      <div className="planta-esq">
        <img src={flower2} alt="green-plant" />
      </div>
    </div>
  );
};

export default ShopNow;
