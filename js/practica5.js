function calcularLetraDNI() {
    let numero = prompt("Introduce el número de DNI:");

    if (numero === null) {
      alert("Has cancelado.");
      return;
    }

    numero = parseInt(numero);

    if (isNaN(numero)) {
      alert("No has introducido un número válido. Por favor, inténtalo de nuevo.");
      calcularLetraDNI();
      return;
    }

    if (numero < 0 || numero > 99999999) {
      alert("El número de DNI debe estar entre 0 y 99999999. Por favor, inténtalo de nuevo.");
      calcularLetraDNI();
      return;
    }

    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const resto = numero % 23;
    const letra = letras.charAt(resto);

    alert("La letra correspondiente al número de DNI " + numero + " es: " + letra);
  }