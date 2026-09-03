import { useRef, useState } from "react"
import musica1 from './assets/Musica1.mp3'
import musica2 from './assets/Musica2.mp3'
import musica3 from './assets/Musica3.mp3'
import musica4 from './assets/Musica4.mp3'
import musica5 from './assets/Musica5.mp3'
import musica6 from './assets/Musica6.mp3'

const arquivos = import.meta.glob(
  "./assets/*.mp3",
  {
    eager: true,
    query: "?url",
    import: "default"
  }
)


export default function App(){
  const musicas = Object.entries(arquivos).map(([caminho, arquivo]) => {
    const nomeArquivo = caminho.split("/").pop()

    return {
      nome: nomeArquivo.replace(".mp3", ""),
      arquivo: arquivo
    }
  })

  const [numero,setNumero] = useState(0)
  const [value, setValue] = useState(1); 
  const audioRef = useRef(null);
  const [texto, setTexto] = useState("")

  // const musicas = [
  //   musica1,
  //   musica2,
  //   musica3,
  //   musica4,
  //   musica5,
  //   musica6
  // ]

  const atualizarValor = (novoValor) => {
    const inteiro = Math.floor(novoValor);
    const limitado = Math.max(0, Math.min(5, inteiro));
    setNumero(limitado);
  };

  const tocarMusica = () => {
    audioRef.current.play();
  };

  const pausarMusica = () => {
    audioRef.current.pause();
  };

  return(
    <>
      <audio ref={audioRef} controls src={musicas[numero].arquivo}></audio>
      <span>{musicas[numero].nome}</span>
      <button onClick={()=> atualizarValor(numero - 1)}>Back</button>
      <button onClick={tocarMusica}>Play</button>
      <button onClick={pausarMusica}>Pause</button>
      <button onClick={()=> atualizarValor(numero + 1)}>Next</button>
    </>
  )
}