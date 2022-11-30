
//Primeira Opção

// const operacoes = require("./operacoesCJS")

// const soma = operacoes.soma(4,2)

// console.log(soma);

// const multiplica = operacoes.multiplica(4,2)

// console.log(multiplica);

//Segunda Opção

const {soma, multiplica, subtrair} = require("./operacoesCJS")

console.log(soma(4,2));
console.log(multiplica(4,2));
console.log(subtrair(4,2));