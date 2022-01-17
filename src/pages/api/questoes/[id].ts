import { NextApiRequest, NextApiResponse } from "next";

import questoes from "../bancoDeQuestoes";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const questaoSelecionada = questoes.filter((questao) => questao.id === +id);

  if (!questaoSelecionada.length) {
    res.status(204).send(null);
    return;
  }
  const questaoRespostaEmbaralhada =
    questaoSelecionada[0].embaralharRespostas();

  res.status(200).json(questaoRespostaEmbaralhada.paraObjeto());
}
