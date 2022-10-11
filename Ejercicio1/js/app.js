//Se resuelve usando JQuery

const boton = $("#calcular");

boton.on("click", function () {
  const costoFijo = Number($("#costoFijo").val());
  const precioVenta = Number($("#precioVenta").val());
  const costoVariable = Number($("#costoVariable").val());

  if (costoFijo > 0 && precioVenta > 0 && costoVariable > 0) {
    if (precioVenta > costoVariable) {
      $("#resultado").html(
        `El punto de equilibrio es: ${
          costoFijo / (precioVenta - costoVariable)
        }`
      );
    } else {
      $("#resultado").html(
        `** El precio de venta debe ser mayor al costo variable. La fórmula es: <br> costoFijo / (precioVenta - costoVariable)`
      );
    }
  } else {
    $("#resultado").html(
      `** Debe ingresar numero mayores a cero en cada caja.`
    );
  }
});
