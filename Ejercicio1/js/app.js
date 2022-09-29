let precioVenta = prompt("Ingrese el precio de venta: ");

let costoVariable = prompt(
  "Ingrese el costo letiable (debe ser menor que el precio de venta): "
);
let costoFijo = prompt("Ingrese el costo fijo: ");

let puntoEquilibrio = costoFijo / (precioVenta - costoVariable);

alert("El punto de equilibrio es: " + puntoEquilibrio);
