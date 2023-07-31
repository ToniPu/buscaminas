enum valorCelda {
  vacio,
  un,
  dous,
  tres,
  catro,
  cinco,
  seis,
  sete,
  oito,
  mina,
}
class Celda {
  public valor: valorCelda;
  constructor(valor: valorCelda) {
    this.valor = valor;
  }
  public setValorCelda(valor: valorCelda) {
    this.valor = valor;
  }
}

export {valorCelda, Celda};