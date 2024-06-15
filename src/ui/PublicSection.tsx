import Image from 'next/image'
import styles from './PublicSection.module.scss'

export default function PublicSection({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className={styles.section}>
      <div className={styles.logo}>
        <Image src='/starpugs-logo.png' alt='starpugs logo' width={513} height={343} />
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  )
}
