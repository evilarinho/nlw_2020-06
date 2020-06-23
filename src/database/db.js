// importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o obejto que irá fazer as operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o objeto de banco de dados, para nossas operações
db .serialize(() => {
/*
    // com comandos SQL eu vou:

    // 1 Criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );   
    `)
    // 2 Inserir dados na tabela
    const query = `
            INSERT INTO places (
                image,
                name,
                address,
                address2,
                state,
                city,
                items                
            ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        // "https:"https://images.unsplash.com/photo-1518792528501-352f829886dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        // "Colectoria"
        "Papersider",
        "Guilherme Gemballa, Jardim América",
        "Santa Catarina",
        "Rio do Sul",
        //"Resíduos Eletrônicos, Lâmpadas"
        "Papéis e Papelão"
    ]

    function afterInsertData(err) {
        if(err) {
            return console.log(er)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    // 38:00
    // passando a função afterInsertData por referência para ser executada depois de rodar tudo
    // se passar afterInsertData(err) estará imediatamente executando a função 
    // rodou o comando abaixo apenas uma vez para inserir dos dados

    db.run(query, values, afterInsertData)
    
// 3 Consultar os dados da tabela
    // db.all(`SELECT * FROM places`, function(err,rows) { 
    // função do estilo call back
   
        
    db.all(`SELECT * FROM places`, function(err,rows) {
        if(err) {
            return console.log(err)
        }

        console.log("Aqui estão seus registros: ")
        console.log(rows)
    })
    

    // 4 Deletar um dado da tabela
    
    db.run(`DELETE FROM places WHERE id = ?`, [5], function(err){
        if(err) {
            return console.log(err)
        }

        console.log("Registro deletado com sucesso !")
    })
*/   
    
}) 

