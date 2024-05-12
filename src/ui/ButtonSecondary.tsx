"use client";
import { useRouter } from "next/navigation";
import styles from "./ButtonSecondary.module.scss";

export default function ButtonSecondary({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  const router = useRouter();

  return (
    <button
      type="button"
      className={styles.btn}
      onClick={() => router.push(href)}
    >
      {name}
    </button>
  );
}
