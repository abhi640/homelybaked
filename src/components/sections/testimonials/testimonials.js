import "./testimonials.css";
import image1 from "../../../images/cookies/1.jpg";
import image2 from "../../../images/cookies/2.jpg";
import image3 from "../../../images/cookies/3.jpg";
import image4 from "../../../images/cookies/4.jpg";
import image5 from "../../../images/cookies/5.jpg";
import image6 from "../../../images/cookies/6.jpg";
import image7 from "../../../images/cookies/7.jpg";

const Testimonials = () => (
  <section class="section-testimonials">
    <div class="testimonials-container">
      <span class="subheading">Testimonials</span>
      <h2 class="heading-secondary">Once you try it, you can't go back</h2>

      <div class="testimonials">
        <figure class="testimonial">
          <img
            class="testimonial-img"
            alt="Photo of customer Dave Bryson"
            src={image1}
          />
          <blockquote class="testimonial-text">
            Inexpensive, healthy and great-tasting cookies, without even having
            to order manually! It feels truly magical.
          </blockquote>
          <p class="testimonial-name">&mdash; Amartya Abhilash</p>
        </figure>

        <figure class="testimonial">
          <img
            class="testimonial-img"
            alt="Photo of customer Ben Hadley"
            src={image1}
          />
          <blockquote class="testimonial-text">
            These cookies are amazing! I always love to see what new flavors
            they come up with. I truly have never ate a cookie here that I
            didn’t like!
          </blockquote>
          <p class="testimonial-name">&mdash; Khushboo</p>
        </figure>

        <figure class="testimonial">
          <img
            class="testimonial-img"
            alt="Photo of customer Steve Miller"
            src={image1}
          />
          <blockquote class="testimonial-text">
            I must say diets never work because of how good these dam cookies
            are!! It’s one of those you MUST eat I mean the flavors are on
            POINT!! 🤤
          </blockquote>
          <p class="testimonial-name">&mdash; Anushka</p>
        </figure>

        <figure class="testimonial">
          <img
            class="testimonial-img"
            alt="Photo of customer Hannah Smith"
            src={image1}
          />
          <blockquote class="testimonial-text">
            Very nice cookies. Awesome cookies. Awesome cakes. Must order.
          </blockquote>
          <p class="testimonial-name">&mdash; Unknown Person</p>
        </figure>
      </div>
    </div>

    <div class="gallery">
      <figure class="gallery-item">
        <img
          src={image2}
          alt="Photo of beautifully
        arranged food"
        />
      </figure>
      <figure class="gallery-item">
        <img
          src={image3}
          alt="Photo of beautifully
        arranged food"
        />
      </figure>
      <figure class="gallery-item">
        <img
          src={image4}
          alt="Photo of beautifully
        arranged food"
        />
      </figure>
      <figure class="gallery-item">
        <img
          src={image5}
          alt="Photo of beautifully
        arranged food"
        />
      </figure>
      <figure class="gallery-item">
        <img
          src={image6}
          alt="Photo of beautifully
        arranged food"
        />
      </figure>
      <figure class="gallery-item">
        <img
          src={image7}
          alt="Photo of beautifully
        arranged food"
        />
      </figure>
      <figure class="gallery-item">
        <img
          src={image1}
          alt="Photo of beautifully
        arranged food"
        />
      </figure>
      <figure class="gallery-item">
        <img
          src={image2}
          alt="Photo of beautifully
        arranged food"
        />
      </figure>
      <figure class="gallery-item">
        <img
          src={image3}
          alt="Photo of beautifully
        arranged food"
        />
      </figure>
      <figure class="gallery-item">
        <img
          src={image4}
          alt="Photo of beautifully
        arranged food"
        />
      </figure>
      <figure class="gallery-item">
        <img
          src={image5}
          alt="Photo of beautifully
        arranged food"
        />
      </figure>
      <figure class="gallery-item">
        <img
          src={image6}
          alt="Photo of beautifully
        arranged food"
        />
      </figure>
    </div>
  </section>
);

export default Testimonials;
