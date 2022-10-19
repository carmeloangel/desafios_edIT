/* 1. En esta parte nos centraremos en hacer una función Tarea, que reciba:
      ● El código <br />
      ● Título <br />
      ● Descripción <br />
      ● Fecha de alta <br />
      ● Deathline <br />
      ● Observaciones<br />
      ● Estado <br />
      2. Esa función debe devolver un objeto con los mismos campos. <br />
      3. En AlmacenamientoTareas, simplemente crear un array con varias Tareas
      de prueba. */

function tarea(
  code,
  title,
  description,
  initialDate,
  deathline,
  observations,
  state
) {
  return {
    code: code,
    title: title,
    description: description,
    initialDate: initialDate,
    deathline: deathline,
    observations: observations,
    state: state,
  };
}

//Creamos tareas
const tarea1 = tarea(
  23,
  "Televisor",
  "Para ver multimedia",
  "2022-03-21",
  "2023-05-30",
  "No golpearlo",
  "Nuevo"
);
const tarea2 = tarea(
  113,
  "Mixer",
  "Para licuar",
  "2022-05-21",
  "2028-05-30",
  "No sumergirlo",
  "Premium"
);
const tarea3 = tarea(
  26,
  "Celulares",
  "Para comunicarse",
  "2021-05-15",
  "2036-09-22",
  "No arrojarlo",
  "Gama media"
);

//Probamos en consola
// console.log(tarea2);

const taskStorage = [tarea1, tarea2, tarea3];

//Probamos en consola
// console.log(taskStorage);
