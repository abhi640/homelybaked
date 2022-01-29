import react from "react";
import "./navbar.css";
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
  </header>
);

export default Navbar;
