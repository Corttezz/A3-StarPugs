import ButtonPrimary from '@/ui/ButtonPrimary'
import Link from 'next/link'
import { FaKey, FaUser } from 'react-icons/fa'
import styles from './Profile.module.scss'

export default function Loginform() {
  return (
    <form className={styles.form}>
      <div className={styles.input}>
        <h2 style={{ paddingBottom: '10px' }}>Informações da conta</h2>
        <div style={{ paddingBottom: '30px' }} className={styles.dflex}></div>
        <h3>Nome</h3>
        <input id='nome' type='nome' name='nome' required />

        <h3 style={{ paddingTop: '30px' }}>Data de Nascimento</h3>
        <input id='data' type='date' name='data' required />
      </div>
      <div className={styles.input}>
        <h3>CPF</h3>
        <input id='cpf' type='cpf' name='cpf' required maxLength={14} />

        <h3 style={{ paddingTop: '30px' }}>Número de Celular</h3>
        <input id='numero' type='numero' name='numero' required maxLength={11} />

        <div style={{ paddingTop: '30px' }} className={styles.dflex}>
          <input
            style={{ maxWidth: '20%' }}
            type='checkbox'
            id='terms'
            name='terms'
            required
            className={styles.customCheckbox}
          />
          <h3>Concordo com os termos de uso</h3>
        </div>
      </div>
      <div className={styles.btns}>
        <ButtonPrimary name='Editar' href='/edit' />
      </div>
    </form>
  )
}
