import Product from './Product'
import styles from './Products.module.scss'

export default function Products() {
  return (
    <section className={styles.products}>
      <h2>Bebidas</h2>
      <div className={styles.grid}>
        <Product product='5' title='Capuccino Express' price='25,00' />
        <Product product='6' title='Água Saborizada' price='10,99' />
        <Product product='7' title='Café Gelado' price='35,90' />
        <Product product='8' title='Velvet Latte' price='35,90' />
        <Product product='9' title='Choco Craze' price='35,90' />
        <Product product='10' title='Caramel Dream' price='35,90' />
        <Product product='11' title='Vanilla Dream' price='40,00' />
      </div>
      <h2>Comidas</h2>
      <div className={styles.grid}>
        <Product product='12' title='Capuccino Express' price='25,00' />
        <Product product='14' title='Água Saborizada' price='10,99' />
        <Product product='15' title='Café Gelado' price='35,90' />
        <Product product='16' title='Velvet Latte' price='35,90' />
        <Product product='13' title='Choco Craze' price='35,90' />
      </div>
    </section>
  )
}
