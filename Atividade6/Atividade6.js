function calcularMedia() {

    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    var media = (nota1 + nota2 + nota3) / 3;


    alert("A média das notas é " + media.toFixed(2));
}

function somar() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    var soma = (numero1 + numero2);

    document.getElementById("soma").value = soma;
}

function subtrair() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    var subtracao = (numero1 - numero2);

    document.getElementById("subtracao").value = subtracao;
}

function multiplicar() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    var mult = (numero1 * numero2);

    document.getElementById("produto").value = mult;
}

function dividir() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    var mult = (numero1 / numero2);

    document.getElementById("divisao").value = mult;
}

function resto() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    var resto = (numero1 % numero2);

    document.getElementById("resto").value = resto;
}
