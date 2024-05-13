import ButtonPrimary from "@/ui/ButtonPrimary";
import Link from "next/link";
import { FaKey, FaUser } from "react-icons/fa";
import styles from "./LoginForm.module.scss";

export default function Loginform() {
  return (
    <form className={styles.form}>
      <div className={styles.input}>
      <h2 style={{paddingBottom: '10px'}}>Recuperação de Senha</h2>
      <div style={{paddingBottom: '30px'}} className={styles.dflex}>
      <h3>Já possui uma conta?</h3> 
      <Link href="/login" className={styles.acesseBtn}>Acesse</Link>
      </div>
      <h3>Nome completo</h3>
        <input id="email" type="email" name="email" required />

        <FaUser />
        <h3 style={{paddingTop: '30px'}}>E-mail *</h3>
        <input id="email" type="email" name="email" required />
        
      </div>
      <div className={styles.input}>
      <h3>Senha *</h3>
        <input
          id="password"
          type="password"
          name="password"
          required
          minLength={6}
        />
        <FaKey />

        <h3 style={{paddingTop: '30px'}}>Confirmação da senha *</h3>
        <input
          id="password"
          type="password"
          name="password"
          required
          minLength={6}
        />
        <FaKey />
        <h3 style={{paddingTop: '30px'}}>Nome completo</h3>
        <input id="email" type="email" name="email" required />

        <FaUser />

        <div style={{paddingTop: '30px'}} className={styles.dflex}>
        <input style={{maxWidth: '20%'}} type="checkbox" id="terms" name="terms" required className={styles.customCheckbox} />
        <h3>Concordo com os termos de uso</h3>
        </div>

      </div>
      <div className={styles.btns}>
        <ButtonPrimary name="Registrar" href="/register" />
      </div>
    </form>
  );
}
