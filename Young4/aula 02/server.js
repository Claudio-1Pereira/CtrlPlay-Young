let movies = [
    {
        id: 1,
        title: "O Senhor dos Anéis",
        genre: "Fantasia",
        year: 2001
    },
    {
        id: 2,
        title: "Matrix",
        genre: "Ficção Científica",
        year: 1999
    }
]

movies.push({id: 3, title: "Iron Man", genre: 'Ação', year: 2008})

console.log(movies)

movies.forEach(movie =>{
    console.log(`Título: ${movie.title}\nGênero: ${movie.genre}\nAno: ${movie.year}\n`)
})

let movieToUpdate = movies.find(movie =>  movie.id === 1);
if (movieToUpdate) {
    movieToUpdate.genre = "Aventura"
    console.log(`Filme atualizado: ${movieToUpdate.title}\nGênero: ${movieToUpdate.genre}\n`)
}

let index = movies.findIndex(movie => movie.id === 2)
if (index !== -1){
    movies.splice(index, 1)
    console.log("Filme removido")
}
console.log(movies)

movies.push({id: 4, title: "Interstellar", genre: "Ficção Científica", year: 2014})
movies.forEach(movie => {
    console.log(`Título: ${movie.title}\nAno: ${movie.year}\n`)
})

let alterar = movies.find(movie => movie.id === 4)
if (alterar){
    alterar.id = 2
    console.log(`Filme ${alterar.title}, alterado para o ID: ${alterar.id}`)
}

console.log(movies)

let filme_removido = movies.findIndex(movie => movie.title === "O Senhor dos Anéis")
if(filme_removido !== -1){
    movies.splice(filme_removido, 1)
}else{
    console.log('Filme não encontrado para exclusão')
}

let adicionar_filme = {id: 5, title: 'Batman: O Cavaleiro das Trevas', genre:'Action', year: 2008}
let filme_existente = movies.find(movie => movie.id === adicionar_filme.id)

if(filme_existente){
    console.log('Id Existente, tente outro')
}else{
    movies.push()
}

