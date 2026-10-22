filmes = [
    {
        id:1,
        title: "Homen de ferro",
        ano: 2003
    },
    {
        id:2,
        title: "Homen aranha",
        ano: 2026
    }
]

const express = require("express")
const app = express()
app.use(express.json())

app.get("/read", (req, res)=>{
    res.status(200).json(filmes)
})

app.listen(3000, ()=> console.log("servidor iniciado na porta 3000"))
