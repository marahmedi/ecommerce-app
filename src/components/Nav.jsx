import React from "react";
import styles from "../components/styles/nav.module.css";

const Nav = ({ setShowNav }) => {
  return (
    <div className={styles.container}>
      <img
        src={process.env.PUBLIC_URL + "/exit-icon.png"}
        alt="exit icon"
        style={{ width: "25px", height: "25px", cursor: "pointer" }}
        id={styles.CartExitIcon}
        onClick={() => setShowNav(false)}
      />
      <div className={styles.categories}>
        <ul>
          <li>Shop</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
