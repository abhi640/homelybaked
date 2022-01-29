import react from "react";
import "./navbar.css";

const Navbar = () => (
  <nav class="navbar">
    <div class="logo">Homely Baked</div>

    <ul class="nav-links">
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">
        &#9776;
      </label>

      <div class="menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>

        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </div>
    </ul>
  </nav>
);

export default Navbar;
