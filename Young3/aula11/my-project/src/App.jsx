import { useEffect, useState } from "react"
import Card from "./Card"

export default function App(){

  const [produtos, setProdutos] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(resposta => resposta.json())
    .then(dados => {setProdutos(dados)});
  }, [])

  return(
    <>
      <div className="min-w-screen min-h-screen flex flex-wrap">
        {produtos.map(produto=>(
            <Card key={produtos.id} produto={produto}/>
        ))}
      </div>
    </>
  )
}