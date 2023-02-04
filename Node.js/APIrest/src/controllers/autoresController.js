import autores from "../models/Autor.js";

class autoresController {

    // CRUD

    //CREATE - CRIAR AUTOR
    static cadastrarAutor = (req,res) => {
        let autor = new autores(req.body)
        autor.save((error) => {
            if(error){
                res.status(500).send({message:`${error.message} - Falha ao cadastrar o autor :(`})
            }

            else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    // READ - LER TODOS OS AUTORES
    static listarAutores = (req,res) => {
        autores.find((error, autores) => 
        {
            res.status(200).json(autores)
        })
    }

    // READ² - BUSCANDO POR ID
    static listarAutorId = (req,res) => {
        const id = req.params.id
        autores.findById(id,(error, autores) => {

            if(error) {
                res.status(400).send({message:`${erro.message} - Id do autor não foi localizado :(`})
            }

            else {
                res.status(200).send(autores)
            }
        })
    }


    // UPDATE - ATUALIZAR AUTORES
    static atualizarAutor = (req,res) => {
        let id = req.params.id
        autores.findByIdAndUpdate(id, {$set: req.body},(error) => {
            
            if(error){
                res.status(500).send({message:"Erro ao atualizar autor :("})
            }

            else {
                res.status(200).send({message:"Autor atualizado com sucesso!"})
              
            }
        })
    }

    // DELETE - DELETAR LIVRO POR ID
    static excluirAutor = (req,res) => {
        const id = req.params.id
        autores.findByIdAndDelete(id,(error) => {
            
            if(!error){
                res.status(200).send({message:`O autor com o id: ${id} foi removido com sucesso!`})
            }

            else {
                res.status(500).send({message:"Erro ao deletar autor :("})
            }
        })
    }

}

export default autoresController