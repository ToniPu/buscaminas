import { datosTableiro, numeroAleatorio } from "./utiles"


class Tableiro {
  private filas: number;
  private columnas: number;
  private minas: number;
  private divPrincipal: HTMLElement | null;

  constructor(
    filas: number,
    columnas: number,
    minas: number,
    divPrincipal: string
  ) {
    this.filas = filas;
    this.columnas = columnas;
    this.minas = minas;
    this.divPrincipal = document.getElementById(divPrincipal);
    if (this.divPrincipal?.hasChildNodes() === true) {
      this.divPrincipal.innerHTML = "";
    }
  }

  private generarTablero():void{
    
  }


}

export { Tableiro };