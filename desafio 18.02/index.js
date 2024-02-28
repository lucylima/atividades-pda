let n1, n2, n3, resultado;
alert('Olá seja bem vindo ao sistema único de educação\nNesse programa você irá inserir 3 notas e nós te diremos a sua média');
n1 = parseFloat(prompt('Insira sua primeira nota'));
n2 = parseFloat(prompt('Insira sua segunda nota'));
n3 = parseFloat(prompt('Insira sua terceira nota'));
resultado = Math.round((n1 + n2 + n3) / 3);
if(resultado >= 8) {
    alert(`Parabens pelo resultado, sua média é ${resultado}`);
}else if (resultado >= 6 && resultado < 8){
    alert(`Boa! você conseguiu, sua média é ${resultado}`);
} else {
    alert(`Uma pena! você foi reprovado e sua média é ${resultado}`);
}

