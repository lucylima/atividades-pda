let doces = [];
let frutas = [];
let chocolates = [];

function escolherProdutos(){
for (let dCounter = 0; dCounter < 4; dCounter++) {
    let inputDoce = prompt('Olá! escolha 3 doces\n1 - Pudim\n2 - Pirulito\n3 - Sorvete\n4 - Jujuba\n5 - Bem-casado');
    doces.push(inputDoce);
}

for (let fCounter = 0; fCounter < 4; fCounter++) {
    let inputFruta = prompt('Olá! escolha 3 frutas\n1 - Banana\n2 - Maçã\n3 - Morango\n4 - Uva\n5 - Jaca');
    frutas.push(inputFruta);
}
for (let cCounter = 0; cCounter < 4; cCounter++) {
    let inputChocolate = prompt('Olá! escolha 3 chocolates\n1 - Chocolate branco\n2 - Meio amargo\n3 - Batom garoto\n4 - Chocolate com confetti\n5 - Cookies n cream');
    chocolates.push(inputChocolate);
}
renderizarEscolhas();
};

function renderizarEscolhas() {
    document.write(`<h1>Doces escolhidos:</h1>`);
    for (let i = 0; i < doces.length; i++) {
        document.write(`<li>${doces[i]}</li>`);
    }
    document.write(`<h2>Frutas escolhidas:</h2>`);
    for (let i = 0; i < frutas.length; i++) {
        document.write(`<li>${frutas[i]}</li>`);
    }
    document.write(`<h2>Chocolates escolhidos:</h2>`);
    for (let i = 0; i < chocolates.length; i++) {
        document.write(`<li>${chocolates[i]}</li>`);
    }
}




