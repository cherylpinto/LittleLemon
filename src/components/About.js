import React from "react";
import image from "../assets/small_logo.png"

const About = () => {
  return (
    <main className="about-page">
      <section className="about-intro">
        <h1>About Little Lemon</h1>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant dedicated to
          serving delicious, authentic dishes with a modern twist. Located in
          the heart of the city, our goal is to provide an unforgettable dining
          experience that celebrates our rich culinary heritage.
        </p>
      </section>

      <section className="about-story">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Established in 2021, Little Lemon was born out of a passion for
            sharing the vibrant flavors of Mediterranean cuisine with the
            community. Our recipes have been passed down through generations
            and are lovingly crafted to honor tradition while embracing
            creativity.
          </p>
          <p>
            Whether you're here for a family dinner, a casual meal, or a special
            celebration, we promise to make every visit memorable with our warm
            hospitality and fresh, flavorful dishes.
          </p>
        </div>
        <div className="about-image">
          <img src={image} alt="About Little Lemon" />
        </div>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>
            <b>Fresh Ingredients:</b> We source the freshest, highest-quality
            ingredients to create dishes that burst with flavor.
          </li>
          <li>
            <b>Community:</b> Little Lemon is more than just a restaurant; it's
            a place to bring people together.
          </li>
          <li>
            <b>Sustainability:</b> We are committed to environmentally friendly
            practices and reducing food waste.
          </li>
        </ul>
      </section>
    </main>
  );
};

export default About;
