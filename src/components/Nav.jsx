import React from "react";
import styles from "../components/styles/nav.module.css";
import { useDispatch } from "react-redux";
import { toggleNavBar } from "../redux/actions/uiActions";

const Nav = () => {
    const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <img
        src={process.env.PUBLIC_URL + "/exit-icon.png"}
        alt="exit icon"
        style={{ width: "25px", height: "25px", cursor: "pointer" }}
        id={styles.CartExitIcon}
        onClick={() => dispatch(toggleNavBar)}
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
