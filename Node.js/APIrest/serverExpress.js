import app from './src/app.js'

const port = process.env.PORT || 2000

app.listen(port, () => {

    console.log(`O Servidor está escutando em: http://localhost:${port}`);

})
    