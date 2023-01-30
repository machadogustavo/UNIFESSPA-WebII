import livros from "../models/Livro.js";

class livroController {

    // CRUD

    //CREATE - CRIAR LIVROS
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

    // READ - LER TODOS OS LIVROS
    static listarLivros = (req,res) => {
        livros.find((error, livros) => 
        {
            res.status(200).json(livros)
        })
    }

    // READ² - BUSCANDO POR ID
    static listarLivroId = (req,res) => {
        const id = req.params.id
        livros.findById(id,(error, livros) => {

            if(error) {
                res.status(400).send({message:`${erro.message} - Id do livro não foi localizado :(`})
            }

            else {
                res.status(200).send(livros)
            }
        })
    }


    // UPDATE - ATUALIZAR LIVROS
    static atualizarLivro = (req,res) => {
        const id = req.params.id
        livros.findByIdAndUpdate(id, {$set: req.body},(error) => {
            
            if(!error){
                res.status(200).send({message:"Livro atualizado com sucesso!"})
            }

            else {
                res.status(500).send({message:"Erro ao atualizar livro :("})
            }
        })
    }

    // DELETE - DELETAR LIVRO POR ID
    static excluirLivro = (req,res) => {
        const id = req.params.id
        livros.findByIdAndDelete(id,(error) => {
            
            if(!error){
                res.status(200).send({message:`O livro com o id: ${id} foi removido com sucesso!`})
            }

            else {
                res.status(500).send({message:"Erro ao deletar livro :("})
            }
        })
    }

}

export default livroController