import fs from 'fs'

const dir = 'Diretório Exemplo' // esse é o caminho RELATIVO(ou seja, dentro do repositório que esse arquivo está inserido) do repositório que você quer saber oque tem dentro
const saida = `Oque tem dentro do ${dir}: \n--------------------------------------\n> ${dir}`
var b = ''

function verificaSubDir(filename ,dirname) {
    fs.stat(`./${dir}/${filename}/${dirname}`, (err, stats) => {
        if (err) {
            console.log(err)
        } else {
            if (stats.isFile() === true ) {
                // nada
            } else {
                var a = filename
                if (a != b) {
                    b = a
                    console.log('    > /' + filename)   
                }
                console.log('        >/' + dirname)
            }
        }
    })
}

function verificaDir(filename) {
    fs.stat(`./${dir}/${filename}`, (err, stats) => {
        if (err) {
            console.log(err)
        } else {
            if (stats.isFile() === true) {
                // nada
            } else {
                fs.promises.readdir(process.cwd() + `//${dir}/${filename}`)
                .then(dirnames => {
                    for (let dirname of dirnames) {
                        verificaSubDir(filename, dirname)
                    }
                })
            }
        }
    })
}

function diretorio() {
    fs.promises.readdir(process.cwd() + `//${dir}`)
    .then(filenames => {
        console.log(saida)
        for (let filename of filenames) {
            verificaDir(filename)
        }
    }) 
    
}

diretorio()
