const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

const PORT = 3000
const hostname = "localhost"

/*------------Configuração do express------------------*/
app.use(express.json())
app.use(express.urlencoded({extended:true}))


/*------------------Arquivos estáticos---------------------*/
app.use(express.static("public"))

/*-------------------Rotas do programa----------------------*/
app.get('/', (req,res)=>{
    res.render("index.html")
})





/* ---------------------------------------------------------*/
app.listen(PORT,hostname, ()=>{
    console.log(`Servidor rodando ${hostname}:${PORT}`)
})