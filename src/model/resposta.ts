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
}
