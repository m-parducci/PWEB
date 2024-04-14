// Array para armazenar os dados coletados
var dados = [];

// Função para adicionar dados
function adicionarDados() {
    // Obtendo os valores dos campos
    var idade = document.getElementById('idade').value;
    var sexo = document.querySelector('input[name="sexo"]:checked').value;
    var opiniao = document.getElementById('opiniao').value;

    // Adicionando os dados ao array
    dados.push({ idade: idade, sexo: sexo, opiniao: opiniao });

    // Limpando os campos
    document.getElementById('idade').value = '';
    document.querySelector('input[name="sexo"]:checked').checked = false;
    document.getElementById('opiniao').selectedIndex = 0;
}

// Função para processar dados
function processarDados() {
    // Calculando a média da idade
    var somaIdade = 0;
    var idadeMaisNova = Infinity;
    var idadeMaisVelha = -Infinity;
    var quantidadePessimo = 0;
    var quantidadeOtimoBom = 0;
    var quantidadeMulheres = 0;
    var quantidadeHomens = 0;

    for (var i = 0; i < dados.length; i++) {
        var idade = parseInt(dados[i].idade);
        var opiniao = parseInt(dados[i].opiniao);

        // Média da idade
        somaIdade += idade;

        // Idade da pessoa mais nova e mais velha
        if (idade < idadeMaisNova) {
            idadeMaisNova = idade;
        }
        if (idade > idadeMaisVelha) {
            idadeMaisVelha = idade;
        }

        // Quantidade de pessoas que responderam péssimo
        if (opiniao === 1) {
            quantidadePessimo++;
        }

        // Quantidade de pessoas que responderam ótimo e bom
        if (opiniao === 3 || opiniao === 4) {
            quantidadeOtimoBom++;
        }

        // Quantidade de mulheres e homens
        if (dados[i].sexo === 'F') {
            quantidadeMulheres++;
        } else if (dados[i].sexo === 'M') {
            quantidadeHomens++;
        }
    }

    var mediaIdade = somaIdade / dados.length;
    var porcentagemOtimoBom = (quantidadeOtimoBom / dados.length) * 100;

    // Exibindo os resultados
    var resultadosDiv = document.getElementById('resultados');
    resultadosDiv.style.display = 'block';
    resultadosDiv.innerHTML = '<h2>Resultados:</h2>' +
        '<p>Média da idade: ' + mediaIdade.toFixed(2) + '</p>' +
        '<p>Idade da pessoa mais nova: ' + idadeMaisNova + '</p>' +
        '<p>Idade da pessoa mais velha: ' + idadeMaisVelha + '</p>' +
        '<p>Qtde de pessoas que responderam péssimo: ' + quantidadePessimo + '</p>' +
        '<p>% de pessoas que responderam ótimo e bom: ' + porcentagemOtimoBom.toFixed(2) + '%</p>' +
        '<p>Mulheres que responderam ao questionário: ' + quantidadeMulheres + '</p>' +
        '<p>Homens que responderam ao questionário: ' + quantidadeHomens + '</p>';
}