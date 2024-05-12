import ButtonPrimary from "@/ui/ButtonPrimary";
import Link from "next/link";
import { FaKey, FaUser } from "react-icons/fa";
import styles from "./LoginForm.module.scss";

export default function Loginform() {
  return (
    <form className={styles.form}>
      <div className={styles.input}>
        <input id="email" type="email" name="email" required />
        <label htmlFor="email">Email ou CPF</label>
        <FaUser />
      </div>
      <div className={styles.input}>
        <input
          id="password"
          type="password"
          name="password"
          required
          minLength={6}
        />
        <label htmlFor="password">Senha</label>
        <FaKey />
        <span>
          Esqueceu a senha? <Link href="/recovery">Clique Aqui</Link>
        </span>
      </div>
      <div className={styles.btns}>
        <ButtonPrimary name="Entrar" href="/register" />
        <ButtonPrimary name="Registrar" href="/register" />
      </div>
    </form>
  );
}
