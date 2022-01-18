import type { NextPage } from "next";
import React from "react";
import Botao from "../components/Botao";
import Questao from "../components/Questao";
import Questionario from "../components/Questionario";
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

  function aoResponder(questao: QuestaoModel): void {}

  function tempoEsgotado(): void {
    if (questaoRef.current?.naoRespondida) {
      setQuestao(questao.responder(-1));
    }
  }

  return (
    <div className={styles.container}>
      <Questionario
        questao={questao}
        ultimaPergunta={true}
        aoResponder={(questao) => setQuestao(questao)}
        irProximoPasso={() => {}}
      />
    </div>
  );
};

export default Home;
