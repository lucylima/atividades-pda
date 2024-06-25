const url = 'https://pokeapi.co/api/v2/pokemon/25'
let name
const acharPokemon = () => {
  fetch(url)
    .then(response => response.json())
    .then(pokemon => console.log(pokemon)) 
    .then(pokemon.name = name)
}
let nome = document.querySelector("h1")
nome.innerText = name
acharPokemon()