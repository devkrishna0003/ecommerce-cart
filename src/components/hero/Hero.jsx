import React from "react";
import styles from "./Hero.module.css";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.content}>
        <h1>Welcome to Our Online Store</h1>
        <p>Discover the latest trends and shop your favorite products.</p>
        <NavLink to="/cart" className={styles.shopButton}>
          Goto Cart
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
