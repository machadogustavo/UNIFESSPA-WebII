
//Primeira Opção

// export  function soma(numOne, numTwo){
//     return numOne + numTwo
// }

// export  function multiplica(numOne, numTwo){
//     return numOne * numTwo
// }

// export  function subtrair(numOne, numTwo){
//     return numOne - numTwo
// }

//Segunda Opção

// function soma (numOne, numTwo){
//     return numOne + numTwo
// }

// function multiplica(numOne, numTwo){
//     return numOne * numTwo
// }

// function subtrair(numOne, numTwo){
//     return numOne - numTwo
// }

// export {soma, multiplica, subtrair}



// //Terceira Opção

// function soma (numOne, numTwo){
//     return numOne + numTwo
// }


const readline = require("readline")

const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

teclado.question("Digite uma valor: ", (valor1) => {
    teclado.question("Digite o segundo valor: ", (valor2) =>{
        var soma = parseInt(valor1) + parseInt(valor2)
        console.log("A soma é "+ soma);
    })
})