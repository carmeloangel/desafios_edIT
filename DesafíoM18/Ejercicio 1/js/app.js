/*** Ejercicio 1
Diseñar una función llamada CampoRequerido. Esta función 
debe recibir un elemento del DOM y retornar el mismo elemento. 
Solo debe agregarle un listener al ‘blur’ para que, cuando 
éste se dispare, modifique la propiedad isValid de ese elemento.
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

// nombre = CampoRequerido("#nombre");
// if (CampoRequerido("#nombre").isValid()) {
//   console.log("Valida pasando");
// } else {
//   console.log("NO Valida pasando");
// }
