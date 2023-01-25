import express from 'express'

const app = express()

app.use(express.json())

// const livros = [

//     {id: 1, "titulo": "A volta dos que não foram"},
//     {id: 2, "titulo": "Pequeno Príncipe"},
//     { id: 3, "titulo": "Como perder uma copa"}

// ]

app.get('/',(req,res) => {

    res.status(200).send('Aula de Rotas')

})

//CRUD

//GET NO OBJETO
app.get('/Livros',(req,res) => {

    res.status(200).json(livros)

})

//GET EM UM INDEX //READ
app.get('/Livros/:id',(req,res) => {

    let index = buscaLivro(req.params.id)
    res.json(livros[index])

})

//ENVIAR NOVO ARQUIVO JSON //CREATE
app.post('/Livros',(req,res) => {

    livros.push(req.body)
    res.status(201).send('O livro foi cadastrado com sucesso!')

})

//ALTERAR TITULO COM BASE NO INDEX //UPDATE
app.put('/Livros/:id',(req,res) => {

    let index = buscaLivro(req.params.id)
    
    livros[index].titulo = req.body.titulo

    res.json(livros)

})

function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id)
}

//DELETAR ARQUIVO JSON //DELETE
app.delete('/Livros/:id',(req,res) => {

    let {id} = req.params ///PEGANDO ID DA REQUISICAO
    let index = buscaLivro(id) //VERIFICANDO E VINCULANDO ID A VARIAVEL
    
    livros.splice(index,1)

    res.status(201).send(`O livro ${livros[index].titulo} foi deletado com sucesso!`)

})

export default app






