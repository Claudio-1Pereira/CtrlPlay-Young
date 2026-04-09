const key = "e15b3ec752aa4b1b843d5ec7cbdd3ec7"

const city = "Jundiaí"

let input_city = document.getElementById("inp1")

let Mostra = document.getElementById("Mostra")
let Mostra1 = document.getElementById("Mostra1")
let Mostra0 = document.getElementById("Mostra0")

const limit = 1

async function Weather(city) {
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${key}`

    const geoRes = await fetch(geoUrl)
    const geoData = await geoRes.json()

    const { lat, lon} = geoData[0]

    const climaUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=pt_br`

    const climaRes = await fetch(climaUrl)
    const climaData = await climaRes.json()

    //const { main } = climaData

    console.log(climaData)

    const temperatura = climaData.main.temp
    const clima = climaData.weather[0]
    const clima_atual = clima.description

    console.log(clima_atual)
    console.log(temperatura)


    Mostra0.textContent = city 
    Mostra.textContent = `${Math.round(temperatura)}°C`
    Mostra1.textContent = clima_atual
}

function ativa() {
    
    let valor = input_city.value
    Weather(valor)
}


