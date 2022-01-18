import React from "react";
import styles from "./Enunciado.module.css";

interface EnunciadoProps {
  texto: string;
}

const Enunciado = ({ texto }: EnunciadoProps) => {
  return (
    <div className={styles.enunciado}>
      <div className={styles.texto}>{texto}</div>
    </div>
  );
};

export default Enunciado;
