import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PlantLogo from "../assets/PlantLogo.svg";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/clerk-react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header>
      <section className="PlantPeaceLogo">
        <img src={PlantLogo} alt="PlantPeace Logo" />
      </section>
      <BrowserRouter>
        <nav className="HeaderLinks">
          <ul className="nav justify-content-center">
            <li className="nav-item small">
              <Link to="/home" className="nav-link" 
              style={{color:"rgb(18, 65, 18)", fontSize: "13px"}}>Home</Link>
            </li>
            <li className="nav-item small">
              <Link to="/register" className="nav-link" 
              style={{color:"rgb(18, 65, 18)", fontSize: "13px"}}>Register</Link>
            </li>
            <li className="nav-item small">
              <Link to="/products" className="nav-link" 
              style={{color:"rgb(18, 65, 18)", fontSize: "13px"}}>Products</Link>
            </li>
            <li className="nav-item small">
              <Link to="/aboutUs" className="nav-link" 
              style={{color:"rgb(18, 65, 18)", fontSize: "13px"}}>About us</Link>
            </li>
          </ul>
        </nav>
      </BrowserRouter>

      {/* Usuario deslogado */}
      <SignedOut>
        <SignInButton />
      </SignedOut>

      {/* Usuario logado */}
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Header;
