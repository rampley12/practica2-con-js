
let texto = prompt("Ingrese un texto:");


let contadorVocales = 0;


let textoMinusc = texto.toLowerCase();


for (let i = 0; i < textoMinusc.length; i++) {

  if (
    textoMinusc[i] === "a" ||
    textoMinusc[i] === "e" ||
    textoMinusc[i] === "i" ||
    textoMinusc[i] === "o" ||
    textoMinusc[i] === "u"
  ) {
    // Incrementar el contador de vocales
    contadorVocales++;
  }
}

// Mostrar el número de vocales
document.write("El texto tiene " + contadorVocales + " vocales.");
