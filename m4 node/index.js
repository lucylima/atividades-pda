// let tb_products = [
//   {
//     name: "trufa",
//     description: "trufa de chocolate",
//     price: 2.99,
//     quantity_stock: 30,
//     category_id: 1,
//   },
//   {
//     name: "bala 7 belo",
//     description: "bala de iogurte",
//     price: 0.1,
//     quantity_stock: 20,
//     category_id: 1,
//   },
//   {
//     name: "bombom",
//     description: "bombom sonho de valsa",
//     price: 1.5,
//     quantity_stock: 30,
//     category_id: 1,
//   },
//   {
//     name: "bala de goma",
//     description: "bala de goma sortida",
//     price: 0.9,
//     quantity_stock: 10,
//     category_id: 1,
//   },
//   {
//     name: "yakult",
//     description: "bebida leite fermentado",
//     price: 0.9,
//     quantity_stock: 9,
//     category_id: 1,
//   },
//   {
//     name: "coxinha",
//     description: "bebida leite fermentado",
//     price: 0.9,
//     quantity_stock: 4,
//     category_id: 2,
//   },
//   {
//     name: "salgadinho",
//     description: "salgadinho fofura",
//     price: 0.99,
//     quantity_stock: 3,
//     category_id: 2,
//   },
//   {
//     name: "bala 7 belo",
//     description: "bala de tutti fruit",
//     price: 0.1,
//     quantity_stock: 9,
//     category_id: 1,
//   },
//   {
//     name: "risole",
//     description: "risole de presunto e queijo",
//     price: 8.43,
//     quantity_stock: 22,
//     category_id: 2,
//   },
//   {
//     name: "suspiro",
//     description: "suspiro doce",
//     price: 0.89,
//     quantity_stock: 0,
//     category_id: 1,
//   },
//   {
//     name: "pé de moleque",
//     description: "pé de moleque doce",
//     price: 3.2,
//     quantity_stock: 0,
//     category_id: 9,
//   },
// ];

// let tb_categories = [
//   {id: 1, name: 'doce'},
//   {id: 2, name: 'salgado'}
// ]

// const selectAll = (table) => {

//  table.forEach(element => {
//   console.log(``)
  
//  });
// }

// selectAll(tb_products); // select * from tb_products
// selectAll(tb_categories); // select * from tb_categories

// var adress = [
//   {street: 'Av. paulista', 'São Paulo', 44, state: 'SP'},
//   {street: 'Av. brigadeiro luiz antonio', 'São Paulo', null, state: 'SP'},
//   {street: 'Rua tremenbé bonifacio', 'São Paulo', 12, state: 'SP'},
//   {street: 'Rua doutor alexandre pinheiros', 'São Paulo', 97, state: 'SP'},
//  {street: 'Av. torres do Brazil', 'São Paulo', null, state: 'SP'}
// ]

// var employee = [
//    {name: 'Joaozinho', 'Joaozinho@gmail.com', 'Joaozinho123', 29, null},
//    {name: 'Laura', 'Laura@gmail.com','Laura123', 25, number: 2},
//    {name: 'José', 'José@gmail.com','José123', 30, number: 3},
//    {name: 'Maria', 'Maria@gmail.com', 'Maria123', null, number: 5},
//    {name: 'Antônio', 'Antônio@gmail.com', 'Antônio123', 18, number: 4},
//    {name: 'Eduarda', 'Eduarda@gmail.com', 'Eduarda123', 32, null},
//    {name: 'Marcos', 'Marcos@gmail.com', 'Marcos123', 23, 3},
//    {name: 'Otávio', 'Otávio@gmail.com', 'Otávio123', null,4},
//    {name: 'Simone', 'Simone@gmail.com', 'Simone123', 37,5},
//    {name: 'Vinicius', 'Vinicius@gmail.com', 'Vinicius123', 34,2},
//    {name: 'Cris', 'Cris@gmail.com', 'Cris123', null,null}
// ]

// var listCategory = [
//   {id: 1, name: "doce"},
//   {id: 2, name: "salgado"},
// ];

// var listProduct = [
//   {id: 1, name: "trufa", price: 2.99, quantity_stok: 30, category_id: 1},
//   {id: 1, name: "bala 7 belo", price: 0.20, quantity_stok: 10, category_id: 1},
//   {id: 1, name: "bombom", price: 3.50, quantity_stok: 20, category_id: 1},
//   {id: 1, name: "salgadinho", price: 3.99, quantity_stok: 40, category_id: 2},
//   {id: 1, name: "risole", price: 4.99, quantity_stok: 39, category_id: 2},
// ];

// // variavel 
// // let i = 0;

// // i++ 
// // i = i + 1
// let id_category;

// for(let i = 0; i < listProduct.length; i++){
//   // buscando id de categoria por nome
//   listCategory.map(batatinha => {
//       if(batatinha.name == "salgado"){
//           id_category = batatinha.id
//       }
//   });
  

//  if(listProduct[i].category_id == id_category && listProduct[i].quantity_stok > 39){
//    console.log(listProduct[i]);
//  } 
// }

// // Objetivo: Mostre no cosnole APENAS OS funcionarios que trabalham na Av. brigadeiro luiz antonio


// // Criar uma funcao que retorne no console os funcionarios que tem um salario ENTRE 3500 e 8000
// // Criar uma funcao que retorne no console os funcionarios que tem idade ACIMA de 35 

