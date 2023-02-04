import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(

    {
        id: {type: String},
        livro: {type: String},
        autor: {type: mongoose.Schema.Types.ObjectId,ref: 'autor', required: true},
        editora: {type: mongoose.Schema.Types.ObjectId,ref: 'editora', required: true},
        numeroPaginas: {type: Number}
        
    },
    {
        versionKey: false
    }

)

const livros = mongoose.model('livros',livroSchema)

export default livros

