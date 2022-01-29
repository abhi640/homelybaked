import react from "react";
import "../../../index.css";
import "../../../style.css";
import "../../../queries.css";
import logo from "../../../images/logo.png";

const Navbar = () => (
  <header class="header">
    <a href="#">
      <img class="logo" alt="Homely Baked logo" src={logo} />
    </a>
    <nav class="main-nav">
      <ul class="main-nav-list">
        <li>
          <a class="main-nav-link" href="#">
            About Us
          </a>
        </li>
        <li>
          <a class="main-nav-link" href="#">
            Products
          </a>
        </li>

        <li>
          <a class="main-nav-link" href="#">
            Gallery
          </a>
        </li>
        <li>
          <a href="#" class="main-nav-link nav-cta">
            Order Now
          </a>
        </li>
      </ul>
    </nav>
    <button class="btn-mobile-nav">
      <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
      <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
    </button>
  </header>
);

export default Navbar;
