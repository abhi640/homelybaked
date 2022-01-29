import cookiepic from "../../images/cookies3.webp";
import "./hero.css";
import customer1 from "../../images/customers/customer-1.jpg";
import customer2 from "../../images/customers/customer-2.jpg";
import customer3 from "../../images/customers/customer-3.jpg";
import customer4 from "../../images/customers/customer-4.jpg";
import customer5 from "../../images/customers/customer-5.jpg";
import customer6 from "../../images/customers/customer-5.jpg";

const Hero = () => (
  <section className="section-hero">
    <div className="hero">
      <div className="hero-text-box">
        <h1 className="heading-primary">
          For The Love of <span>Cookies, Chocolates and Cakes</span>
        </h1>
        <p className="hero-description">
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
        </p>
        <a href="#" className="btn">
          Order Now
        </a>
        <div class="delivered-meals">
          <div class="delivered-imgs">
            <img src={customer1} alt="Customer photo" />
            <img src={customer2} alt="Customer photo" />
            <img src={customer3} alt="Customer photo" />
            <img src={customer4} alt="Customer photo" />
            <img src={customer5} alt="Customer photo" />
            <img src={customer6} alt="Customer photo" />
          </div>
          <p class="delivered-text">
            <span>2500+</span> orders delivered last year!
          </p>
        </div>
      </div>
      <div className="hero-img-box">
        <img className="hero-img" src={cookiepic} />
      </div>
    </div>
  </section>
);
export default Hero;
