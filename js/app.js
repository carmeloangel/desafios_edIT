/***
Tenemos un cliente que nos está pidiendo que el sistema que estamos desarrollando tenga una 
contraseña segura pero con las siguientes característica, que esta debe contener: 
1) Que tenga una longitud de 12 caracteres mínimo.
2) Debe contener al menos 1 letra en mayúscula.
3) Debe contener al menos 1 letra en minúscula.
4) No puede contener espacios vacíos.
*/

function CampoRequerido(selectorName) {
  let isValid = false;

  const nodo = document.querySelector(selectorName);

  const regExp1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d]|[^ ]){12,}$/;

  nodo.addEventListener("blur", () => {
    if (nodo.value !== "" && nodo.value != null) {
      if (regExp1.test(nodo.value)) {
        isValid = true;
      } else {
        isValid = false;
      }
    }
  });

  //Insertamos una propiedad en el elemento "nodo"
  nodo.isValid = () => {
    return isValid;
  };

  return nodo;
}

const pass = CampoRequerido("#password");
const form = document.querySelector("#form");
const error = document.querySelector("#error");

form.addEventListener("submit", (e) => {
  const mensaje = [];

  if (!pass.isValid()) {
    mensaje.push(
      "La contraseña debe contener al menos 12 caracteres alfanuméricos. Al menos 1 mayúscula y 1 minúscula. No espacios en blanco."
    );
  }

  if (mensaje.length > 0) {
    e.preventDefault();
    error.innerHTML = mensaje.join(" ");
  } else {
    alert("Datos enviados correctamente.");
  }
});
