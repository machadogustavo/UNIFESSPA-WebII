import livros from "../models/Livro.js";

class livroController {

    // CRUD

    //CREATE
    static cadastrarLivro = (req,res) => {
        let livro = new livros(req.body)
        livro.save((error) => {
            if(error){
                res.status(500).send({message:`${error.message} - Falha ao cadastrar o livro :(`})
            }

            else {
                res.status(201).send(livro.toJSON())
            }
        })
    }

    // READ
    static listarLivros = (req,res) => {
        livros.find((error, livros) => 
        {
            res.status(200).json(livros)
        })
    }



}

export default livroController