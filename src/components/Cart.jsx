import React from "react";
import styles from "./styles/cart.module.css";
import { useDispatch } from "react-redux";
import { toggleCartNav } from "../redux/actions/uiActions";

const Cart = () => {
    const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <img
        src={process.env.PUBLIC_URL + "/exit-icon.png"}
        alt="exit icon"
        style={{ width: "25px", height: "25px", cursor: 'pointer'}}
        id={styles.CartExitIcon}
        onClick={() => dispatch(toggleCartNav)}
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
