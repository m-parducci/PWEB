$(document).ready(function() {
    // Função para carregar o conteúdo da página de adicionar
    function loadAddPage() {
        $('.content').load('/pages/home.html');
    }

    // Carregar a página de adicionar por padrão
    loadAddPage();

    // Event listener para os links da barra lateral
    $('.menu a').click(function(event) {
        event.preventDefault();
        var page = $(this).attr('href');
        $('.content').load(page);
    });
});
