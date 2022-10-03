let day = new Date().getDay();
let welcome = document.getElementById("welcome");

switch (day) {
  case 0:
    mensaje = "Hoy es domingo. Que descanses muy bien!";
    break;
  case 1:
    mensaje = "Es lunes! Arrancamos con toda!";
    break;
  case 2:
    mensaje = "Que tengas lindo martes!";
    break;
  case 3:
    mensaje = "Vamos que estamos en la mitad. Buen miercoles!";
    break;
  case 4:
    mensaje = "Un casi viernes. Ten lindo jueves!";
    break;
  case 5:
    mensaje = "Es hoy!! El ultimo envion y ya finde. Buen viernes!";
    break;
  case 6:
    mensaje = "Tamos chelo y el cuerpo lo sabe. Que tengas sabadozo!";
    break;
  default:
    mensaje = "Hubo un error al obtener el dia.";
    break;
}

let user = prompt("Ingresa tu nombre de usuario: ");
let password = Number(prompt("Ingresa tu contraseña: "));

if (user === "admin" && password === 1234) {
  alert(mensaje + " Bienvenido!");
  welcome.innerHTML = mensaje + " Bienvenido!";
} else {
  alert("Error. Nombre de usuario o contraseña incorrectos. Acceso denegado.");
  welcome.innerHTML =
    "Error. Nombre de usuario o contraseña incorrectos. Acceso denegado.";
}
