// Solicitar una cadena de texto al usuario
let texto = prompt("Ingrese una cadena de texto:");

// Crear una variable para almacenar el resultado
let resultado = "";

// Recorrer cada carácter de la cadena de texto
for (let i = 0; i < texto.length; i++) {
  // Agregar el carácter actual al resultado
  resultado += texto[i];

  // Agregar el signo "-" si no es el último carácter
  if (i !== texto.length - 1) {
    resultado += "-";
  }
}

// Mostrar el resultado
document.write("El texto con el signo '-' entre cada carácter es: " + resultado);
