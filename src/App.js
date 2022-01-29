import Navbar from "./components/sections/navbar/Navbar";
import Hero from "./components/sections/hero/hero";
import Features from "./components/sections/features/features";
import Products from "./components/sections/Products/products";
import Testimonials from "./components/sections/testimonials/testimonials";
import Cta from "./components/sections/cta/cta";
import Footer from "./components/sections/footer/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Testimonials />

      <Cta />
      <Footer />
    </div>
  );
}

export default App;
