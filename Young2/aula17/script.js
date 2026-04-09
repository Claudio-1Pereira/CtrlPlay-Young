const display = document.getElementById("display")
const buttons = document.querySelectorAll("Button")

let conta = ""

buttons.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        const valor = btn.dataset.value

        if(valor === "C"){
            conta = ""
            display.textContent = ""
            return
        }

        if (valor === "="){
            conta = eval(conta)
            display.textContent = conta
            return
        }
        conta += valor
        display.textContent = conta
    })
})