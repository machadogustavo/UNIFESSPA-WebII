import app from './src/appMongoAtlas'

const http = require('http')

const port = 3000

const rotas = {
    '/': 'Aula de Rotas',
    '/livros':'Entrei na pagina de livros',
    '/autores': 'Listagem de Autores'
}

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type':'text/plain'})

    res.end(rotas[req.url])

})




server.listen(port, () => {

    console.log(`O Servidor está escutando em: http://localhost:${port}`);

})
