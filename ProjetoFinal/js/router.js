$(document).ready(function () {
    // Função para carregar uma página com base no hash fragment
    function loadPage() {
        var hash = window.location.hash.substr(1); // Obtendo o hash fragment sem o '#'
        var page = hash || 'home'; // Se não houver hash fragment, carrega a página inicial
        $.ajax({
            url: '/pages/' + page + '.html',
            dataType: 'html',
            success: function (response) {
                $('#content').html(response);
                if (page === 'home' || page === 'editar') {
                    displayTasks(); // Se for a página home, exibe as tarefas

                }
            }
        });
    }

    // Carregar a página inicial por padrão
    loadPage();

    // Configurar o evento de hashchange para atualizar a página quando o hash fragment for alterado
    $(window).on('hashchange', loadPage);
});