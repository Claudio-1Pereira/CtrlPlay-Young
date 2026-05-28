import { useState } from 'react'
import './App.css'

export default function App(){

  const [valor, setValor] = useState("")

  function adicionar(numero){
    setValor(valor + numero)
  }

  function limpar(){
    setValor("")
  }

  function calcula(){
    try{
      setValor(eval(valor).toString())
    }catch{
      setValor("Erro")
    }
  }

  function apagar(){
    setValor(valor.slice(0, -1))
  }

  return(
    <>
    <main>
      <h1>Calculadora</h1>
      <input type="text" value={valor}/>
      <div>
        <button onClick={()=>adicionar('7')}>7</button>
        <button onClick={()=>adicionar('8')}>8</button>
        <button onClick={()=>adicionar('9')}>9</button>
        <button onClick={()=>adicionar('+')}>+</button>
      </div>
      <div>
        <button onClick={()=>adicionar('4')}>4</button>
        <button onClick={()=>adicionar('5')}>5</button>
        <button onClick={()=>adicionar('6')}>6</button>
        <button onClick={()=>adicionar('-')}>-</button>
      </div>
      <div>
        <button onClick={()=>adicionar('1')}>1</button>
        <button onClick={()=>adicionar('2')}>2</button>
        <button onClick={()=>adicionar('3')}>3</button>
        <button onClick={()=>adicionar('*')}>x</button>
      </div>
      <div>
        <button onClick={()=>adicionar('.')}>.</button>
        <button onClick={()=>adicionar('0')}>0</button>
        <button onClick={calcula}>=</button>
        <button onClick={()=>adicionar('/')}>/</button>
      </div>
      <div>
      <button onClick={limpar}>C</button>
      <button onClick={apagar}>Del</button>
      </div>
    </main>
    </>
  )
}