$('form').submit(function(e){
    e.preventDefault();

    const novaTarefa = $('#tarefa').val();
    let novoItemLista = $('<li></li>');


    $(`
    <div class="lista-tarefas">
        <li>
            ${novaTarefa}
        </li>
    </div>
        `).appendTo(novoItemLista);
    $(novoItemLista).appendTo('ul');

    $('#tarefa').val('');

    $(novoItemLista).click(function(){
        $(this).css('text-decoration', 'line-through');
    })
})

