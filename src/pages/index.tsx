import type { NextPage } from "next";
import React from "react";
import Botao from "../components/Botao";
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
  const questaoRef = React.useRef<QuestaoModel>();

  React.useEffect(() => {
    questaoRef.current = questao;
  }, [questao]);

  function aoResponder(indice: number): void {
    setQuestao(questao.responder(indice));
  }

  function tempoEsgotado(): void {
    if (questaoRef.current?.naoRespondida) {
      setQuestao(questao.responder(-1));
    }
  }

  return (
    <div className={styles.container}>
      <Questao
        valor={questao}
        aoResponder={aoResponder}
        tempoEsgotado={tempoEsgotado}
        tempoParaResposta={5}
      />
      <Botao texto="Próxima" href="resultado" />
    </div>
  );
};

export default Home;
