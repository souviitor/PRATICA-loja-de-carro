/* funcao criada para startar o carrousel */
$(document).ready(function(){
  $('#ca-img').slick({
    autoplay: true,
  });

  $('.manu-hbg').click(function() {
    $('nav').slideToggle();/* se ele nao está sendo exibido  */
  })

  $('#telefone').mask('(00) 00000-0000');

  $('form').validate({
    rules:{
      nome: {
        required: true
      },
      email: {
        required: true, 
        email: true
      },
      telefone: {
        required: true
      },
      mensagem: {
        required: true
      },
      veicuoloDeInteresse: {
        required: false
      },
    },
    messages: {
      nome: 'Por favor, insira o seu nome'
    },
    submitHandler: function(form){
      console.log(form);
    },
    invalidHandler: function(evento, validador){
      let camposIncorretos = validador.numberOfInvalids();
      if(camposIncorretos){
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    }
  });
  
  $('.lista-veiculos button').click(function(){
    const destino = $('#contato');

    const nomeVeiculo = $(this).parent().find('h3').text();

    $('#veicuolo-interesse').val(nomeVeiculo);

    $('html').animate({
      scrollTop: destino.offset().top
    }, 1000)
  })
})