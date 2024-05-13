import Logo from "@/ui/Logo";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import styles from "./Navbar.module.scss";

const links = [
  { url: "/", text: "Home" },
  { url: "/cardapio", text: "Cardápio" },
  { url: "/shop", text: "Shop" },
  { url: "/login", text: "Login" },
  { url: "/register", text: "Registrar" },
];

export default function Navbar() {
  const renderLinks = links.map((link, i) => (
    <li key={i}>
      <Link href={link.url}>{link.text}</Link>
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
        <ul>
          <li>
            <Link href="favoritos">
              <FaRegHeart />
            </Link>
          </li>
          <li>
            <Link href="carrinho">
              <FiShoppingCart />
            </Link>
          </li>
          {renderLinks.slice(3, 5)}
        </ul>
      </nav>
    </section>
  );
}
