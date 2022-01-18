import React from "react";
import RespostaModel from "../model/resposta";
import styles from "./Resposta.module.css";

interface RespostaProps {
  valor: RespostaModel;
  indice: number;
  letra: string;
  corFundoLetra: string;
  aoResponder: (indice: number) => void;
}

const Resposta = ({
  letra,
  valor: resposta,
  corFundoLetra,
  aoResponder,
  indice,
}: RespostaProps) => {
  return (
    <div className={styles.resposta} onClick={() => aoResponder(indice)}>
      <div className={styles.conteudoResposta}>
        {!resposta.revelada ? (
          <div className={styles.frente}>
            <div
              className={styles.letra}
              style={{ backgroundColor: corFundoLetra }}
            >
              {letra}
            </div>
            <div className={styles.valor}>{resposta.valor}</div>
          </div>
        ) : (
          <div className={styles.verso}>
            {resposta.certa ? (
              <div className={styles.certa}>
                <div>A resposta certa é ...</div>
                <div className={styles.valor}>{resposta.valor}</div>
              </div>
            ) : (
              <div className={styles.errada}>
                <div>A resposta informada está errada ...</div>
                <div className={styles.valor}>{resposta.valor}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Resposta;
