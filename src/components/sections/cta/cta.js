import "../../../index.css";
import "../../../style.css";
import "../../../queries.css";
import image from "../../../images/hero.png";
const Cta = () => (
  <section class="section-cta">
    <div class="container">
      <div class="cta">
        <div class="cta-text-box">
          <h2 class="heading-secondary">Place your order now!</h2>
          <p class="cta-text">
            Healthy, tasty and hassle-free meals are waiting for you. Start
            eating well today. Place your order now!
          </p>

          <form class="cta-form" action="#">
            <div>
              <label for="full-name">Full Name</label>
              <input
                id="full-name"
                type="text"
                placeholder="John Smith"
                required
              />
            </div>

            <div>
              <label for="email">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="me@example.com"
                required
              />
            </div>

            <div>
              <label for="select-where">Please select an item.</label>
              <select id="select-where" required>
                <option value="">Please choose one option:</option>
                <option value="friends">Cookies</option>
                <option value="youtube">Cakes</option>
                <option value="youtube">Chocolates</option>
              </select>
            </div>

            <button class="btn btn--form">Order Now</button>
          </form>
        </div>
        <div className="imagediv" aria-label="Woman enjoying food">
          <img class="cta-img-box img" src={image} />
        </div>
      </div>
    </div>
  </section>
);

export default Cta;
