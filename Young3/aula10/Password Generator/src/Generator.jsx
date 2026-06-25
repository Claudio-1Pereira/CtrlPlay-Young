import { useState } from "react"

export default function Generator(){

    let letras = "QWERTYUIOPASDFGHJKLZXCVBNM"
    let numeros = "1234567890"
    let simbo = "!@#$%&"

    const [result, setResult] = useState("")
    const [number, setNumber] = useState(0)
    const [numbers, setNumbers] = useState(false)
    const [words, setWords] = useState(false)
    const [simbolos, setSimblos] = useState(false)




    function Gerar(){  
        if(numbers ==  true && words == true && simbolos == true){
            console.log("Chegou aqui")
            const tamanho = Math.floor(Math.random() * number) + 1;

            let lista = letras + numeros + simbo
            let resultado = ''
            
            for(let i=0; i<tamanho; i++){
                let aleatorio = Math.floor(Math.random() * lista.length)
                resultado += lista.charAt(aleatorio)
            }

            setResult(resultado)

        }
        else if(numbers ==  true && words == true && simbolos == false){

        }
        else if(numbers ==  true && words == false && simbolos == true){

        }
        else if(numbers ==  false && words == true && simbolos == true){

        }
        else if(numbers ==  true && words == false && simbolos == true){

        }
        else if(numbers ==  false && words == true && simbolos == true){

        }
        else if(numbers ==  true && words == true && simbolos == false){

        }
        else if(numbers ==  true && words == false && simbolos == false){

        }
        else if(numbers ==  false && words == true && simbolos == false){

        }
        else if(numbers ==  false && words == false && simbolos == true){

        }
        else{
            console.log("n esta recebendo nada")
        }
        
    }



    return(
        <>  
            <h1>{result}</h1>
            <div>
                <button onClick={()=>{if(number == 0){number}else{setNumber(number => number-1)}}}>-</button>
                <span>{number}</span>
                <button onClick={() => setNumber(number => number+1)}>+</button>
            </div>
            <button onClick={()=> setNumbers(numbers => !numbers)}>Ativa numeros</button>
            <button onClick={()=> setWords(words => !words)}>Ativa letras</button>
            <button onClick={()=> setSimblos(simbolos => !simbolos)}>Ativa simbolos</button>
            <button onClick={Gerar()}>Gerar</button>
        </>
    )
}