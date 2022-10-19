/* En esta segunda parte, te proponemos diseñar las siguientes funciones para gestionar
AlmacenamientoTareas:
1. AgregarTarea, para agregar una nueva tarea.
2. EditarTarea, que recibe una tarea y la modifica.
3. BorrarTarea, que borra una tarea ya existente.
4. ReporteTodasTareas, que devuelve todas las tareas.
5. ReporteTareasEnCurso, que devuelve las tareas cuyo estado es ‘en-curso’.
6. ReporteTareasPendientes, que devuelve las tareas cuyo estado es ‘pendiente’.
7. ReporteTareasTerminadas, que devuelve las tareas cuyo estado es ‘terminada’. */

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
  001,
  "Limpiar Televisor",
  "Para ver multimedia mejor",
  "2022-03-21",
  "2023-05-30",
  "No golpearlo",
  "en-curso"
);
const tarea2 = tarea(
  002,
  "Mixer aceitacion",
  "Para licuar mejor",
  "2022-05-21",
  "2028-05-30",
  "No sumergirlo",
  "terminada"
);
const tarea3 = tarea(
  003,
  "Celulares comprar",
  "Para comunicarse",
  "2021-05-15",
  "2036-09-22",
  "No traer fallidos",
  "pendiente"
);
const tarea4 = tarea(
  004,
  "Sacar Basura",
  "Para la higiene",
  "2022-10-19",
  "2022-10-20",
  "No olvidar lo del fondo",
  "en-curso"
);
const tarea5 = tarea(
  005,
  "Sacar Perros a pasear",
  "Para salud mental",
  "2022-10-19",
  "2022-10-20",
  "No olvidar los de la terraza",
  "pendiente"
);

const tasksGestor = () => {
  const taskStorage = [tarea1, tarea2, tarea3];

  //1- Agrega una tarea nueva a la lista
  function addTask(tarea) {
    taskStorage.push(tarea);
  }

  //2- Recibe una tarea y la modifica.
  function editTask(tarea) {
    for (let i = 0; i < taskStorage.length; i++) {
      if (taskStorage[i] === tarea) {
        taskStorage[i].title = prompt("Ingrese un nuevo nombre de tarea");
        console.log("Se modifico la tarea pedida");
        return;
      }
    }
    console.log("No se encontro la tarea buscada");
  }

  //3- Elimina una tarea de la lista
  function eraseTask(item) {
    for (let i = 0; i < taskStorage.length; i++) {
      const element = taskStorage[i];

      if (element.title === item.title) {
        taskStorage.splice(i, 1);
        console.log("Se eliminó la tarea pedida");
        return;
      }
    }
    console.log("No se encontro la tarea buscada");
  }

  //4- Devolver tareas
  function returnAllTasks() {
    return taskStorage;
  }

  //5- Devolver tareas en curso
  function returnOngoingTasks() {
    const auxStorage = [];
    taskStorage.forEach((element) => {
      if (element.state === "en-curso") auxStorage.push(element);
    });
    if (auxStorage.length === 0) console.log("No hay tareas en curso");
    return auxStorage;
  }

  //6- Devolver tareas pendientes
  function returnPendingTasks() {
    const auxStorage = [];
    taskStorage.forEach((element) => {
      if (element.state === "pendiente") auxStorage.push(element);
    });
    if (auxStorage.length === 0) console.log("No hay tareas pendientes");
    return auxStorage;
  }

  //7- Devolver tareas pendientes
  function returnEndedTasks() {
    const auxStorage = [];
    taskStorage.forEach((element) => {
      if (element.state === "terminada") auxStorage.push(element);
    });
    if (auxStorage.length === 0) console.log("No hay tareas terminadas");
    return auxStorage;
  }

  //Retorna el gestor con sus atributos y metodos
  return {
    taskStorage: taskStorage,
    addTask: addTask,
    editTask: editTask,
    eraseTask: eraseTask,
    returnAllTasks: returnAllTasks,
    returnOngoingTasks: returnOngoingTasks,
    returnPendingTasks: returnPendingTasks,
    returnEndedTasks: returnEndedTasks,
  };
};

//*** Ahora iremos probando todos los métodos

//Se crea un gestor de tareas
const gestor = tasksGestor();

//Se agrega tarea4 al array del gestor
gestor.addTask(tarea4);
// console.log(gestor.taskStorage);

//Se edita el titulo de la tarea 2, al array del gestor
// gestor.editTask(tarea2);
// gestor.editTask(tarea5);
// console.log(gestor.taskStorage);

//Se elimina tarea3 al array del gestor
// gestor.eraseTask(tarea3);
// gestor.eraseTask(tarea5);
// console.log(gestor.taskStorage);

//Vemos todas las tareas
// console.log(gestor.returnAllTasks());

//Vemos solo tareas en curso
// console.log(gestor.returnOngoingTasks());

//Vemos solo tareas pendientes
// console.log(gestor.returnPendingTasks());

//Vemos solo tareas terminadas
console.log(gestor.returnEndedTasks());
