'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import styles from './Product.module.scss'

export default function Product({ product, title, roast, price }) {
  const [isFavorited, setIsFavorited] = useState(false)

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited)
  }

  return (
    <div className={styles.product}>
      <Image src={`/product${product}.png`} alt={`produto ${product}`} width={200} height={300} />
      <div onClick={handleFavoriteClick} style={{ cursor: 'pointer' }}>
        {isFavorited ? (
          <Image src='/filledHeart.svg' alt='favoritar' width={30} height={30} />
        ) : (
          <Image src='/heart.svg' alt='favoritar' width={30} height={30} />
        )}
      </div>
      <h2>{title}</h2>
      <h3>{roast}</h3>
      <h4>R$ {price}</h4>
      <button className={styles.btn}>Comprar agora!</button>
    </div>
  )
}
