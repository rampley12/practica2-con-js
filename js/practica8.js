function generarPiramide() {
    const numero = parseInt(prompt("Ingrese un número (no mayor a 50):"));
    if (numero > 50) {
        alert("El número ingresado es mayor a 50. Por favor, ingrese un número válido.");
        return;
    }
    const piramide = "";
    for (let i = 1; i <= numero; i++) {
        for (let j = 1; j <= i; j++) {
            piramide += j;
        }
        piramide += "<br>";
    }
    document.getElementById("resultado").innerHTML = piramide;
}