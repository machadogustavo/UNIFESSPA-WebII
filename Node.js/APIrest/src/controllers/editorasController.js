import editoras from "../models/Editora.js";

class editorasController {

    // CRUD

    //CREATE - CRIAR EDITORA
    static cadastrarEditora = (req,res) => {
        let editora = new editoras(req.body)
        editora.save((error) => {
            if(error){
                res.status(500).send({message:`${error.message} - Falha ao cadastrar a editora :(`})
            }

            else {
                res.status(201).send(editora.toJSON())
            }
        })
    }

    // READ - LER TODOS AS EDITORAS
    static listarEditoras = (req,res) => {
        editoras.find((error, editoras) => 
        {
            res.status(200).json(editoras)
        })
    }

    // READ² - BUSCANDO POR ID
    static listarEditoraId = (req,res) => {
        const id = req.params.id
        editoras.findById(id,(error, editoras) => {

            if(error) {
                res.status(400).send({message:`${erro.message} - Id da editora não foi localizado :(`})
            }

            else {
                res.status(200).send(editoras)
            }
        })
    }

    // UPDATE - ATUALIZAR EDITORA
    static atualizarEditora = (req,res) => {
        let id = req.params.id
        editoras.findByIdAndUpdate(id, {$set: req.body},(error) => {
            
            if(error){
                res.status(500).send({message:"Erro ao atualizar editora :("})
            }

            else {
                res.status(200).send({message:"Editora atualizado com sucesso!"})
              
            }
        })
    }
    // DELETE - DELETAR EDITORA POR ID
    static excluirEditora = (req,res) => {
        const id = req.params.id
        editoras.findByIdAndDelete(id,(error) => {
            
            if(!error){
                res.status(200).send({message:`A editora com o id: ${id} foi removida com sucesso!`})
            }

            else {
                res.status(500).send({message:"Erro ao deletar editora :("})
            }
        })
    }

}

export default editorasController



