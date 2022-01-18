import React from "react";
import styles from "./Estatistica.module.css";

interface EstatisticaProps {
  valor: any;
  texto: string;
  corFundo?: string;
  corFonte?: string;
}

const Estatistica = ({
  valor,
  texto,
  corFonte,
  corFundo,
}: EstatisticaProps) => {
  return (
    <div className={styles.estatistica}>
      <div
        className={styles.valor}
        style={{
          backgroundColor: corFundo ?? "#fdd60f",
          color: corFonte ?? "#333",
        }}
      >
        {valor}
      </div>
      <div className={styles.texto}>{texto}</div>
    </div>
  );
};

export default Estatistica;
