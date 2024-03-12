import React from "react";
import styles from '../components/styles/productListing.module.css'
import Product from "../components/Product";

const ProductListing = () => {
  return (
    <div className={styles.container}>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>
  );
};

export default ProductListing;
