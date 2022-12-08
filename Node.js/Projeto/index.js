//Importando Biblioteca Nativa FileSystem
import fs, { fchmod, ftruncate } from 'fs'
//Importando Biblioteca 'Chalk'
import chalk from 'chalk';


//Função Erro
function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.bgRed(erro.code, 'não há arquivo no diretório'));
}

// //Código Síncrono
// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//             if (erro) {
//                 trataErro(erro);
//             }
//         console.log(chalk.bgGreen(texto))
//     })
// }

// pegaArquivo('./Arquivos/text.md');



// //Código Assíncrono com then

// function pegaArquivo(caminhoDoArquivo) {

//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto) => console.log(chalk.bgGreen(texto)))
//         .catch(trataErro)

// }

//Código Assíncrono com async/await

async function pegaArquivo(caminhoDoArquivo) {
    
    try {
        const encoding = 'utf-8'
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto));

    }
    catch(erro) {
        trataErro(erro)
    }
    
}





//Rodando Função
pegaArquivo('./Arquivos/text.md');