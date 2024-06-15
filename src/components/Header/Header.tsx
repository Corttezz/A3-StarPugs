import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>STARPUGS</h1>
        <div className={styles.line} />
        <p className='dark-bg'>
          Se você busca um lugar acolhedor e pet-friendly, onde possa desfrutar de um delicioso café na companhia do seu
          amigo de quatro patas, venha conhecer o Starpugs. Nosso espaço foi cuidadosamente projetado para proporcionar
          uma experiência única, onde você e seu pet serão recebidos com todo o carinho e atenção que merecem.
        </p>
        <button className={styles.btn}>Conheça</button>
      </div>
    </header>
  )
}
