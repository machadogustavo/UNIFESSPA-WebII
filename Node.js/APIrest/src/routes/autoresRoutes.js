import express from "express";
import autoresController from "../controllers/autoresController.js";

const router = express.Router()

// Rotas
router
    .get("/autores", autoresController.listarAutores) // Listar todos os autores
    .get("/autores/:id", autoresController.listarAutorId) // Listar autor por id
    .post("/autores", autoresController.cadastrarAutor) // Cadastrar autor com base no schema do BD
    .put("/autores/:id",autoresController.atualizarAutor) // Atualizar um atributo do autor.
    .delete("/autores/:id", autoresController.excluirAutor) //Deletar autor por id

export default router


