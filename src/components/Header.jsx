import React from "react";
import styles from "../components/styles/header.module.css";

const Header = ({setShowCart, setShowNav}) => {
  return (
    <div className={styles.container}>
      <img
        src={process.env.PUBLIC_URL + "/hamburger-menu.svg"}
        alt="hamburger-menu"
        style={{cursor: 'pointer'}}
        onClick={()=> setShowNav(true)}
      />
      <h1>Mystore</h1>
      <img
        src={process.env.PUBLIC_URL + "/cart-icon.png"}
        alt="cart-icon"
        style={{ width: "25px", height: "25px", cursor: 'pointer' }}
        onClick={() => setShowCart(true)}
      />
    </div>
  );
};

export default Header;
