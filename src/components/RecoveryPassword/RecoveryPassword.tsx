import ButtonPrimary from "@/ui/ButtonPrimary";
import { FaUser } from "react-icons/fa";
import styles from "./RecoveryPassword.module.scss";

export default function RecoveryPassword() {
  return (
    <div className={styles.content}>
      <h2>Recuperação de Senha</h2>
      <p>Confirme seu E-mail:</p>
      <form className={styles.form}>
        <div className={styles.input}>
          <input id="email" type="email" name="email" required />
          <label htmlFor="email">Insira seu e-mail </label>
          <FaUser />
        </div>
        <div className={styles.btns}>
          <ButtonPrimary name="Confirmar" href="/" />
        </div>
      </form>
    </div>
  );
}
