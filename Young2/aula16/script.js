let a = 10
let b = '20'
let c = false
let d = null
let e = undefined
let f = 10.5

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
console.log(typeof(e))
console.log(typeof(f))

let soma = a + Number(b)
console.log(soma)


/*----------------------------Inicio de Código --------------------------*/

let randomA = Math.floor(Math.random() * 101)


function randomTest(){
    let inputData = Number(document.getElementsByTagName("input")[0].value)
    let result = document.querySelector('#result')

    if (inputData == randomA){
        result.textContent = "Você acertou"
        document.body.appendChild(result)
    }else if(inputData <= randomA) {
        result.textContent = "Número Maior"
        document.body.appendChild(result)
    }else{
        result.textContent = "Número Menor"
        document.body.appendChild(result)
    }
}


/*-------------------- Exercício de JS ------------------*/




function ImparOuPar(){
    let inputData = Number(document.getElementsByTagName("input")[0].value)
    let Resto = document.querySelector('#Impar')
    if (inputData % 2 == 0){
        Resto.textContent = "Par"
        document.body.appendChild(Resto)
    }else{
        Resto.textContent = "Impar"
        document.body.appendChild(Resto)
    }

}