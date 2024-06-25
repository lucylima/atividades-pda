const $titulo = document.getElementsByClassName('titulo')[0]

class Animal{
  #id
  constructor(nome, idade, raca, id){
    this.nome = nome
    this.idade = idade
    this.raca = raca
    this.#id = id
  }
  get id(){
    return `o nome do bichin é ${this.nome}`
  }

  set nome(valor){ 
    if(valor == 'amadeu'){
      console.log('vc nao pode nomear ele amadeu')
      console.log('ponha outro nome')
    }else{
      console.log('oba nao é amadeu')
    }
  }
}
 