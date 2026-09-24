const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Seja muito bem-vindo ao Node.js.')
    } else if (req.url === '/amigos') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Aqui esta sua lista de amigas!')
    } else if (req.url === '/status') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Status: Ativo!')
    }else if(req.url === '/style.css'){
        fs.readFile('./style.css',(erro, arquivo)=>{
            if(erro){
                res.statusCode = 500
                res.setHeader("Content-Type", 'text/html')
                res.end('Erro ao carregar pagina')
            }
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/css')
            res.end(arquivo)
        })
    }else {
        fs.readFile('./index.html',(erro, arquivo)=>{
            if(erro){
                res.statusCode = 500
                res.setHeader("Content-Type", 'text/html')
                res.end('Erro ao carregar pagina')
            }
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html')
            res.end(arquivo)
        })
    }
})

server.listen(3000, () => { console.log('Servidor rodando na porta 3000') })