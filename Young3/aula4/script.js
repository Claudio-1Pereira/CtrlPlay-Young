async function getpokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/charizard')
        const data = await response.json()

        console.log(data)
        console.log(data.name)
        console.log(data.sprites.front_default)

        document.getElementById("nome").textContent = `Nome: ${data.name}`
        document.getElementById('imagem').src = data.sprites.front_default
        document.getElementById('peso').textContent = `peso: ${Math.floor(data.weight/10)} kg`
        document.getElementById('id').textContent = `Id: ${data.id}`
        document.getElementById('altura').textContent = `Altura: ${data.height * 10} cm `

    }catch(error){
        console.error("Error ao buscar Pokémon: ", error)
    }
}

getpokemon()