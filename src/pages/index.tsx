import type { NextPage } from "next";
import React from "react";
import Questionario from "../components/Questionario";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";
import styles from "../styles/Home.module.css";

import { useRouter } from "next/router";

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
  const router = useRouter();

  const [questao, setQuestao] = React.useState<QuestaoModel>(QUESTAO_MOCK);
  const [questoesId, setQuestoesId] = React.useState<number[]>([]);
  const [respostasCertas, setRespostasCertas] = React.useState(0);

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
    const novaQuestao = QuestaoModel.criarUsandoObjeto(data);
    setQuestao(novaQuestao);
  }

  function irProximoPasso(): void {
    const proximoId = idProximaPergunta();
    proximoId ? irProximaQuestao(proximoId) : finalizar();
  }

  function irProximaQuestao(id: number): void {
    carregarQuestao(id);
  }

  function finalizar() {
    router.push({
      pathname: "/resultado",
      query: {
        total: questoesId.length,
        certas: respostasCertas,
      },
    });
  }

  function idProximaPergunta() {
    if (questao) {
      const proximoIndice = questoesId.indexOf(questao.id) + 1;
      return questoesId[proximoIndice];
    }
  }

  function aoResponder(questao: QuestaoModel): void {
    setQuestao(questao);

    if (questao.acertou) {
      setRespostasCertas(respostasCertas + 1);
    }
  }

  return (
    <div className={styles.container}>
      {questao ? (
        <Questionario
          questao={questao}
          ultimaPergunta={!idProximaPergunta()}
          aoResponder={aoResponder}
          irProximoPasso={irProximoPasso}
        />
      ) : (
        false
      )}
    </div>
  );
};

export default Home;
