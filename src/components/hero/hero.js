import cookiepic from "../../images/cookies3.webp";
import "./hero.css";

const Hero = () => (
  <section className="section-hero">
    <div className="hero">
      <div className="hero-text-box">
        <h1 className="heading-primary">
          A healthy food delivered to your door, every single day
        </h1>
        <p className="hero-description">
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
        </p>
        <a href="#" className="btn">
          Order Now
        </a>
      </div>
      <div className="hero-img-box">
        <img src={cookiepic} />
      </div>
    </div>
  </section>
);
export default Hero;
