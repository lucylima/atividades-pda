let nomes = ['lucy', 'jhonatan', 'gabriel', 'lauany', 'sabrina']
let comidas = ['Pudim', 'Pão', 'Farofa', "Salame"]

const lista = document.getElementsByClassName('lista')[0]

const listaDeCoisas = (...array) => {
  console.log(array)
  for (let i; i = 0; i < array.length; i++) {
    let arrays = array[i] 
    for (let index; index = 0; index < arrays.length; index++) {
      let item = document.createElement('li')
      item.innerText = colecaoArrays[index]
      lista.appendChild(item)
    }
  } 
} 

listaDeCoisas(nomes, comidas)