import express from "express";
import livroController from "../controllers/livrosController.js";

const router = express.Router()

// Rotas
router
    .get("/livros", livroController.listarLivros) // Listar todos os livros
    .get("/livros/:id", livroController.listarLivroId) // Listar livro por id
    .post("/livros", livroController.cadastrarLivro) // Cadastrar livro com base no schema do BD
    .put("/livros/:id",livroController.atualizarLivro) // Atualizar um atributo do livro.
    .delete("/livros/:id", livroController.excluirLivro) //Deletar livro por id

export default router


