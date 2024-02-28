let resultado = document.getElementById('resultado');
let y, z;
let nomes = ['ana carolina', 
            'andré menezes', 
            'jamyle elen', 
            'kainê homero', 
            'lucy lima', 
            'raissa santos', 
            'sabrina marques'];
// * primeiro a gente divide os nomes em 2 strings diferentes
// * em cada string a gente consideraria somente a primeira letra
// * concatenariarmos as duas iniciais e exibiriamos elas em caixa alta
// * ex: AC, AM, JE, KH, LL, RS, SM
nomes.forEach((element) => {
  // ! dois nomes próprios diferentes
  let z = element.split(' ');
  // ! agora z é um array com os dois nomes separados
  y = '';
  z.forEach((item) => {
    // * pra cada nome, ele faz algo
    // * y é igual a primeira letra
   y += item[0];
  });
  console.log(y.toUpperCase());
});