import PlantLogo from "../../../assets/PlantLogo.svg";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import "./HeaderStyle.css";

const Header = () => {
  return (
    <header className="header">
      <section className="header-logo">
        <img src={PlantLogo} alt="PlantPeace Logo" className="logo-img" />
      </section>
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/register" className="nav-link">Register</a></li>
          <li><a href="/products" className="nav-link">Products</a></li>
          <li><a href="/about-us" className="nav-link">About us</a></li>
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
