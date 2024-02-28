let nome;

function cadastrarNome(){
    nome = prompt('digite seu nome');
    validarNome(nome);
}

function validarNome(n) {
    if(n.length <= 3){
        while(n.length <= 3){
            alert('por favor escreva um nome certo');
            cadastrarNome();
        }
    }else {
        exibirNome(n);
    }


}


function exibirNome(nome){
    document.write(`${nome}`);
}