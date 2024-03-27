import React from "react";
import { useState, useEffect } from "react";
import styles from "../components/styles/product.module.css";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/5");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <img src={data.image} style={{ width: "150px", height: "150px"}}></img>
      <div className={styles.description}>
        <p>{data.category}</p>
        <p>{"£ " + data.price}</p>
      </div>
    </div>
  );
};

export default Product;
