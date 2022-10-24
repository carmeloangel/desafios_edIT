/*** Ejercicio 2
Con la función diseñada en el ejercicio anterior, queda usarla 
con los diferentes campos que queramos. Para obtener el estado 
de validación, podemos acceder a su propiedad isValid como si
fuese una propiedad común
*/

function CampoRequerido(selectorName) {
  let isValid = false;

  const nodo = document.querySelector(selectorName);

  const regExp1 = /^\w{5,10}$/;

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

const nombre = CampoRequerido("#nombre");
const pass = CampoRequerido("#password");
const form = document.querySelector("#form");
const error = document.querySelector("#error");

form.addEventListener("submit", (e) => {
  const mensaje = [];

  if (!nombre.isValid()) {
    mensaje.push(
      "El nombre debe contener entre 5 y 10, caracteres alfanuméricos y/o el '_'."
    );
  }

  if (!pass.isValid()) {
    mensaje.push(
      "La contraseña debe contener entre 5 y 10, caracteres alfanuméricos y/o el '_'."
    );
  }

  if (pass.value.toLowerCase() == "contraseña") {
    mensaje.push("La contraseña no pude ser 'contraseña'.");
  }

  if (pass.value.toLowerCase() == "password") {
    mensaje.push("La contraseña no pude ser 'password'.");
  }

  if (mensaje.length > 0) {
    e.preventDefault();
    error.innerHTML = mensaje.join(" ");
  } else {
    alert("Datos enviados.");
  }
});
