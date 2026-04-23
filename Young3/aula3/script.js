const add = document.getElementById("add")
const Remove = document.getElementById("Remover")
const list = document.getElementById("list")
const input_list = document.getElementById("input-list")
let button

add.addEventListener('click', ()=>{
    let item = document.createElement('li')
    let button = document.createElement("button")
    item.innerText = input_list.value
    item.className = 'm-3'
    button.innerText = 'apagar'
    button.className = "btn btn-primary"


    button.addEventListener('click', ()=>{
        item.remove()
    })

    Remove.addEventListener('click', ()=>{
        list.textContent = ''
    })

    list.appendChild(item)
    item.appendChild(button)

})

