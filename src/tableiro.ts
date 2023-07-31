import { datosTableiro, numeroAleatorio } from "./utiles"
import { Celda, valorCelda } from "./celda";

class Tableiro {
  private filas: number;
  private columnas: number;
  private minas: number;
  //private tableiro:Celda[][];

  constructor(
    filas: number,
    columnas: number,
    minas: number,
    
  ) {
    this.filas = filas;
    this.columnas = columnas;
    this.minas = minas;
  
  }

  private generarTablero():void{
    
  }


}

export { Tableiro };