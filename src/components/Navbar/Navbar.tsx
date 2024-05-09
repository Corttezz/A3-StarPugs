import Logo from "@/ui/Logo";
import styles from "./Navbar.module.scss";

const links = [
  { url: "#products", text: "Home" },
  { url: "#about", text: "Cardápio" },
  { url: "#social", text: "Shop" },
];

export default function Navbar() {
  const renderLinks = links.map((link, i) => (
    <li key={i}>
      <a href={link.url}>{link.text}</a>
    </li>
  ));

  return (
    <section className={styles.navbar}>
      <nav className={styles.navigation}>
        <ul>{renderLinks.slice(0, 3)}</ul>
      </nav>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={styles.navigation}>
        <ul>{renderLinks.slice(2, 4)}</ul>
      </nav>
    </section>
  );
}
