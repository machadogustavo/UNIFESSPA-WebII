
//Questão 2

import fs from 'fs'


let saida = "Arquivos do diretório:"

fs.promises.readdir(process.cwd())

.then(filenames => {
    console.log(saida)
    for (let filename of filenames) {
        console.log(filename)
    }
})

.catch(err => {
    console.log(err)
})

