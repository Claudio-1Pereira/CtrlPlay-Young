let nomes = ["Claudio", 'Andrew Lucas', 'Murilo']
const PI = 3.14

console.log(`Olá ${nomes} tudo bem?\nPi é igual a ${PI}`)


function somar(a,b){
    return a+b
}

console.log(somar(2, 10))

nomes.forEach(element => {
    console.log(`Olá ${element}`)
});


for(i=0; i<10 ; i++){
    console.log('Varias linhas')
}

let numero = 10

while(numero >= 0){
    console.log(numero)
    numero -= 1
}

if (PI > 4){
    console.log('Não é PI')
}else if(PI == 3.14) {
    console.log('é PI')
}else{
    console.log('Não é PI')
}
if(2 == 2 || 5 > 7){
    console.log(true)
}
if(2 == 2 && 5 > 7){
    console.log(true)
}else{
    console.log(false)
}

let idade = 1
podeVotar = idade > 18 ? 'Sim, pode votar' : 'Não pode votar'
console.log(podeVotar)

function saudar(){
    alert("A aula esta acabando...")
}

document.getElementById('btn').addEventListener('click', ()=>{saudar()})
