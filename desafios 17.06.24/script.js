let tb_products = [
  {
    name: "trufa",
    description: "trufa de chocolate",
    price: 2.99,
    quantity_stock: 30,
    category_id: 1,
  },
  {
    name: "bala 7 belo",
    description: "bala de iogurte",
    price: 0.1,
    quantity_stock: 20,
    category_id: 1,
  },
  {
    name: "bombom",
    description: "bombom sonho de valsa",
    price: 1.5,
    quantity_stock: 30,
    category_id: 1,
  },
  {
    name: "bala de goma",
    description: "bala de goma sortida",
    price: 0.9,
    quantity_stock: 10,
    category_id: 1,
  },
  {
    name: "yakult",
    description: "bebida leite fermentado",
    price: 0.9,
    quantity_stock: 9,
    category_id: 1,
  },
  {
    name: "coxinha",
    description: "bebida leite fermentado",
    price: 0.9,
    quantity_stock: 4,
    category_id: 2,
  },
  {
    name: "salgadinho",
    description: "salgadinho fofura",
    price: 0.99,
    quantity_stock: 3,
    category_id: 2,
  },
  {
    name: "bala 7 belo",
    description: "bala de tutti fruit",
    price: 0.1,
    quantity_stock: 9,
    category_id: 1,
  },
  {
    name: "risole",
    description: "risole de presunto e queijo",
    price: 8.43,
    quantity_stock: 22,
    category_id: 2,
  },
  {
    name: "suspiro",
    description: "suspiro doce",
    price: 0.89,
    quantity_stock: 0,
    category_id: 1,
  },
  {
    name: "pé de moleque",
    description: "pé de moleque doce",
    price: 3.2,
    quantity_stock: 0,
    category_id: 9,
  },
];

let tb_categories = [
  {id: 1, name: 'doce'},
  {id: 2, name: 'salgado'}
]

const selectAll = (table) => {
  console.log(table)
}

selectAll(tb_products); // select * from tb_products
selectAll(tb_categories); // select * from tb_categories