"use client";
import styles from "./Favorite.module.scss";
import React, { useState } from "react";

const Favorite: React.FC = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Starpugs- Café Premium- Torra Médio",
      price: 32.9,
      quantity: 1,
      image: "/product3.png",
    },
    {
      id: 2,
      name: "Starpugs- Café Premium- Torra Médio",
      price: 28.9,
      quantity: 1,
      image: "/product1.png",
    },
  ]);

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartSection}>
        <h1 className={styles.title}>Favoritos</h1>
        <div className={styles.cartItems}>
          <div className={styles.headerRow}>
            <div className={styles.headerItem}>Item</div>
            <div className={styles.headerQuantidade}>Quantidade</div>
          </div>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.cartItemImage}
              />
              <div className={styles.cartItemDetails}>
                <div className={styles.cartItemInfo}>
                  <h2>{item.name}</h2>
                  <p>R$ {item.price.toFixed(2)}</p>
                </div>
                <div className={styles.cartActions}>
                 <img
                    src="./favorite.png"
                    alt=""
                    className={styles.favoriteIcon}
                    onClick={() => removeFromCart(item.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
