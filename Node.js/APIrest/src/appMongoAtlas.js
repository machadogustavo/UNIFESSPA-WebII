// Importando Biblioteca Servidor Web Express
import express from 'express'
// Importando módulo de conexão
import dbConnectMongoAtlas from "./config/dbConnect.js"
// Importando Schema Livro
import routes from './routes/index.js'

dbConnectMongoAtlas.on("error",console.log.bind(console,"Erro de conexão"))

dbConnectMongoAtlas.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
})

const app = express();
app.use(express.json())

routes(app)



export default app