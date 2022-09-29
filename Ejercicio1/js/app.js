let costoFijo = prompt("Ingrese el costo fijo: ");

let precioVenta = parseInt(prompt("Ingrese el precio de venta: "));

let costoVariable = parseInt(
  prompt("Ingrese el costo letiable (debe ser menor que el precio de venta): ")
);

let puntoEquilibrio = costoFijo / (precioVenta - costoVariable);

alert("El punto de equilibrio es: " + puntoEquilibrio);
