import { RiFacebookFill, RiInstagramLine, RiTwitterFill } from 'react-icons/ri'
import styles from './SocialLinks.module.scss'

const socialLinks = [
  { url: '#', component: <RiFacebookFill /> },
  { url: '#', component: <RiTwitterFill /> },
  { url: '#', component: <RiInstagramLine /> }
]

export default function SocialLinks() {
  const renderLinks = socialLinks.map((link, i) => (
    <li key={i}>
      <a href={link.url}>{link.component}</a>
    </li>
  ))
  return <ul className={styles.media}>{renderLinks}</ul>
}
