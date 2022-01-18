import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Resultado.module.css";
import Estatistica from "../components/Estatistica";
import Botao from "../components/Botao";

const Resultado = () => {
  const router = useRouter();

  const total = router?.query?.total;
  const certas = router?.query?.certas;
  const percentual = Math.round((Number(certas) / Number(total)) * 100);

  return (
    <div className={styles.resultado}>
      <h1>Resultado final</h1>
      <div className={styles.estatisticas}>
        <Estatistica valor={total} texto="Perguntas" />
        <Estatistica valor={certas} texto="Certas" corFundo="#9cd2a4" />
        <Estatistica
          valor={`${percentual}%`}
          texto="Percentual"
          corFundo="#DE6a33"
        />
      </div>
      <Botao href="/" texto="Tentar novamente" />
    </div>
  );
};

export default Resultado;
