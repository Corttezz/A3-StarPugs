import Image from "next/image";
import styles from "./Promo.module.scss";

export default function Promo() {
  return (
    <section id="promo" className={styles.promo}>
      <div className={styles.content}>
        <div className={styles.div1}>
          <h2 className="title light-bg">Conheça nossa nova linha</h2>
          <p>
            Canecas, almofadas e muitas opções de cafés deliciosos para você!
          </p>
          <button className={styles.btn}>Saiba mais</button>
        </div>
        <div className={styles.div2}>
          <Image
            className={styles.image}
            src="/caneca.png"
            alt="caneca starpugs"
            width={424}
            height={424}
          />
          <h2>Caneca StarPugs</h2>
        </div>
      </div>

      <button className={styles.btn}>Compre agora!</button>
    </section>
  );
}
