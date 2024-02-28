
// * função que recebe 4 valores da função media
// * faz o cálculo e exibe
const somarMedia = function (valor1, valor2, valor3, valor4) {
    // ! esse alert faz o cálculo da média e exibe
    alert( (valor1 + valor2 + valor3 + valor4) / 4 )
}

// ! funçao pede as notas do usuário 
// ! substitui a "funcaoParaSomar" pela função de somar média e passa pelo parãmetro os valores exigidos
function media(funcaoParaSomar) {
    let nota1 = Number(prompt("Digite a sua nota 1:"))
    let nota2 = Number(prompt("Digite a sua nota 2:"))
    let nota3 = Number(prompt("Digite a sua nota 3:"))
    let nota4 = Number(prompt("Digite a sua nota 4:"))
    funcaoParaSomar(nota1, nota2, nota3, nota4)
}

media(somarMedia);