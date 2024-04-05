function jogar() {
    var jogador = document.getElementById("jogovelha").value;
    var computador = ['pedra', 'papel', 'tesoura'][Math.floor(Math.random() * 3)];

    var resultado = "";

    if (jogador === computador) {
        resultado = "Empate!";
    } else if ((jogador === 'pedra' && computador === 'tesoura') ||
        (jogador === 'tesoura' && computador === 'papel') ||
        (jogador === 'papel' && computador === 'pedra')) {
        resultado = "Você ganhou!";
    } else {
        resultado = "Você perdeu!";
    }

    alert(resultado);
}