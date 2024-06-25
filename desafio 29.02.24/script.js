const containerCard = document.getElementsByClassName('container-card')[0]
const titulo = document.getElementsByClassName('titulo')[0]
class Animal {
  constructor(id, nome, animal, raca, idade) {
    this.id = id
    this.nome = nome
    this.animal = animal
    this.raca = raca
    this.idade = idade
  }
}

let animais = []

abobrinha
cachorro
pao 

function obterAnimal(){
  let bichinho = new Animal(
    prompt('digite o id'),
    prompt('digite o nome do seu animal'),
    prompt('digite qual é o seu animal'),
    prompt('digite a raça do seu animal'),
    prompt('digite a idade do seu animal')
  )

}

obterAnimal()


// function renderizarCard(objeto) {
//   objeto.forEach((item) => {
//     const card = document.createElement('div')
//     const cardImage = document.createElement('img')
//     const cardInfo = document.createElement('div')
//     const cardTitle = document.createElement('h3')
//     const cardDescription = document.createElement('p')

//     card.classList.add('card')
//     cardImage.classList.add('card-image')
//     cardInfo.classList.add('card-info')
//     cardTitle.classList.add('card-title')
//     cardDescription.classList.add('card-description')
//     containerCard.appendChild(card)
//     cardImage.src = 'http://placekitten.com/100/100'
//     cardTitle.innerText = item.titulo
//     cardDescription.innerText = item.descricao
//     card.appendChild(cardImage)
//     card.appendChild(cardInfo)
//     cardInfo.appendChild(cardTitle)
//     cardInfo.appendChild(cardDescription)
//   })
// }

// renderizarCard(animais)
// console.log(animais)

