const cadenas = []; // Array para almacenar las cadenas ingresadas

while (true) {
  // Solicitar una cadena de texto al usuario
  constcadena = prompt("Ingrese una cadena de texto:");

  // Verificar si se ha pulsado "cancelar"
  if (cadena === null) {
    break; // Salir del bucle while
  }

  // Agregar la cadena al array
  cadenas.push(cadena);
}

// Concatenar las cadenas con un guión "-"
const resultado = cadenas.join("-");

// Mostrar las cadenas concatenadas
alert(resultado);
