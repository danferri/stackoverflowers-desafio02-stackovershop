import { NavLink } from "react-router-dom";
import PlantLogo from "../../../assets/PlantLogo.svg";
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
          <NavLink to="/" className={({ isActive }: 
          { isActive: boolean }) => isActive ? "nav-link active" : "nav-link" }>Home</NavLink>
          <NavLink to="/register" className={({ isActive }: 
          { isActive: boolean }) => isActive ? "nav-link active" : "nav-link" }>Register</NavLink>
          <NavLink to="/product" className={({ isActive }: 
          { isActive: boolean }) => isActive ? "nav-link active" : "nav-link" }>Products</NavLink>
          <NavLink to="/about-us" className={({ isActive }: 
          { isActive: boolean }) => isActive ? "nav-link active" : "nav-link" }>About us</NavLink>
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