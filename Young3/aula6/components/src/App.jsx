import Greetings from "./greetings"
import Goodbye from "./Goodbye"
import Goodevening from "./Goodevening"
import Goodmorning from "./Goodmorning"
import Goodaftermoon from "./Goodaftermoon"
import { useState } from "react"


function App(){
  
  const [componente, setComponente] = useState('greeatings')

  let renderiza

  if(componente === 'greeatings'){
    renderiza = <Greetings/>
  }else if(componente === 'goodbye'){
    renderiza = <Goodbye/>
  }else if(componente === 'goodmorning'){
    renderiza = <Goodmorning/>
  }else if(componente === 'goodevening'){
    renderiza = <Goodevening/>
  }else{
    renderiza = <Goodaftermoon/>
  }

  
  function horario(){
    const data = new Date()
    let horas = data.getHours
    if (horas >= 18 || horas <= 5){
      renderiza = <Goodevening/>
    }else if(horas >= 12){
      renderiza = <Goodaftermoon/>
    }else{
      renderiza = <Goodmorning/>
    }
  }

  
  

  

  return(
    <>
    {horario()}
    {renderiza}
    <div id="div1">
      <button onClick={()=> setComponente('greeatings')}>Saudações</button>
      <button onClick={()=> setComponente('goodbye')}>Despedida</button>
      <button onClick={()=> setComponente('goodmorning')}>Bom dia</button>
      <button onClick={()=> setComponente('goodevening')}>Boa noite</button>

    </div>
    </>
  )
}

export default App