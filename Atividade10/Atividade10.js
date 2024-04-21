function calcularMaior() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);

    var maior = Math.max(num1, num2, num3);

    document.getElementById("maior").value = maior;
}


function ordenarCrescente() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);

    var numeros = [num1, num2, num3];
    numeros.sort(function (a, b) { return a - b });
    document.getElementById("crescente").value = numeros.join(", ");

    console.log(numeros);
}



function verificarPalindromo() {
    var palavra = document.getElementById("palindromo").value.toUpperCase();
    var reverse = palavra.split('').reverse().join('');

    if (palavra === "") {
        document.getElementById("respal").innerHTML = "Insira uma palavra";
        return;
    }
    var resultado = (palavra === reverse) ? "É um palíndromo" : "Não é um palíndromo";

    document.getElementById("respal").innerHTML = resultado;
}


function verificarTriangulo() {
    var lado1 = parseFloat(document.getElementById("numtri1").value);
    var lado2 = parseFloat(document.getElementById("numtri2").value);
    var lado3 = parseFloat(document.getElementById("numtri3").value);

    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        if (lado1 === lado2 && lado2 === lado3) {
            document.getElementById("restri").value = "Forma um triângulo equilátero";
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            document.getElementById("restri").innerHTML = "Forma um triângulo isósceles";
        } else {
            document.getElementById("restri").innerHTML = "Forma um triângulo escaleno";
        }
    } else {
        document.getElementById("restri").innerHTML = "Não forma um triângulo";
    }
}