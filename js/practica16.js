// Solicitar una cadena de texto al usuario
let texto = prompt("Ingrese una cadena de texto:");

// Crear una variable para almacenar el texto al revés
let textoReverso = "";

// Recorrer la cadena de texto en orden inverso
for (let i = texto.length - 1; i >= 0; i--) {
  // Agregar cada carácter al texto reverso
  textoReverso += texto[i];
}

// Mostrar el texto al revés
document.write("El texto al revés es: " + textoReverso);
