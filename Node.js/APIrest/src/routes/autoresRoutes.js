import express from "express";
import AutorController from "../controllers/autoresController";

const router = express.Router()

// Rotas
router
    .get("/autores", AutorController.listarAutores) // Listar todos os autores
    .get("/autores/:id", AutorControllerlistarLivroId.listarAutorId) // Listar autor por id
    .post("/autores", AutorControllercadastrarLivro.cadastrarAutor) // Cadastrar autor com base no schema do BD
    .put("/autores/:id",AutorControlleratualizarLivro.atualizarAutor) // Atualizar um atributo do autor.
    .delete("/autores/:id", AutorControllerexcluirLivro.excluirAutor) //Deletar autor por id

export default router


