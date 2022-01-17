import React from "react";
import QuestaoModel from "../model/questao";
import styles from "../styles/Questao.module.css";
import Enunciado from "./Enunciado";

interface QuestaoProps {
  valor: QuestaoModel;
}

const Questao = ({ valor: questao }: QuestaoProps) => {
  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
    </div>
  );
};

export default Questao;
