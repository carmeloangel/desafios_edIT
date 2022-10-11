//Se resuelve usando JQuery

const boton = $("#calcular");

boton.on("click", function () {
  const ingresoTotal = Number($("#ingresoTotal").val());

  const gastosNecesarios = Number($("#gastosNecesarios").val());
  const gastosOpcionales = Number($("#gastosOpcionales").val());
  const ahorroInversion = Number($("#ahorroInversion").val());

  const porcentajes = gastosNecesarios + gastosOpcionales + ahorroInversion;

  if (ingresoTotal > 0) {
    if (
      gastosNecesarios >= 0 &&
      gastosNecesarios <= 100 &&
      gastosOpcionales >= 0 &&
      gastosOpcionales <= 100 &&
      ahorroInversion >= 0 &&
      ahorroInversion <= 100
    ) {
      if (porcentajes <= 100) {
        $("#resultado").html(
          "El dinero sera usado de la siguiente manera: <br> $" +
            (ingresoTotal * gastosNecesarios) / 100 +
            " para gastos Necesarios. <br>$" +
            (ingresoTotal * gastosOpcionales) / 100 +
            " para gastos Opcionales. <br>$" +
            (ingresoTotal * ahorroInversion) / 100 +
            " para Ahorro e Inversión."
        );
      } else {
        $("#resultado").html(
          `** Los suma de los porcentajes ingresados no debe superar 100.`
        );
      }
    } else {
      $("#resultado").html(
        `** Los porcentajes requeridas deben estar entre 0 y 100.`
      );
    }
  } else {
    $("#resultado").html(`** El total de ingresos debe ser mayor que cero.`);
  }
});
