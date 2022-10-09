/* Consigna
Diseñar una aplicación JavaScript que,
recibiendo el flujo de caja del último año de la
empresa, muestre si dicho flujo genera o no
pérdidas. 
Resolver usando funciones */

function calcularBalance(flujoDeCaja) {
  let sumatoriaIngresos = 0;
  let sumatoriaEgresos = 0;

  for (let index = 0; index < flujoDeCaja.length; index++) {
    const element = flujoDeCaja[index];
    sumatoriaEgresos += element.egresos;
    sumatoriaIngresos += element.ingresos;
  }

  let remanente = sumatoriaIngresos - sumatoriaEgresos;

  if (remanente > 0) {
    return 1;
  } else if (remanente === 0) {
    return 0;
  } else {
    return -1;
  }
}

let flujoDeCaja = [
  {
    periodo: "Enero",
    ingresos: 1500,
    egresos: 1500,
  },
  {
    periodo: "Febrero",
    ingresos: 2500,
    egresos: 2500,
  },
  {
    periodo: "Marzo",
    ingresos: 84683,
    egresos: 1155,
  },
  {
    periodo: "Abril",
    ingresos: 135353,
    egresos: 1533,
  },
  {
    periodo: "Mayo",
    ingresos: 1535,
    egresos: 5434,
  },
  {
    periodo: "Junio",
    ingresos: 4343354,
    egresos: 5434534,
  },
  {
    periodo: "Julio",
    ingresos: 435453,
    egresos: 4543,
  },
  {
    periodo: "Agosto",
    ingresos: 78351,
    egresos: 7816,
  },
  {
    periodo: "Septiembre",
    ingresos: 1878,
    egresos: 95634,
  },
  {
    periodo: "Octubre",
    ingresos: 48483,
    egresos: 9433,
  },
  {
    periodo: "Noviembre",
    ingresos: 35483,
    egresos: 53133,
  },
  {
    periodo: "Diciembre",
    ingresos: 3843,
    egresos: 348133,
  },
];

let resultado = calcularBalance(flujoDeCaja);
if (resultado === 1) {
  welcome.innerHTML = `El flujo de este año esta <b>generando ganancias<b>.`;
  console.log(`El flujo de este año esta generando ganancias.`);
} else if (resultado === -1) {
  welcome.innerHTML = `El flujo de este año esta <b>generando perdidas<b>.`;
  console.log(`El flujo de este año esta generando perdidas.`);
} else {
  welcome.innerHTML = `El flujo de este año esta <b>en cero<b>.`;
  console.log(`El flujo de este año esta en cero.`);
}
