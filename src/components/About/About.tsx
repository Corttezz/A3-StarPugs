import Image from "next/image";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <Image src="/about.png" alt="sobre nós" width={500} height={400} />
      <div className={styles.content}>
        <h2 className="title light-bg">Conheça Mais Sobre O Starpugs</h2>
        <p>
          No Starpugs, acreditamos que a companhia dos nossos amigos peludos
          torna tudo melhor, até mesmo um delicioso café. É por isso que criamos
          um espaço acolhedor e pet-friendly, onde você pode desfrutar de uma
          experiência gastronômica única ao lado do seu fiel companheiro. Nossos
          baristas talentosos prepararam uma seleção especial de bebidas e
          deliciosos petiscos, enquanto nossa equipe dedicada cuida do seu pet
          como se fosse da família.
        </p>
        <p>
          Desde serviços de banho e tosa até atividades lúdicas, temos tudo o
          que você precisa para manter seu amigo feliz e saudável. Venha se
          juntar a nós e desfrute de momentos inesquecíveis em um ambiente
          acolhedor, onde todos são bem-vindos, inclusive os nossos amigos de
          quatro patas
        </p>
      </div>
    </section>
  );
}
