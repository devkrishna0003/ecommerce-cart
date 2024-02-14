import React from "react";
import styles from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/Features";

const Card = () => {
  const apiData = useSelector((state) => state.cart.apiData);
  const dispatch = useDispatch();
  return (
    <div className={styles.mainCard}>
      {apiData.map((data) => (
        <div key={data.id} className={styles.productCard}>
          <img
            className={styles.productImage}
            src={data.image}
            alt={data.title}
          />
          <div className={styles.productInfo}>
            <h2 className={styles.productName}>{data.title}</h2>
            <p className={styles.productPrice}>₹ {data.price}</p>
            <button
              onClick={() => dispatch(addToCart(data))}
              className={styles.addToCartButton}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
