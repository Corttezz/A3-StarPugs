import Product from './Product'
import styles from './Products.module.scss'

export default function Products() {
  return (
    <section className={styles.products}>
      <div className={styles.grid}>
        <Product product='17' title='CANECA STARPUGS' roast='Caneca Branca Simples' price='35,90' isNew={false} />
        <Product
          product='18'
          title='CANECA STARPUGS'
          roast='Caneca Branca com Borda Preta'
          price='40,00'
          isNew={true}
        />
        <Product product='19' title='CANECA STARPUGS' roast='Caneca Verde com Borda Preta' price='40,00' isNew={true} />
        <Product product='20' title='GARRAFA STARPUGS' roast='Garrafa de Alumínio' price='72,90' isNew={false} />
        <Product product='21' title='CAMISA STARPUGS' roast='Camiseta Branca Simples' price='49,90' isNew={false} />
        <Product product='22' title='CAMISA STARPUGS' roast='Camiseta Preta Simples' price='49,90' isNew={false} />
        <Product product='23' title='MOLETOM STARPUGS' roast='Moletom Preto Simples' price='89,90' isNew={false} />
        <Product product='25' title='CAMISA STARPUGS' roast='Camiseta Preta Logo Pequena' price='38,90' isNew={false} />
        <Product product='26' title='MEIAS STARPUGS' roast='Par de Meias Verde Simples' price='25,00' isNew={true} />
        <Product product='27' title='BOLSA STARPUGS' roast='Bolsa Sacola' price='64,90' isNew={true} />
        <Product product='28' title='ALMOFADA STARPUGS' roast='Almofada Verde 40x40' price='20,90' isNew={false} />
        <Product product='29' title='BONÉ STARPUGS' roast='Boné Verde Simples' price='36,90' isNew={true} />
      </div>
    </section>
  )
}
