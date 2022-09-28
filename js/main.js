    /* máscaras de campos*/
    $('#cep').mask("00.000-000")
    $('#cpf').mask('000.000.000-00')
    $('#telefone').mask('(00) 00000-0000')

    /* validação dos campos*/

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required:true
            },
            endereço: {
                required:true
            },
            cep: {
                required:true
            },
        }
    })
