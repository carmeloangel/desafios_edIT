let calculator = function (number1, number2, operation) {
  switch (operation) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
    default:
      console.log("Operación no valida.");
      return NaN;
  }
};

console.log("Suma entre 3 y 6: " + calculator(3, 6, "+"));
console.log("Resta entre 3 y 6: " + calculator(3, 6, "-"));
console.log("Multiplicación entre 3 y 6: " + calculator(3, 6, "*"));
console.log("División entre 3 y 6: " + calculator(3, 6, "/"));

console.log("División entre 3 y 6: " + calculator(3, 6, "p"));
