import styles from './OurCoffee.module.scss'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src='/ourCoffe.svg' alt='sobre nós' width={500} height={400} />
        </div>
        <div className={styles.aboutText}>
          <h1>Nosso café</h1>
          <div className={styles.line} />
          <p className='dark-bg'>
            No coração da STARPUGS, encontra-se o verdadeiro tesouro: o café., do o clássico expresso italiano à
            indulgência de um cappuccino cremoso, cada opção é uma jornada de sabores e aromas. Nosso café é
            cuidadosamente torrado para ressaltar suas características distintas, garantindo uma bebida rica e encorpada
            que agrada até os paladares mais exigentes. Além das opções tradicionais, oferecemos uma variedade de cafés
            especiais, como lattes aromatizados, macchiatos artesanais e deliciosas misturas geladas para os dias mais
            quentes. Nossos clientes podem personalizar suas bebidas de acordo com suas preferências, escolhendo entre
            uma variedade de leites, xaropes e coberturas.
          </p>
        </div>
      </div>
    </header>
  )
}
