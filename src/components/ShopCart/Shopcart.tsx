'use client'
import styles from './ShopCart.module.scss'
import React, { useState } from 'react'

const Shopcart: React.FC = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Starpugs- Café Premium- Torra Médio',
      price: 32.9,
      quantity: 1,
      image: '/product3.png'
    },
    {
      id: 2,
      name: 'Starpugs- Café Premium- Torra Médio',
      price: 28.9,
      quantity: 1,
      image: '/product1.png'
    }
  ])

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  }

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartSection}>
        <h1 className={styles.title}>MEU CARRINHO</h1>
        <div className={styles.cartItems}>
          <div className={styles.headerRow}>
            <div className={styles.headerItem}>Item</div>
            <div className={styles.headerQuantidade}>Quantidade</div>
          </div>
          {cart.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.cartItemImage} />
              <div className={styles.cartItemDetails}>
                <div className={styles.cartItemInfo}>
                  <h2>{item.name}</h2>
                  <p>R$ {item.price.toFixed(2)}</p>
                </div>
                <div className={styles.cartActions}>
                  <div className={styles.quantity}>
                    <button>-</button>
                    <span>{item.quantity}</span>
                    <button>+</button>
                  </div>
                  <button className={styles.removeButton} onClick={() => removeFromCart(item.id)}>
                    Remover Item
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.summary}>
        <h2>Resumo</h2>
        <div className={styles.discountCode}>
          <input type='text' placeholder='CÓDIGO DE DESCONTO' />
          <span>Aplicar</span>
        </div>
        <div className={styles.summaryTotals}>
          <p>
            <span>Subtotal</span>
            <span>R$ {getTotal()}</span>
          </p>
          <p className={styles.total}>
            <span>Total</span>
            <span>R$ {getTotal()}</span>
          </p>
        </div>
        <button className={styles.checkoutButton}>Avançar para o Checkout</button>
      </div>
    </div>
  )
}

export default Shopcart
