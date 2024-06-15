import Product from './Product'
import styles from './Products.module.scss'
import Link from 'next/link'

export default function Products() {
  return (
    <section className={styles.products}>
      <div className={styles.grid}>
        <Product product='1' title='Café blend' roast='Torra Escura' price='29,90' />
        <Product product='2' title='Café Branca' roast='Torra Clara' price='28,50' />
        <Product product='3' title='Café Premium' roast='Torra Média' price='32,90' />
        <Product product='4' title='Café Latte' roast='Torra Clara' price='25,00' />
      </div>
      <button className={styles.btn}>
        <Link href='/viewmore'>Ver mais</Link>
      </button>
    </section>
  )
}
