interface datosTableiro {
  x: number;
  y: number;
}

function numeroAleatorio(
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number
): datosTableiro {
  return {
    x: Math.random() * (xMax - xMin) + xMin,
    y: Math.random() * (yMax - yMin) + yMin,
  };
}

export { datosTableiro, numeroAleatorio };
