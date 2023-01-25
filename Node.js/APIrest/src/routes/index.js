import express from "express"

import livros from "../routes/livrosRoutes.js"

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({
            titulo: "Aula de node"
        })
    })

    app.use(
        express.json(),
        livros
    )
}

export default routes


