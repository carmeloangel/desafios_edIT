var precioVenta = Number(prompt("Ingrese el precio de venta: "));

var costoVariable = Number(
  prompt("Ingrese el costo variable (debe ser menor que el precio de venta): ")
);

var costoFijo = Number(prompt("Ingrese el costo fijo: "));

var puntoEquilibrio = costoFijo / (precioVenta - costoVariable);

alert("El punto de equilibrio es: " + puntoEquilibrio);
