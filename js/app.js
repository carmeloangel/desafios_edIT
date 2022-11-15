/* Cree una función llamada  function gastoConIva() que acepte un número y devuelva ese número más el 21% que es el valor del IVA. Luego crea una function map() que tome dos entradas o parámetros: <br>
        1) Un array de como valores números. <br> 
        2) Una función callback: esta función se aplica a cada elemento del array (dentro de la función map(). <br>
Haga que su function map() devuelva una nueva matriz llena de números que son el resultado de usar la función callback en cada elemento de la matriz de entrada */

function gastoConIva(numero) {
  return numero * 1.21;
}

function map(array, callback) {
  matrizIVA = [];
  array.forEach((element) => {
    matrizIVA.push([element, callback(element)]);
  });
  return matrizIVA;
}

array = [12000, 563, 5865, 166, 100];

console.log(map(array, gastoConIva));
