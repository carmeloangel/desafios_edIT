let ingresoTotal = parseInt(prompt("Ingrese el total de los ingresos: "));

let gastosNecesarios = ingresoTotal * 0.5;
let gastosOpcionales = ingresoTotal * 0.3;
let ahorroInversion = ingresoTotal * 0.2;

alert(
  "El dinero sera usado de la siguiente manera: $" +
    gastosNecesarios +
    " para gastos Necesarios. $" +
    gastosOpcionales +
    " para gastos Opcionales. $" +
    ahorroInversion +
    " para ahorro e inversion."
);
