const display = document.getElementById("display")

let numero = 0

function Mais(){
    numero += 1
    display.textContent = numero
    if (numero > 0){
        display.style.color = 'green'
    }
      else if(numero == 0){
        display.style.color = 'blue'
    }
}
function Menos(){
    numero -= 1
    display.textContent = numero
    if (numero < 0){
        display.style.color = 'red'
    }
    else if(numero == 0){
        display.style.color = 'blue'
    }
}
function Resetar(){
    numero = 0
    display.textContent = numero
    display.style.color = 'blue'
}