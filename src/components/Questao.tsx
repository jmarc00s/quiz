import React from "react";
import QuestaoModel from "../model/questao";
import styles from "./Questao.module.css";
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";
import Temporizador from "./Temporizador";

const letras = [
  { valor: "A", cor: "#f2c866" },
  { valor: "B", cor: "#f266ba" },
  { valor: "C", cor: "#85d4f2" },
  { valor: "D", cor: "#bce596" },
];

interface QuestaoProps {
  valor: QuestaoModel;
  tempoParaResposta?: number;
  aoResponder: (indice: number) => void;
  tempoEsgotado: () => void;
}

const Questao = ({
  valor: questao,
  aoResponder,
  tempoEsgotado,
  tempoParaResposta,
}: QuestaoProps) => {
  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
      <Temporizador
        key={questao.id}
        duracao={tempoParaResposta ?? 10}
        tempoEsgotado={tempoEsgotado}
      />
      {questao?.respostas?.map((resposta, i) => (
        <Resposta
          key={`${questao.id} - ${i}`}
          valor={resposta}
          indice={i}
          letra={letras[i].valor}
          corFundoLetra={letras[i].cor}
          aoResponder={aoResponder}
        />
      ))}
    </div>
  );
};

export default Questao;
