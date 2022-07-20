import { Database } from "../infraestrutura/Database.js";

class DatabaseMetodos{

    static randomizar(){
        const random = Math.floor(Math.random() * Database.Dicas.length);
        return Database.Dicas[random]
    }

    static inserirDica(dica){
        Database.Dicas = [...Database.Dicas, dica];
        return Database.Dicas
    }
}

export default DatabaseMetodos