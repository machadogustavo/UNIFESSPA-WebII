// Password bmA6KShRFW86gf9

// Importando Biblioteca Mongoose
// const mongoose = require('mongoose')
// ou
import mongoose from 'mongoose'

// URL de conexão do Mongo DB Atlas
// let urlDB = 'mongodb+srv://admin:bmA6KShRFW86gf9@cluster0.fkajhnv.mongodb.net/Livraria'

// Conectando ao DB Mongo Atlas por meio da biblioteca mongoose
mongoose.connect('mongodb+srv://admin:bmA6KShRFW86gf9@cluster0.fkajhnv.mongodb.net/Livraria')

// Associando conexão ao db em uma variável
let dbConnectMongoAtlas = mongoose.connection

// Exportando módulo de conexão
export default dbConnectMongoAtlas


