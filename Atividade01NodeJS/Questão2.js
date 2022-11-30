//Importação biblioteca nativa Node
const readline = require("readline")


const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

//Questão 2

function fatorial(num) {
    if (num < 0) 
          return -1;
      
    else if (num == 0) 
        return 1;  
      else {
          return (num * fatorial(num - 1));
      }
  }

teclado.question("Digite um número inteiro: ", (numeroInteiro) =>{
        

    var valorFatorial = parseInt(fatorial(numeroInteiro))
       
    console.log("O valor fatorial do número " + numeroInteiro + " é: "+ valorFatorial);
})
