function generarPiramide() {
    var numero = parseInt(prompt("Ingrese un número (no mayor a 50):"));
    if (numero > 50) {
        alert("El número ingresado es mayor a 50. Por favor, ingrese un número válido.");
        return;
    }
    var piramide = "";
    for (var i = 1; i <= numero; i++) {
        for (var j = 1; j <= i; j++) {
            piramide += j;
        }
        piramide += "<br>";
    }
    document.getElementById("resultado").innerHTML = piramide;
}