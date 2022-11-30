//Importação biblioteca nativa Node
const readline = require("readline")


const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

//Questão 1


teclado.question("Digite a base: ", (valor1) => {
    teclado.question("Digite a altura: ", (valor2) =>{
        
        var area = parseInt(valor1) * parseInt(valor2)
        
        if(valor1 !== valor2) {
            console.log("A figura é um retângulo!");
        }

        else if(valor1 === valor2){
            console.log("A figura é um quadrado!");
        }
        console.log("A área da figura é: "+ area);
    })
})


