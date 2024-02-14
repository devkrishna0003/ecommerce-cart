import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrement, removeItem } from "../../features/Features";

const Cart = () => {
  const [value, setValue] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleIncrement = (event) => {
    dispatch(addToCart(event));
  };
  const totalQty = () => {
    let qty = 0;
    items.map((elem) => {
      qty = elem.qty + qty;
    });
    setQuantity(qty);
  };
  const totalValue = () => {
    let total = 0;
    items.map((elem) => (total = elem.qty * Math.ceil(elem.price) + total));
    setValue(total);
  };
  useEffect(() => totalQty(), [totalQty]);
  useEffect(() => {
    totalValue();
  }, [totalValue]);
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.cartItems}>
          <h1>Cart items</h1>
          {items.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img
                src={item.image}
                alt="product"
                className={styles.productImage}
              />
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{item.title}</h3>
                <p>{item.description}</p>
                <div className={styles.quantityControl}>
                  <span>
                    <button
                      onClick={
                        item.qty <= 1
                          ? () => dispatch(removeItem(item.id))
                          : () => dispatch(decrement(item))
                      }
                      className={styles.addRemoveBtn}
                    >
                      -
                    </button>
                    <input
                      className={styles.quantity}
                      value={item.qty}
                      type="text"
                      readOnly
                    />
                    <button
                      onClick={() => handleIncrement(item)}
                      className={styles.addRemoveBtn}
                    >
                      +
                    </button>
                  </span>
                  <span>
                    <p className={styles.perItem}>
                      {" "}
                      {Math.ceil(item.price)} ₹/-
                    </p>
                  </span>
                  <span className={styles.priceSection}>
                    <p>Total {Math.ceil(item.qty * item.price)} ₹ </p>
                  </span>
                </div>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className={styles.deleteButton}
                >
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.checkOut}>
          <h3 className={styles.headings}>
            Total Quantity <span>{quantity} pcs</span>
          </h3>
          <h3 className={styles.headings}>
            Total Amount <span>{value} ₹</span>
          </h3>
          <button className={styles.cartBtn}>Checkout Now</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
