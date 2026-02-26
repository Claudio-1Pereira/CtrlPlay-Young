
/*document.addEventListener('keydown' , function(evento){
    if (evento.key != null) {
        document.body.innerHTML = evento.key
    }
}
)*/

const img = document.getElementById("mario")
let posicao = 0
let posicaoY = 0
const velocidade = 10

img.style.position = 'asbolute'



document.addEventListener('keydown', function(evento){
    if (evento.key === 'w'){
        posicao += -10
        img.style.transform = `translate(${posicaoY}px,${posicao}px)`

    }
    else if (evento.key === 's'){
        posicao += 10
        img.style.transform = `translate(${posicaoY}px,${posicao}px)`
        
    }
    else if (evento.key === 'd'){
        posicaoY += 10
        img.style.transform = `translate(${posicaoY}px,${posicao}px)`
    }
    else if (evento.key === 'a'){
        posicaoY += -10
        img.style.transform = `translate(${posicaoY}px,${posicao}px)`
    }
}
)
