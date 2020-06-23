const express = require("express")
const server = express()

// pegar o banco de dados  - Obs.: O nome da const db poder ser outro como por ex. bancodedados
const db = require("./database/db.js")    // “./” -->  esta na pasta local do meu projeto

// configurar pasta pública
server.use(express.static("public"))

// habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true}))


// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// configurar caminhos da minha aplicação
// página inicial
// req: Requisição
// res: Resposta
server.get("/", (req, res) => {
    // res.send("Olá Mundo!" )
    // res.sendFile(__dirname + "/views/index.html")
    return res.render("index.html")
})



server.get("/create-point", (req, res) => {  
    // res.sendFile(__dirname + "/views/create-point.html")

    // req.query: "Query Strings" da nossa url
    console.log(req.query) 

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    // req.body: O corpo do nosso formulário
    // console.log(req.body)

    // iserir dados no banco de dados 
    // ****************************** simulação de erro INTO por INT
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
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if(err) {
            console.log(err)
            return res.send("Erro no cadastro!") 
        } 

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", { saved: true})
    }

    db.run(query, values, afterInsertData)

    
})


server.get("/search", (req, res) => {

    const search = req.query.search

    if(search == "") {
        // pesquisa vazia
        return res.render("search-results.html", { total: 0})
    }

    // pegar os dados do banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err,rows) {
        if(err) {
            return console.log(err)
        }
        // os dois console.log abaixo são opcionais
        // console.log("Aqui estão seus registros: ")
        // console.log(rows)

        const total = rows.length


        // monstrar a página html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total: total})   // 54:43       
    })


    
})

// ligar o servidor 
server.listen(3000)
