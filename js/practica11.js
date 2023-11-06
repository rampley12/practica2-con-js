const edad1 = parseInt(prompt("Ingrese la primera edad:"));
const edad2 = parseInt(prompt("Ingrese la segunda edad:"));
const edad3 = parseInt(prompt("Ingrese la tercera edad:"));
const nombre1 = prompt("Ingrese el primer nombre:");
const nombre2 = prompt("Ingrese el segundo nombre:");
const nombre3 = prompt("Ingrese el tercer nombre:");


let mayorEdad = Math.max(edad1, edad2, edad3);


let nombreMayor;
if (mayorEdad === edad1) {
  nombreMayor = nombre1;
} else if (mayorEdad === edad2) {
  nombreMayor = nombre2;
} else {
  nombreMayor = nombre3;
}

// Mostrar el nombre de la persona de mayor edad
alert("La persona de mayor edad es: " + nombreMayor);
