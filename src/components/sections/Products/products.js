import "./products.css";
import cookies from "../../../images/cookies/6.jpg";

import cake from "../../../images/cake.jpg";
const Products = () => (
  <section class="section-meals">
    <div class="container center-text">
      <span class="subheading">Products</span>
      <h2 class="heading-secondary">
        Homely Baked AI chooses from 5,000+ recipes
      </h2>
    </div>

    <div class="container grid grid--3-cols margin-bottom-md">
      <div class="meal">
        <img src={cookies} class="meal-img" alt="Japanese Gyozas" />
        <div class="meal-content">
          <div class="meal-tags">
            <span class="tag tag--vegetarian">Vegetarian</span>
          </div>
          <p class="meal-title">Cookies</p>
          <ul class="meal-attributes">
            <li class="meal-attribute">
              <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
              <span>
                <strong>650</strong> calories
              </span>
            </li>
            <li class="meal-attribute">
              <ion-icon class="meal-icon" name="restaurant-outline"></ion-icon>
              <span>
                NutriScore &reg; <strong>74</strong>
              </span>
            </li>
            <li class="meal-attribute">
              <ion-icon class="meal-icon" name="star-outline"></ion-icon>
              <span>
                <strong>300/-</strong>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="meal">
        <img src={cake} class="meal-img" alt="Avocado Salad" />
        <div class="meal-content">
          <div class="meal-tags">
            <span class="tag tag--vegan">Vegan</span>
            <span class="tag tag--paleo">Egg</span>
          </div>
          <p class="meal-title">Cakes</p>
          <ul class="meal-attributes">
            <li class="meal-attribute">
              <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
              <span>
                <strong>400</strong> calories
              </span>
            </li>
            <li class="meal-attribute">
              <ion-icon class="meal-icon" name="restaurant-outline"></ion-icon>
              <span>
                NutriScore &reg; <strong>92</strong>
              </span>
            </li>
            <li class="meal-attribute">
              <ion-icon class="meal-icon" name="star-outline"></ion-icon>
              <span>
                <strong>300/-</strong> per pound
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="diets">
        <h3 class="heading-tertiary">Many other products:</h3>
        <ul class="list">
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Cup Cakes</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Chocolates</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Jeera Cookies</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Choco chips cookies</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Sugar free cookies</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Birthday cakes</span>
          </li>
          <li class="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>Candies</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="container all-recipes">
      <a href="#" class="link">
        See all products &rarr;
      </a>
    </div>
  </section>
);

export default Products;
