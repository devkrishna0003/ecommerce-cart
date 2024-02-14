import React from "react";
import styles from "./Home.module.css";
import { Card, Hero } from "../index";
import { useSelector } from "react-redux";

const Home = () => {
  const { items } = useSelector((state) => state.cart);
  console.log(items);
  return (
    <div className={styles.container}>
      <div className={styles.mainHeader}>
        <h1>Welcome to Our E-commerce Store</h1>
      </div>
      <div className={styles.heroSection}>
        <Hero />
      </div>
      <div className={styles.productGrid}>
        <Card />
      </div>
    </div>
  );
};

export default Home;
