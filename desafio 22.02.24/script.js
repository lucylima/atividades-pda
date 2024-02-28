let titulo = document.getElementById('titulo');
let botao = document.getElementById('botao');
let img = document.querySelector('img');
let btnDark = document.getElementById('black');
let imagens = {
  gato1: 'http://placekitten.com/100/100',
  gato2: 'http://placekitten.com/150/150',
  gato3: 'http://placekitten.com/230/200',
}
let x = 0;
let darkmode = false;

function aplicarEstilo() {
  x++
  switch (x) {
    case 1:
      titulo.style.backgroundColor = 'green';
      titulo.style.color = 'white';
      botao.innerText = 'Acesso';
      break;
    case 2:
      titulo.style.backgroundColor = 'red';
      titulo.style.color = 'white';
      botao.innerText = 'Apagado';
      break;
    case 3:
      titulo.style.backgroundColor = 'transparent';
      titulo.style.color = 'black';
      botao.innerText = 'mi clique';
      x = 0;
  }
}
botao.addEventListener('click', aplicarEstilo);
btnDark.addEventListener('click', () => {
  darkmode ? document.querySelector('body').classList.remove('darkmode') :
  document.querySelector('body').classList.add('darkmode');
  darkmode = !darkmode;
});
img.addEventListener('mouseenter', () => {
  switch (x) {
    case 1:
      img.src = imagens.gato2;
      break;
    case 2:
      ímg.src = imagens.gato3;
      break;
  }
})
img.addEventListener('mouseleave', () => {
  img.src = 'http://placekitten.com/100/100';
})



