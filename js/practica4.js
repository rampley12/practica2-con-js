let suma = 0;
let numero;

while (true) {
  numero = prompt("Introduce un número:");

  if (numero === null) {
    alert("Has cancelado. La suma total es: " + suma);
    break;
  }

  numero = parseFloat(numero);

  if (isNaN(numero)) {
    alert("No has introducido un número válido. Por favor, inténtalo de nuevo.");
  } else {
    suma += numero;
  }
}
