let img = document.getElementById("img")
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")
let p4 = document.getElementById("p4")
let p5 = document.getElementById("p5")




async function Gerar_img_cats() {
    const CatApi = 'https://api.thecatapi.com/v1/images/search?has_breeds=1'

    const CatRes = await fetch(CatApi)
    const CatData = await CatRes.json()

    console.log(CatData)

    const CatID = CatData[0]
    const CatImg = CatID.url
    
    console.log(CatID.id)

    const CatApiID = `https://api.thecatapi.com/v1/images/${CatID.id}`

    const IDRes = await fetch(CatApiID)
    const IDData = await IDRes.json()

    console.log("IDs e outra informação embaixa")
    console.log(IDData)

    const CatBreed = IDData.breeds
    const CatBreeds = CatBreed[0]

    const CatCountry = CatBreeds.country_code
    const CatDescription = CatBreeds.description
    const CatName = CatBreeds.name
    const CatLife_span = CatBreeds.life_span
    const CatWikipedia_url = CatBreeds.wikipedia_url

    img.src = CatImg
    p1.textContent = CatName
    p2.textContent = CatCountry
    p3.textContent = CatDescription
    p4.textContent = CatLife_span
    p5.textContent = CatWikipedia_url
    
}


