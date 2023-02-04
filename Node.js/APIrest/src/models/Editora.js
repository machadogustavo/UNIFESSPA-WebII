import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema(

    {
        id: {type: String},
        nomeFantasia: {type: String, required: true},
        razaoSocial: {type: String},
        endereco: {type: String},
        telefone: {type: Number}
        
    },
    {
        versionKey: false
    }

)

const editoras = mongoose.model('editora',editoraSchema)

export default editoras

