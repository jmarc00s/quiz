import type { NextPage } from "next";
import React from "react";
import Questionario from "../components/Questionario";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";
import styles from "../styles/Home.module.css";

import { useFetch } from "../hooks/useFetch";

const QUESTAO_MOCK = new QuestaoModel(1, "Melhor cor?", [
  RespostaModel.errada("Verde"),
  RespostaModel.errada("Vermelho"),
  RespostaModel.errada("Amarelo"),
  RespostaModel.certa("Azul"),
]);

const BASE_URL = "http://localhost:3000/api";

const Home: NextPage = () => {
  const { request } = useFetch();
  const [questao, setQuestao] = React.useState<QuestaoModel>(QUESTAO_MOCK);
  const [questoesId, setQuestoesId] = React.useState<number[]>([]);

  React.useEffect(() => {
    carregarIdsQuestoes();
  }, []);

  React.useEffect(() => {
    questoesId.length > 0 && carregarQuestao(questoesId[0]);
  }, [questoesId]);

  async function carregarIdsQuestoes() {
    const data = await request("/questionario", "GET");
    setQuestoesId(data);
  }

  async function carregarQuestao(id: number) {
    const data = await request(`/questoes/${id}`, "GET");
    //setQuestao(data);
    console.log(data);
  }

  function irProximoPasso(): void {
    if (questao.naoRespondida) {
      setQuestao(questao.responder(-1));
    }
  }

  return (
    <div className={styles.container}>
      <Questionario
        questao={questao}
        ultimaPergunta={true}
        aoResponder={(questao) => setQuestao(questao)}
        irProximoPasso={irProximoPasso}
      />
    </div>
  );
};

export default Home;
