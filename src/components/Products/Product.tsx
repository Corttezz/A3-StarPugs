import Image from "next/image";
import styles from "./Product.module.scss";

export default function Product({
  product,
  title,
  roast,
  price,
}: {
  product: string;
  title: string;
  roast: string;
  price: string;
}) {
  return (
    <div className={styles.product}>
      <Image
        src={`/product${product}.png`}
        alt={`produto ${product}`}
        width={200}
        height={300}
      />
      <h2>{title}</h2>
      <h3>{roast}</h3>
      <h4>R$ {price}</h4>
      <button className={styles.btn}>Conheça</button>
    </div>
  );
}
