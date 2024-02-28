function cumprimentarUsuario() {
    let nome = prompt("Olá! qual é seu nome?");
    alert(`Seu nome é lindo, ${nome}`);
}
cumprimentarUsuario();

function soma(){
    let x = Number(prompt('Seja bem vindo a função de soma, digite o primeiro número'));
    let y = Number(prompt('Agora o segundo número'));
    let z = x + y;
    alert(`${x} + ${y} = ${z}`); 
}
function subtracao(){
    let x = Number(prompt('Seja bem vindo a função de subtração, digite o primeiro número'));
    let y = Number(prompt('Agora o segundo número'));
    let z = x - y;
    alert(`${x} - ${y} = ${z}`); 
}
function divisao(){
    let x = Number(prompt('Seja bem vindo a função de divisão, digite o primeiro número'));
    let y = Number(prompt('Agora o segundo número'));
    let z = x / y;
    alert(`${x} / ${y} = ${z}`); 
}
function multiplicacao(){
    let x = Number(prompt('Seja bem vindo a função de multiplicação, digite o primeiro número'));
    let y = Number(prompt('Agora o segundo número'));
    let z = x * y;
    alert(`${x} x ${y} = ${z}`); 
}
function calculadora() {
    let menu = Number(prompt('Escolha uma operação\n1 - soma\n2 - subtração\n3 - divisão\n4 - multiplicação'));
    switch (menu) {
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            divisao();
            break;
        case 4:
            multiplicacao();
            break;
        default:
            alert('nenhum escolhido');
            calculadora();
            break;
    }
}
calculadora();