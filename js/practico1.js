// Solicitar la edad al usuario
var edad = prompt("Ingrese su edad:");

// Verificar si la edad es un número válido
if (isNaN(edad)) {
  alert("La edad ingresada no es un número válido.");
} else {
 
  // Verificar si es mayor de 18 años
  if (edad >= 18) {
    document.write("Ya puedes conducir.");
  } else {
    document.write("Aún no puedes conducir.");
  }
}
