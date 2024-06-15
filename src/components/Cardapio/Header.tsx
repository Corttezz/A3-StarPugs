import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h2>Cardápio</h2>
        <div className={styles.line} />
        <button className={styles.btn}>Bebidas</button>
        <button className={styles.btn}>Comidas</button>
      </div>
    </header>
  )
}
