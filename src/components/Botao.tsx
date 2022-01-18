import Link from "next/link";
import React from "react";
import styles from "./Botao.module.css";

interface BotaoProps {
  texto: string;
  href?: string;
  onClick?: (e: any) => void;
}

const Botao = ({ texto, href, onClick }: BotaoProps) => {
  function renderizarBotao() {
    return (
      <button className={styles.botao} onClick={onClick}>
        {texto}
      </button>
    );
  }

  return href ? (
    <Link href={href}>{renderizarBotao()}</Link>
  ) : (
    renderizarBotao()
  );
};

export default Botao;
