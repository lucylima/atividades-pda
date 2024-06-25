const titulo = document.querySelector('h1')
const sub = document.querySelector('h2')
const data = new Date()

titulo.innerText = `${data.getDate()}/0${data.getMonth() + 1}/${data.getFullYear()}`

const novaData = () => {
  let hoje = moment(data).format('DD/MM/YYYY')
  return sub.innerText = hoje
}

novaData()
