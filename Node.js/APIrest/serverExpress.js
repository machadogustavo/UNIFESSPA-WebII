import app from '../APIrest/src/appMongoAtlas.js'

const port = process.env.PORT || 2500

app.listen(port, () => {

    console.log(`O Servidor está escutando em: http://localhost:${port}`);

})
    