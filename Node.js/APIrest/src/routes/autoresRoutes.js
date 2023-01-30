import express from "express";
import autoresController from "../controllers/autoresController.js";

const router = express.Router()

// Rotas
router
    .get("/autores", autoresController) // Listar todos os autores
    .get("/autores/:id", autoresController) // Listar autor por id
    .post("/autores", autoresController) // Cadastrar autor com base no schema do BD
    .put("/autores/:id",autoresController) // Atualizar um atributo do autor.
    .delete("/autores/:id", autoresController) //Deletar autor por id

export default routerAutor


