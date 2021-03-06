export default class RespostaModel {
  private _valor: string;
  private _certa: boolean;
  private _revelada: boolean;

  constructor(valor: string, certa: boolean, revelada = false) {
    this._valor = valor;
    this._certa = certa;
    this._revelada = revelada;
  }

  get valor(): string {
    return this._valor;
  }

  get certa(): boolean {
    return this._certa;
  }

  get revelada(): boolean {
    return this._revelada;
  }

  revelar() {
    return new RespostaModel(this._valor, this._certa, true);
  }

  paraObjeto() {
    return {
      valor: this._valor,
      certa: this._certa,
      revelada: this._revelada,
    };
  }

  static certa(valor: string): RespostaModel {
    return new RespostaModel(valor, true);
  }

  static errada(valor: string): RespostaModel {
    return new RespostaModel(valor, false);
  }

  static criarUsandoObjeto({
    valor,
    certa,
    revelada,
  }: RespostaModel): RespostaModel {
    return new RespostaModel(valor, certa, revelada);
  }
}
