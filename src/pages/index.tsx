import type { NextPage } from "next";
import Questao from "../components/Questao";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const questaoTeste = new QuestaoModel(1, "Melhor cor?", [
    RespostaModel.errada("Verde"),
    RespostaModel.errada("Verde"),
    RespostaModel.errada("Verde"),
    RespostaModel.certa("Azul"),
  ]);

  return (
    <div className={styles.container}>
      <Questao valor={questaoTeste} />
    </div>
  );
};

export default Home;
