import DicasModel from "../models/DicasModel.js";
import DatabaseMetodos from "../utils/DatabaseMetodos.js";

class Dicas {
    static rotas(app){
        app.get("/tips", (req,res) => {
            try {
                const response = DatabaseMetodos.randomizar()
                res.status(200).json(response)
            } catch (error) {
                res.status(400).send(error)
            }
        })

        app.post("/create", (req, res) => {
            try {
                const dica = new DicasModel(...Object.values(req.body))
                const response = DatabaseMetodos.inserirDica(dica)
                res.status(201).json(response)
            } catch (error) {
                res.status.send(error)
            }
        })
    }
}

export default Dicas