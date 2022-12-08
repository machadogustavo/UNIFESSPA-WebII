//Primeira Opção

// import {soma, multiplica, subtrair} from './operacoesESM.js'

// console.log(soma(4,2));
// console.log(multiplica(4,2));
// console.log(subtrair(4,2));

//Segunda Opção

// import * as operacoes from './operacoesESM.js'

// console.log(operacoes.soma(4,2));

// console.log(operacoes.multiplica(4,2));

// console.log(operacoes.subtrair(4,2));

//Terceira Opção

import soma from './operacoesESM.js'

console.log(soma(4,2));