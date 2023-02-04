import express from "express";
import editorasController from "../controllers/editorasController.js";

const router = express.Router()

// Rotas
router
    .get("/editoras", editorasController.listarEditoras) // Listar todos os editoras
    .get("/editoras/:id", editorasController.listarEditoraId) // Listar editora por id
    .post("/editoras", editorasController.cadastrarEditora) // Cadastrar editora com base no schema do BD
    .put("/editoras/:id",editorasController.atualizarEditora) // Atualizar um atributo do editora.
    .delete("/editoras/:id", editorasController.excluirEditora) //Deletar editora por id

export default router


