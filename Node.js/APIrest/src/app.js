import express from 'express'

const app = express()

const livros = [

    {

    id: 1, "titulo": "A volta dos que não foram",
    id: 2, "titulo": "Pequeno Príncipe",
    id: 3, "titulo": "Como perder uma copa" 

    }

]

app.get('/',(req,res) => {

    res.status(200).send('Aula de Rotas')

})

app.get('/Livros',(req,res) => {

    res.status(200).json(livros)

})

export default app