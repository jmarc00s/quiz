import React from "react";
import QuestaoModel from "../model/questao";
import Botao from "./Botao";
import Questao from "./Questao";
import styles from "./Questionario.module.css";

interface QuestionarioProps {
  questao: QuestaoModel;
  ultimaPergunta: boolean;
  aoResponder: (questao: QuestaoModel) => void;
  irProximoPasso: () => void;
}

const Questionario = ({
  questao,
  ultimaPergunta,
  aoResponder,
  irProximoPasso,
}: QuestionarioProps) => {
  function respostaFornecida(indice: number) {
    if (questao.naoRespondida) {
      aoResponder(questao.responder(indice));
    }
  }

  return (
    <div className={styles.questionario}>
      <Questao
        valor={questao}
        tempoParaResposta={6}
        tempoEsgotado={irProximoPasso}
        aoResponder={respostaFornecida}
      />

      <Botao
        onClick={irProximoPasso}
        texto={ultimaPergunta ? "Finalizar" : "Próxima"}
      />
    </div>
  );
};

export default Questionario;
