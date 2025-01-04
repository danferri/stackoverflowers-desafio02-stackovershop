import { BrowserRouter, Link } from "react-router-dom";
import PlantLogo from "../../assets/PlantLogo.svg";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/clerk-react";
import "./HeaderStyle.css";

const Header = () => {
  return (
    <header className="header">
      <section className="header-logo">
        <img src={PlantLogo} alt="PlantPeace Logo" className="logo-img" />
      </section>
      <nav className="nav">
        <ul className="nav-list">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/register" className="nav-link">Register</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/aboutUs" className="nav-link">About us</Link>
        </ul>
      </nav>
        <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Header;
