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
}
