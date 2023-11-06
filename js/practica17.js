// Solicitar un texto al usuario
let texto = prompt("Ingrese un texto:");

// Convertir el texto a minúsculas para simplificar la comparación
let textoMinusc = texto.toLowerCase();

// Crear una variable para almacenar la posición de la primera vocal
let posicionVocal = -1;

// Recorrer cada carácter de la cadena de texto
for (let i = 0; i < textoMinusc.length; i++) {
  // Verificar si el carácter actual es una vocal
  if (
    textoMinusc[i] === "a" ||
    textoMinusc[i] === "e" ||
    textoMinusc[i] === "i" ||
    textoMinusc[i] === "o" ||
    textoMinusc[i] === "u"
  ) {
    // Almacenar la posición de la primera vocal
    posicionVocal = i;
    break; // Salir del bucle una vez encontrada la primera vocal
  }
}

// Mostrar la posición de la primera vocal
document.write("La primera vocal está en la posición " + posicionVocal);