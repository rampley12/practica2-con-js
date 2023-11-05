function generarPiramideInversa() {
    let numero = prompt("Introduce un número (no mayor de 50):");
    numero = parseInt(numero);

    if (isNaN(numero) || numero <= 0 || numero > 50) {
      alert("El número introducido no es válido. Por favor, inténtalo de nuevo.");
    } else {
      let piramide = "";
      for (let i = numero; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
          piramide += i;
        }
        piramide += "<br>";
      }
      document.getElementById("resultado").innerHTML = piramide;
    }
  }