const express = require("express")
const app = express()
const path = require("path")
const PORTA = 3000
//Avisar ao expresse que os nossos arquivos estáticos estão aqui para ele juntar ao html e enviar
//Na pasta public entra CSS, imagem, icones, JS, ...
app.use(
    express.static(path.join(__dirname,"public"))
)
//Rota que o cliente vai acessar e o método que ele vai usar no caso GET
app.get("/", (req,res) => {
    res.redirect(/bufalo)
})
app.get("/bufalo", (req,res) => {
    res.sendFile(path.join(__dirname, "views", "bufalo.html"))
})
app.get("/esquilo", (req,res) => {
    res.sendFile(path.join(__dirname, "views", "esquilo.html"))
})
app.get("/ganso", (req,res) => {
    res.sendFile(path.join(__dirname, "views", "ganso.html"))
})
app.get("/garca", (req,res) => {
    res.sendFile(path.join(__dirname, "views", "garca.html"))
})
app.get("/leao", (req,res) => {
    res.sendFile(path.join(__dirname, "views", "leao.html"))
})