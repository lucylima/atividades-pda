// let lista = document.getElementById('lista');

// for (let index = 0; index < 5; index++) {
//   let item = document.createElement('li');
//   item.textContent = `nº ${index}`;
//   lista.appendChild(item)
// }

let x = document.getElementById('x');
let y = document.getElementById('y');
let opcao = document.querySelectorAll('input[type="radio"]');
let resultado = document.getElementById('resultado');

function soma(valor1, valor2){
  return parseInt(valor1) + parseInt(valor2);
}
function subtracao(valor1, valor2){
  return parseInt(valor1) - parseInt(valor2);
}
function divisao(valor1, valor2){
  return parseInt(valor1) / parseInt(valor2);
}
function multiplicacao(valor1, valor2){
  return parseInt(valor1) * parseInt(valor2);
}
function calcular(operador){
  resultado.textContent = `O resultado é ${operador(x.value, y.value)}`;
}

function operacao(){
  for (let index = 0; index < opcao.length; index++) {
    if(opcao[index].checked == true){
      calcular(opcao[index].value);
    }
  }
    // switch(opcao){
    //   case opcao[0].checked:
    //     calcular(opcao[0].value);
    //   break;
    //   case opcao[1].checked:
    //     calcular(opcao[1].value);
    //   break;
    //   case opcao[2].checked:
    //     calcular(opcao[2].value);
    //   break;
    //   case opcao[3].checked:
    //     calcular(opcao[3].value);
    //   break;
    // }
}


