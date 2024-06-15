import Image from 'next/image'
import styles from './Product.module.scss'

export default function Product({
  product,
  title,
  roast,
  price,
  isNew
}: {
  product: string
  title: string
  roast: string
  price: string
  isNew?: boolean // Adiciona a prop isNew como opcional
}) {
  return (
    <div className={styles.product}>
      {isNew && (
        <button className={styles.btn_secondary}>
          <p>novo</p>
        </button>
      )}
      <Image src={`/product${product}.png`} alt={`produto ${product}`} width={340} height={321} />
      <button className={styles.favoriteButton}>
        <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g clipPath='url(#clip0_2060_642)'>
            <path
              d='M16.0091 27.8986L3.88731 16.9188C-2.70066 10.3308 6.98363 -2.31805 16.0091 7.91522C25.0346 -2.31805 34.6751 10.3747 28.131 16.9188L16.0091 27.8986Z'
              stroke='#1B2C1E'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_2060_642'>
              <rect width='31' height='31' fill='white' transform='translate(0.5 0.47998)' />
            </clipPath>
          </defs>
        </svg>
      </button>
      <h2>{title}</h2>
      <h3>{roast}</h3>
      <h4>R$ {price}</h4>
      <button className={styles.btn}>
        <p>Comprar agora!</p>
      </button>
    </div>
  )
}
