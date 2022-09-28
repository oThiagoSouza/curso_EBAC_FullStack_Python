$(document).ready(function() {
    $('.carousel-imagens').slick({
        autoplay: true
    });

    $('.menu-hamburguer').click(()=>{
        $('nav').slideToggle();
    });

    $('#telefone').mask("(00) 00000-0000")

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            veículoDesejado: {
                required: false,
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome completo.',
            telefone: 'Este campo é obrigatório.',
            email: 'Este campo é obrigatório.',
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeCarro = $(this).parent().find('h3').text();
        
        $('#veiculo-desejado').val(nomeCarro);

        $('html').animate({
        scrollTop: destino.offset().top
        }, 1000)
    })
    });