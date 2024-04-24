/* set carousel autoplay */
$(document).ready(function(){
  $('.ca-img').slick({
    autoplay: true,
  });
});

/* function para expandir o botão de ordernar */
function clickBtn() {
  const btnClick = document.getElementById('ordenar');
  btnClick.classList.toggle('open');
}