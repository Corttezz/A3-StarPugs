import Image from 'next/image'
import styles from './Product.module.scss'

export default function Product({ product, title, price }: { product: string; title: string; price: string }) {
  return (
    <div className={styles.product}>
      <Image src={`/product${product}.png`} alt={`produto ${product}`} width={340} height={321} />
      <h3>{title}</h3>
      <h4>R$ {price}</h4>
    </div>
  )
}
