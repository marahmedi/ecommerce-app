import React from "react";
import styles from "./styles/cart.module.css";

const Cart = ({setShowCart}) => {
  return (
    <div className={styles.container}>
      <img
        src={process.env.PUBLIC_URL + "/exit-icon.png"}
        alt="exit icon"
        style={{ width: "25px", height: "25px", cursor: 'pointer'}}
        id={styles.CartExitIcon}
        onClick={() => setShowCart(false)}
      />

      <div className={styles.centre}>
        <div className={styles.cartContents}>
          <p>Your cart is empty</p>
          <button id={styles.button}>Continue browsing</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
