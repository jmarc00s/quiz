import React from "react";
import styles from "./Temporizador.module.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface TemporizadorProps {
  duracao: number;
  tempoEsgotado: () => void;
}

const Temporizador = ({ duracao, tempoEsgotado }: TemporizadorProps) => {
  return (
    <div className={styles.temporizador}>
      <CountdownCircleTimer
        size={120}
        isPlaying
        duration={duracao}
        onComplete={tempoEsgotado}
        colors={["#BCE596", "#f7b801", "#ed827a", "#ed827a"]}
        colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default Temporizador;