// const employees = [
//   {
//     id: 1,
//     name: "Alice",
//     age: 30,
//     salary: 5000,
//     active: true,
//     team: "Engineer",
//   },
//   {
//     id: 2,
//     name: "Bob",
//     age: 25,
//     salary: 3500,
//     active: false,
//     team: "Marketing",
//   },
//   {
//     id: 3,
//     name: "Carlos",
//     age: 28,
//     salary: 4800,
//     active: true,
//     team: "Sales",
//   },
//   {
//     id: 4,
//     name: "Diana",
//     age: 35,
//     salary: 5200,
//     active: true,
//     team: "Human Resources",
//   },
//   {
//     id: 5,
//     name: "Edward",
//     age: 40,
//     salary: 6000,
//     active: false,
//     team: "Finance",
//   },
// ];
// // CODIGOS DE EXEMPLO
// //var numbers = [1,2,3,4,5,6,7,8,9,10];
// // // Metodo FIND retornar o primeiro valor que ele encontrar
// // // corresponda a condicao
// function getNumber(){
// return numbers.find(number => number >= 7);
// }
// console.log(getNumber());
// // 8

// // var numbers = [1,2,3,4,5,6,7,8,9,10];
// // // Metodo filter cria um novo array apenas com os valores que passaram 
// // na condicao
// function getNumber2(){
// return numbers.filter(number => number > 7);
// }
// console.log(getNumber2())
// // // [8,9,10]

// //var numbers = [1,2,3,4,5,6,7,8,9,10];
// // Metodo forEach executa uma acao para todos os elementos
// // obs: forEach NAO RETORNA NADA
// function incrementNumber(){
//   employee.forEach(funcionario => console.log(funcionario.email.toLocaleUpperCase()));
//   numbers.forEach(number => console.log(number * 2));
// }
// incrementNumber();
// // console.log(numbers[0] + 1);
// // console.log(numbers[1] + 1);
// // console.log(numbers[2] + 1);
// // console.log(numbers[3] + 1);

// //var numbers = [1,2,3,4,5,6,7,8,9,10];

// // Metodo map cria um novo array a partir das condicoes instruidas
// function incrementNumber2(){
// return numbers.map(number => number * 2);
// }
// console.log(incrementNumber2());
// [2,4,6,8,12,14,16,18,20]

// var numbers = [1,2,3,4,5,6,7,8,9,10];
// // Metodo reduce executa um calculo para todos os elementos e retorna um unico resultado
// function sumNumbers(){
// return numbers.reduce((total, number)=> total = total + number);
// //               0       1       total   =   0   +  1
// //               1       2       total   =   1   +  2
// //               3       3       total  =   3   +  3
// //               6       4       total  =   6   +  4
// // 10
// }

// console.log(sumNumbers());


// // Crie uma funcao que mostre no console apenas os funcionarios onde a primeira letra do nome é "M".
// // Crie uma funcao que mostre no console a média de idade dos funcionarios

// var employee = [
//   { id: 1, name: 'Joaozinho', email: 'Joaozinho@gmail.com', username: 'Joaozinho123', age: 50, adress_id: 1 },
//   {id: 2, name: 'Laura', email: 'Laura@gmail.com', username: 'Laura123', age: 25, adress_id: 2 },
//   {id: 3, name: 'José', email: 'José@gmail.com', username: 'José123', age: 30, adress_id: 3 },
//   {id: 4, name: 'Maria', email: 'Maria@gmail.com',username: 'Maria123', adress_id: 5 },
//   { id: 5, name: 'Antônio', email: 'Antônio@gmail.com', username: 'Antônio123', age: 18, adress_id: 2 },
//   { id: 6,name: 'Eduarda', email: 'Eduarda@gmail.com', username: 'Eduarda123', age: 32 , adress_id: 6},
//   { id: 7,name: 'Marcos', email: 'Marcos@gmail.com', username: 'Marcos123',age: 23, adress_id: 7},
//   { id: 8,name: 'Otávio', email: 'Otávio@gmail.com', username: 'Otávio123',age: 16, adress_id: 11},
//   {id: 9, name: 'Simone', email: 'Simone@gmail.com', username: 'Simone123', age: 37, adress_id: 2},
//   {id: 10, name: 'Vinicius', email: 'Vinicius@gmail.com', username: 'Vinicius123', age: 34, adress_id: 4},
//   { id: 11,name: 'Cris', email: 'Cris@gmail.com', username: 'Cris123' ,age: 46, adress_id: 5}
// ]
// Metodos e quando utiliza-los
// // Quando utilizar: Recuperar uma informacao especifica para utilizar em outro lugar
// // // Metodo FIND retornar o primeiro valor que ele encontrar
// // // corresponda a condicao

// // Quando utilizar: quando eu quero mostrar varios itens que fazem parte de uma condicao
// // // Metodo FILTER cria um novo array apenas com os valores que passaram 
// // na condicao

// // Quando utilizar: quando eu quero executar um calculo para todos os elementos SOMENTE ISSO
// // Metodo FOREACH executa uma acao para todos os elementos
// // obs: forEach NAO RETORNA NADA

// // Quando utilizar: Criar uma nova lista com valores diferentes da lista original
// // Metodo MAP cria um novo array a partir das condicoes instruidas

// * pergunte a idade do usuário e retorne se ele pode dirigir ou não
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Digite sua idade \n> `,  age => {
 age >= 18 ? 
  console.log("voce pode dirigir ebaa") :
  console.log("voce nao pode dirigir :(");
  rl.close();
});

