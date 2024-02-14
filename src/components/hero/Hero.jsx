import React from "react";
import styles from "./Hero.module.css";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Welcome to our E-commerce Website</h1>
        <p>Discover the latest trends and shop your favorite styles.</p>
        <NavLink to="/card" className={styles.button}>
          Go to All Products
        </NavLink>
      </div>
      <div className={styles.heroImage}>
        <img
          src="https://img.freepik.com/free-vector/watercolor-floral-arrangement-watercolor-flower-bouquet-rose-pink-yellow-wedding_41066-3696.jpg?w=740&t=st=1707559235~exp=1707559835~hmac=86bf9f5a79c7fd34f41b021a5eb358544424b04fb123b2802cc1b5d07cfba66e"
          alt="Model"
        />
      </div>
    </div>
  );
};

export default Hero;
