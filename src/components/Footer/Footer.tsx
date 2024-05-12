import ButtonSecondary from "@/ui/ButtonSecondary";
import Logo from "@/ui/Logo";
import SocialLinks from "@/ui/SocialLinks";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column1}>
          <h2>
            <Logo />
          </h2>
          <h3 className="p">Seu refúgio pet-friendly.</h3>
          <SocialLinks />
          <ButtonSecondary name="Fale Conosco" href="/contact-us" />
        </div>
        <div className={styles.column2}>
          <h2 className="p">Faça-nos uma Visita</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9743828662936!2d-38.51244507416858!3d-12.97349025984882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604e7b38f66a7%3A0xb90fb09cf176ef24!2sPelourinho%2C%20Salvador%20-%20BA%2C%2040301-110!5e0!3m2!1spt-BR!2sbr!4v1712800858360!5m2!1spt-BR!2sbr"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className={styles.column3}>
          <h2 className="p">Funcionamento</h2>
          <ul>
            <li>Segunda - Sexta: 09:00 às 18:00</li>
            <li>Sábados: 09:00 às 14:00</li>
            <li>(00) 000000-0000</li>
            <li>contato@starpugs.com.br</li>
          </ul>
        </div>
      </div>
      <span>Starpugs - Todos os direitos reservados</span>
    </footer>
  );
}
