/*Consigna
Diseñar un programa JavaScript que recorra
todas esas alternativas de crédito y genere un
array con la información de dichas alternativas
sumando el dato calculado del interés. */

function calcularInteres(ofertaCreditos) {
  let creditoPlus = [];

  for (let index = 0; index < ofertaCreditos.length; index++) {
    const element = ofertaCreditos[index];

    let plus = {
      nombre: element.nombre,
      capital: element.capital,
      plazo: element.plazo,
      taza: element.taza,
      montoInteres: (element.capital * element.plazo * element.taza) / 100,
    };

    creditoPlus.push(plus);
  }

  return creditoPlus;
}

let ofertaCreditos = [
  {
    nombre: "Plan001",
    capital: 150000,
    plazo: 30,
    taza: 15,
  },
  {
    nombre: "Plan002",
    capital: 300000,
    plazo: 180,
    taza: 10,
  },
  {
    nombre: "Plan001",
    capital: 485000,
    plazo: 60,
    taza: 23,
  },
];

console.log(calcularInteres(ofertaCreditos));
