let lista = []
lista[0] = 'series'
lista[1] = 'filmes'



let ul_filme = document.getElementsByTagName("ul")[0]
let ul_series = document.getElementsByTagName("ul")[1]

lista["filmes"] = []
lista["filmes"][0] = 'Procurando Rango'
lista["filmes"][1] = 'O ataque do Claudio'
lista["filmes"][2] = 'Perdidos em Nárnia'
lista["filmes"][3] = 'Filme depois do 4 que não tem nada'

lista['series'] = []
lista['series'][0] = 'strange dead'
lista['series'][1] = 'serie sem nome'
lista['series'][2] = 'serie com nome'

let lista_serie = lista['series']
let lista_filme = lista['filmes']

for(let i = 0; i < lista_serie.length; i++){
    let li = document.createElement('li')
    li.textContent = lista_serie[i]

    ul_series.appendChild(li)
    document.body.appendChild(ul_series) 
}
for(let i = 0; i < lista_filme.length; i++){
    let li = document.createElement('li')
    li.textContent = lista_filme[i]

    ul_filme.appendChild(li)
    document.body.appendChild(ul_filme)
}




/*let parag = document.createElement('p')
parag.innerHTML = "Aqui foi um parágrafo utilizando js"

let lista2 = lista_filme.slice()

console.log(lista2)

lista_filme.pop()

lista_filme.push('Andrew Bad Breaking')

lista_filme.sort()

let removido = lista_filme.shift()

console.log(removido)

let adicione = lista_filme.unshift("A volta dos que não foram")
console.log(adicione)

let pos = lista_filme.indexOf('A volta dos que não foram')
console.log(pos)

let remove = lista_filme.splice(2,1)


for(let i = 0; i < lista_filme.length; i++){
    if(lista_filme[i] != undefined){
        let li = document.createElement('li')
        li.textContent = lista_filme[i]
    
        ul_filme.appendChild(li)
    }
}



document.body.appendChild(ul)*/
