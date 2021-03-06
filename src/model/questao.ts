import { embaralhar } from "../functions/arrays";
import RespostaModel from "./resposta";

export default class QuestaoModel {
  private _id: number;
  private _enunciado: string;
  private _respostas: RespostaModel[];
  private _acertou: boolean;

  constructor(
    id: number,
    enunciado: string,
    respostas: RespostaModel[],
    acertou: boolean = false
  ) {
    this._id = id;
    this._enunciado = enunciado;
    this._respostas = respostas;
    this._acertou = acertou;
  }

  get id(): number {
    return this._id;
  }

  get enunciado(): string {
    return this._enunciado;
  }

  get respostas(): any[] {
    return this._respostas;
  }

  get acertou(): boolean {
    return this._acertou;
  }

  get respondida(): boolean {
    for (let resposta of this._respostas) {
      if (resposta.revelada) return true;
    }

    return false;
  }

  get naoRespondida(): boolean {
    return !this.respondida;
  }

  responder(indice: number): QuestaoModel {
    const acertou = this._respostas[indice]?.certa;

    const respostas = this._respostas.map((resposta, i) => {
      const respostaSelecionada = indice === i;
      const deveRelevar = respostaSelecionada || resposta.certa;

      return deveRelevar ? resposta.revelar() : resposta;
    });

    return new QuestaoModel(this._id, this._enunciado, respostas, acertou);
  }

  embaralharRespostas(): QuestaoModel {
    const respostasEmbaralhadas = embaralhar(this.respostas);

    return new QuestaoModel(
      this.id,
      this.enunciado,
      respostasEmbaralhadas,
      this.acertou
    );
  }

  paraObjeto() {
    return {
      id: this._id,
      enunciado: this._enunciado,
      acertou: this._acertou,
      respostas: this._respostas.map((resposta) => resposta.paraObjeto()),
    };
  }

  static criarUsandoObjeto({
    id,
    enunciado,
    respostas,
    acertou,
  }: QuestaoModel): QuestaoModel {
    const arrayRespostas = respostas.map((resposta) =>
      RespostaModel.criarUsandoObjeto(resposta)
    );

    return new QuestaoModel(id, enunciado, arrayRespostas, acertou);
  }
}
