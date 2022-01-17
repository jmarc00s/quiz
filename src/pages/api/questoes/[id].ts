import { NextApiRequest, NextApiResponse } from "next";

import questoes from "../bancoDeQuestoes";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const questaoSelecionada = questoes.filter((questao) => questao.id === +id);

  if (!questaoSelecionada.length) {
    res.status(204).send(null);
    return;
  }

  res.status(200).json(questaoSelecionada[0].paraObjeto());
}
