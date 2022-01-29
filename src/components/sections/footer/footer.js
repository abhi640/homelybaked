import "../../../index.css";
import "../../../style.css";
import "../../../queries.css";
import logo from "../../../images/logo.png";

const Footer = () => (
  <footer class="footer">
    <div class="container grid grid--footer">
      <div class="logo-col">
        <a href="#" class="footer-logo">
          <img class="logo" alt="Homely Baked logo" src={logo} />
        </a>

        <ul class="social-links">
          <li>
            <a class="footer-link" href="#">
              <ion-icon class="social-icon" name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li>
            <a class="footer-link" href="#">
              <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li>
            <a class="footer-link" href="#">
              <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
            </a>
          </li>
        </ul>

        <p class="copyright">
          Copyright &copy; 2022 by Homely Baked, Inc. All rights reserved.
        </p>
      </div>
      <div class="address-col">
        <p class="footer-heading">Contact us</p>
        <address class="contacts">
          <p class="address">Harmu, Housing Colony, Ranchi - 834002.</p>
          <p>
            <a class="footer-link" href="tel:415-201-6370">
              9912341234
            </a>
            <br />
            <a class="footer-link" href="mailto:contact@homelybaked.in">
              contact@homelybaked.in
            </a>
          </p>
        </address>
      </div>
      <nav class="nav-col">
        <p class="footer-heading">Account</p>
        <ul class="footer-nav">
          <li>
            <a class="footer-link" href="#">
              Create account
            </a>
          </li>
          <li>
            <a class="footer-link" href="#">
              Sign in
            </a>
          </li>
          <li>
            <a class="footer-link" href="#">
              iOS app
            </a>
          </li>
          <li>
            <a class="footer-link" href="#">
              Android app
            </a>
          </li>
        </ul>
      </nav>

      <nav class="nav-col">
        <p class="footer-heading">Company</p>
        <ul class="footer-nav">
          <li>
            <a class="footer-link" href="#">
              About Us
            </a>
          </li>
          <li>
            <a class="footer-link" href="#">
              For Business
            </a>
          </li>
          <li>
            <a class="footer-link" href="#">
              Cooking partners
            </a>
          </li>
          <li>
            <a class="footer-link" href="#">
              Careers
            </a>
          </li>
        </ul>
      </nav>

      <nav class="nav-col">
        <p class="footer-heading">Resources</p>
        <ul class="footer-nav">
          <li>
            <a class="footer-link" href="#">
              Recipe directory{" "}
            </a>
          </li>
          <li>
            <a class="footer-link" href="#">
              Help center
            </a>
          </li>
          <li>
            <a class="footer-link" href="#">
              Privacy & terms
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
