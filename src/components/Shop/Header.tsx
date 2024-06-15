import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>Conheça Nossos Produtos</h1>
        <h1>Personalizados</h1>
        <div className={styles.line} />
      </div>
    </header>
  )
}
