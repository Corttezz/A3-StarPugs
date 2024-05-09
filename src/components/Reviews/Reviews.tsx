"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Reviews.module.scss";

const reviews = [
  {
    avatar: "/avatar1.png",
    name: "Clara Pereira",
    role: "Programadora",
    comment:
      "O Starpugs é o lugar perfeito para mim e meu cachorro! Ele pode brincar enquanto eu desfruto de um delicioso café.",
  },
  {
    avatar: "/avatar2.png",
    name: "João Pereira",
    role: "Designer",
    comment:
      "Nunca pensei que encontraria um lugar tão acolhedor para mim e meu gato. Os serviços para pets são incríveis!",
  },
  {
    avatar: "/avatar3.png",
    name: "Maria Silva",
    role: "Engenheira",
    comment:
      "Não apenas um ótimo café, mas também uma experiência incrível para meu cãozinho. Ficamos encantados com o Starpugs!",
  },
];

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () =>
    setCurrentReview(
      currentReview === reviews.length - 1 ? 0 : currentReview + 1
    );
  const previousReview = () =>
    setCurrentReview(
      currentReview === 0 ? reviews.length - 1 : currentReview - 1
    );

  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, [currentReview]);

  const { avatar, name, role, comment } = reviews[currentReview];

  return (
    <section className={styles.reviews}>
      <Image
        className={styles.image}
        src="/graos.png"
        alt="graos de cafe"
        width={425}
        height={250}
      />
      <h2 className="title light-bg">O que falam da gente</h2>
      <div className={styles.review}>
        <button className={styles.previous} onClick={previousReview}>
          &larr;
        </button>
        <Image
          className={styles.avatar}
          src={avatar}
          alt="avatar"
          width={120}
          height={120}
        />
        <h3>{name}</h3>
        <h4>{role}</h4>
        <p>{comment}</p>
        <button className={styles.next} onClick={nextReview}>
          &rarr;
        </button>
      </div>
    </section>
  );
}
