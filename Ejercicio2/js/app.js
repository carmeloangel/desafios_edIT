var ingresoTotal = Number(prompt("Ingrese el total de los ingresos: "));

var gastosNecesarios = ingresoTotal * 0.5;
var gastosOpcionales = ingresoTotal * 0.3;
var ahorroInversion = ingresoTotal * 0.2;

alert(
  "El dinero sera usado de la siguiente manera: $" +
    gastosNecesarios +
    " para gastos Necesarios. $" +
    gastosOpcionales +
    " para gastos Opcionales. $" +
    ahorroInversion +
    " para ahorro e inversion."
);
