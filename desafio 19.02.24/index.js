let nomes = ['lucy lima', 'leticia monteiro', 'rebeca frança', 'vitor cardoso', 'ana lisboa'];
let abr = [];
let seletor;
function abreviar(array){
  for (let seletor = 0; seletor < array.length; seletor++) {
    abr.push(nomes[seletor].slice(0,2));
  }
}
console.log(abr);
abreviar(nomes);

// browserType.slice(0, 3);
// texto.substring(4,9)

// passa em cada string e retorn