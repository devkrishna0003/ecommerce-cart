import React from "react";
import styles from "./Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="card">Products</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.userOptions}>
        <button className={styles.loginButton}>Login</button>
        <div className={styles.cartContainer}>
          <NavLink to="/cart">
            <button className={styles.cartButton}>
              <FaShoppingCart />
              <span className={styles.cartBadge}>{items.length}</span>
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
