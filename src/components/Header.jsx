import React from "react";
import styles from "../components/styles/header.module.css";
import { useSelector, useDispatch } from 'react-redux';
import Nav from "./Nav";
import Cart from "./Cart";
import { toggleCartNav, toggleNavBar } from "../redux/actions/uiActions";

const Header = () => {
    const dispatch = useDispatch();
    const showNav = useSelector((state) => state.ui.isNavOpen)
    const showCartNav = useSelector((state) => state.ui.isCartNavOpen)
    
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
      {showNav && <Nav/>}
      {showCartNav && <Cart/>}
    </div>
  );
};

export default Header;
