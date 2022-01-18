import type { NextPage } from "next";
import React from "react";
import Questao from "../components/Questao";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";
import styles from "../styles/Home.module.css";

const QUESTAO_MOCK = new QuestaoModel(1, "Melhor cor?", [
  RespostaModel.errada("Verde"),
  RespostaModel.errada("Vermelho"),
  RespostaModel.errada("Amarelo"),
  RespostaModel.certa("Azul"),
]);

const Home: NextPage = () => {
  const [questao, setQuestao] = React.useState(QUESTAO_MOCK);

  function aoResponder(indice: number): void {
    setQuestao(questao.responder(indice));
  }

  function tempoEsgotado(): void {
    if (questao.naoRespondida) {
      setQuestao(questao.responder(-1));
    }
  }

  return (
    <div className={styles.container}>
      <Questao
        valor={questao}
        aoResponder={aoResponder}
        tempoEsgotado={tempoEsgotado}
      />
    </div>
  );
};

export default Home;
