import { useState } from "react"
import "./App.css"

function App(){
  
  const [contador, setContador] = useState(0)

  return(
    <>

      <h1 id="contador">Contador : {contador}</h1>
      <button id="bt1" onClick={()=> setContador(contador + 1)}>Aumentar</button>
      <button id="bt2" onClick={()=> setContador(contador - 1)}>Diminuir</button>
      <button id="bt3" onClick={()=> setContador(0)}>Resetar</button>
      <button id="bt4" onClick={()=> alert("Claudio alertou")  }>Alertar</button>
    </>

  )
}

export default App