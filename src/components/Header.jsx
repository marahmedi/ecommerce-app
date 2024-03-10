import React from "react";
import styles from "../components/styles/header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <img
        src={process.env.PUBLIC_URL + "/hamburger-menu.svg"}
        alt="hamburger-menu"
      />
      <h1>Mystore</h1>
      <img
        src={process.env.PUBLIC_URL + "/cart-icon.png"}
        alt="hamburger-menu"
        style={{ width: "25px", height: "25px" }}
      />
    </div>
  );
};

export default Header;
