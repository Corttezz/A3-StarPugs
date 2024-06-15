import styles from './Details.module.scss'

export default function Details() {
  return (
    <section className={styles.details}>
      <div className={styles.roast}>
        <h2>Experimente os diferentes tipos de torra</h2>
        <div className={styles.types}>
          <span className={styles.light}>Clara</span>
          <span className={styles.medium}>Média</span>
          <span className={styles.dark}>Escura</span>
        </div>
      </div>
    </section>
  )
}
