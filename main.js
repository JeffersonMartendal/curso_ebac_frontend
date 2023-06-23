$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault()
        const tarefaNova = $('#nome-tarefa').val()
        const novoItem = $('<li>' + tarefaNova + '</li>')
        $('ul').append(novoItem);
        $('#nome-tarefa').val('');
    })
    $('ul').on('click', 'li', function() {
        $(this).css('text-decoration', 'line-through')
    })
})