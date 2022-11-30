const prompt = require('prompt-sync')()

var n = 0, vetor = [], u = 0, nt = 0, menor = 10**7, maior = 0

var u = prompt('Informe quantos números você deseja inserir no seu array: ')

for (let i = 0; i < u; i++) {
    var x = prompt('Informe o valor que voc6e quer inserir no seu array: ')
    vetor.push(x)
}

for (let i = 0; i < vetor.length; i++) {
    nt += parseFloat(vetor[i])
}

for (let i = 0; i < vetor.length; i++) {
    x = parseFloat(vetor[i])
    if (x < menor) {
        menor = x
    }
}

for (let i = 0; i < vetor.length; i++) {
    x = parseFloat(vetor[i])
    if (x > maior) {
        maior = x
    }
}

console.log('A média de todos os valores informados é de: ' + (nt / u).toFixed(2))
console.log('o menor número informado é: ' + menor)
console.log('o maior número informado é: ' + maior)