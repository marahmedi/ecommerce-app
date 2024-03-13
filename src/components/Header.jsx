import React from "react";
import styles from "../components/styles/header.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartNav, toggleNavBar } from "../redux/actions/uiActions";

const Header = () => {
    const dispatch = useDispatch();
    
  return (
    <div className={styles.container}>
      <img
        src={process.env.PUBLIC_URL + "/hamburger-menu.svg"}
        alt="hamburger-menu"
        style={{cursor: 'pointer'}}
        onClick={()=> dispatch(toggleNavBar)}
      />
      <h1>Mystore</h1>
      <img
        src={process.env.PUBLIC_URL + "/cart-icon.png"}
        alt="cart-icon"
        style={{ width: "25px", height: "25px", cursor: 'pointer' }}
        onClick={() => dispatch(toggleCartNav)}
      />
    </div>
  );
};

export default Header;
