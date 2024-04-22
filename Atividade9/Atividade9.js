function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    var imc = peso / (altura * altura);

    if (imc < 18.5) {
        alert(`IMC: ${imc} Classificação: Magreza`);
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        alert(`IMC: ${imc.toFixed(2)} Classificação: Normal`);
    } else if (imc >= 25 && imc <= 29.9) {
        alert(`IMC: ${imc.toFixed(2)} Classificação: Sobrepeso`);
    } else if (imc >= 30 && imc <= 39.9) {
        alert(`IMC: ${imc.toFixed(2)} Classificação: Obesidade`);
    }
    else
        alert(`IMC: ${imc.toFixed(2)} Classificação: Obesidade Grave`);

    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}