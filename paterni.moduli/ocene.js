function izracunajProsek(ocene) {
  const sumaOcena = ocene.reduce((sum, ocena) => sum + ocena, 0);
  return sumaOcena / ocene.length;
}

function prolaziIspit(ocene) {
  const prosek = izracunajProsek(ocene);
  return prosek >= 6.0;
}

export { izracunajProsek, prolaziIspit };
