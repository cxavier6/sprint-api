import express from "express";
import Dicas from "./src/controllers/Dicas.js";

const port = 3400
const app = express()

app.listen(port, () => {
    console.log(`Servidor está funcionando em http://localhost:${port}`)
})

app.use(express.json())

Dicas.rotas(app)

