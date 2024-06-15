import Product from '../BuyProducts/Product'
import styles from './ViewMore.module.scss'
import Details from '@/components/Details/Details'
import OurCoffee from '@/components/OurCoffee/OurCoffee'

export default function ViewMore() {
  return (
    <main className={styles.details}>
      <OurCoffee />
      <Details />
      <section className={styles.products}>
        <Product product='1' title='Café blend' roast='Torra Escura' price='29,90' />
        <Product product='2' title='Café Branca' roast='Torra Clara' price='28,50' />
        <Product product='3' title='Café Premium' roast='Torra Média' price='32,90' />
        <Product product='4' title='Café Latte' roast='Torra Clara' price='25,00' />
        <Product product='5' title='Café Espresso' roast='Torra Escura' price='30,00' />
        <Product product='6' title='Café Frappé' roast='Torra Média' price='49,90' />
        <Product product='7' title='Café Affogato' roast='Torra Média' price='89,90' />
        <Product product='8' title='Café Americano' roast='Torra Clara' price='38,90' />
        <Product product='9' title='Café Mocha' roast='Torra Clara' price='25,00' />
        <Product product='10' title='Café Macchiato' roast='Torra Média' price='64,90' />
        <Product product='11' title='Café Expresso' roast='Torra Escura' price='36,90' />
      </section>
    </main>
  )
}
