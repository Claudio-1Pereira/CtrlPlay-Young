const anim = document.getElementById('anim')
const mapa = document.getElementById('main')

let posX = 0
let velocidade = 2

function mover(){
    posX += velocidade

    const litime = mapa.clientWidth - anim.clientWidth

    if(posX >= litime || posX <= 0){
        velocidade *= -1
    }

    anim.style.left = posX + 'px'

    requestAnimationFrame(mover)
}

mover()