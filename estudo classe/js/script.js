const containerCard = document.getElementsByClassName('container-card')[0]

class Personagem {
  constructor(imagem, titulo, descricao) {
    this.imagem = imagem
    this.titulo = titulo
    this.descricao = descricao
  }
}

class Comida {
  constructor(imagem, titulo, descricao){
    this.imagem = imagem
    this.titulo = titulo
    this.descricao = descricao
  }
}

const mahito = new Personagem('./assets/mahito.jpg', 'Mahito', 'Mahito é um personagem do anime Jujutsu Kaisen')
const yuji = new Personagem('./assets/yuji.jpg', 'Itadori Yuji', 'Itadori Yuji é um personagem do anime Jujutsu Kaisen')
const sukuna = new Personagem('./assets/sukuna.jpg', 'Ryomen Sukuna', 'Ryomen Sukuna é um personagem do anime Jujutsu Kaisen')
const satoru = new Personagem('./assets/satoru.jpg', 'Gojo Satoru', 'Gojo Satoru é um personagem do anime Jujutsu Kaisen')
const pudim = new Personagem('./assets/pudim.jpg','Pudim','Pudim de leite tradicional')
const piraoAipim = new Personagem('./assets/pirao.jpg','Pirão de aipim','Pirão de aipim com calabresa, carne e camarão')
const pastel = new Personagem('./assets/pastel.jpg','Pastel','Pastel tradicional de queijo e presunto')

let personagens = [mahito, yuji, sukuna, satoru, pudim, piraoAipim, pastel]

function renderizarCard(objeto) {
  objeto.forEach((item) => {
    const card = document.createElement('div')
    const cardImage = document.createElement('img')
    const cardInfo = document.createElement('div')
    const cardTitle = document.createElement('h3')
    const cardDescription = document.createElement('p')

    card.classList.add('card')
    cardImage.classList.add('card-image')
    cardInfo.classList.add('card-info')
    cardTitle.classList.add('card-title')
    cardDescription.classList.add('card-description')
    containerCard.appendChild(card)
    cardImage.src = item.imagem
    cardTitle.innerText = item.titulo
    cardDescription.innerText = item.descricao
    card.appendChild(cardImage)
    card.appendChild(cardInfo)
    cardInfo.appendChild(cardTitle)
    cardInfo.appendChild(cardDescription)
  })
}
renderizarCard(personagens)