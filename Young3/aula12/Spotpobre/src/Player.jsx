import { useState } from "react"
import images from './assets/images.jpg'
import { useRef } from "react"

const arquivos = import.meta.glob(
    "./assets/*.mp3",
    {
        eager: true,
        query: "?url",
        import: "default"
    }
)

export default function Player() {

    const musicas = Object.entries(arquivos).map(([caminho, arquivo]) => {
        const nomeArquivo = caminho.split("/").pop()

        return {
            nome: nomeArquivo.replace(".mp3", ""),
            arquivo: arquivo
        }
    })

    const [progress, setProgress] = useState(35)
    const [Volume, setVolume] = useState(35)
    const [numero, setNumero] = useState(0)
    const [value1, setValue] = useState(100)
    const audioRef = useRef(null)
    const [texto, setTexto] = useState("")

    let ativo = false

    const atualizarValor = (novoValor) => {
        const inteiro = Math.floor(novoValor);
        const limitado = Math.max(0, Math.min(5, inteiro));
        setNumero(limitado);
    };

    const tocarMusica = () => {
        if (ativo == true){
            ativo = false
            audioRef.current.pause();
        }else{
            audioRef.current.play()
            ativo = true
        }
    };

    const pausarMusica = () => {
        audioRef.current.pause();
    };

    function MudaVolume(e)  {
        const valor = Number(e.target.value)


        setValue(valor)

        if (!audioRef.current) return

        audioRef.current.volume = valor / 100
    }


    return (
        <>
            <audio ref={audioRef} src={musicas[numero].arquivo}></audio>
            <div className="flex justify-around h-18">
                <div className="flex items-center gap-2.5">
                    <img src={images} alt="Froid Album" className="max-h-[90%]" />
                    <span>{musicas[numero].nome}</span>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row gap-1">
                        <button className="btn bg-transparent border-none"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 640 640">
                            <path fill="currentColor" d="M467.8 98.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9S448 268.9 448 256v-32h-32c-10.1 0-19.6 4.7-25.6 12.8L358 280l-40-53.3l21.2-28.3c18.1-24.2 46.6-38.4 76.8-38.4h32v-32c0-12.9 7.8-24.6 19.8-29.6M218 360l40 53.3l-21.2 28.3C218.7 465.8 190.2 480 160 480H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h64c10.1 0 19.6-4.7 25.6-12.8zm284.6 174.6c-9.2 9.2-22.9 11.9-34.9 6.9S448 524.9 448 512v-32h-32c-30.2 0-58.7-14.2-76.8-38.4L185.6 236.8c-6-8.1-15.5-12.8-25.6-12.8H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h64c30.2 0 58.7 14.2 76.8 38.4l153.6 204.8c6 8.1 15.5 12.8 25.6 12.8h32v-32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"></path>
                        </svg></button>
                        <button onClick={()=> atualizarValor(numero - 1)} className="btn bg-transparent border-none"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M4.5 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m12.907 1.464c1.146-.917 2.843-.1 2.843 1.367v13.838c0 1.468-1.697 2.284-2.843 1.367l-8.65-6.92a1.75 1.75 0 0 1 0-2.732z"></path>
                        </svg></button>
                        <button onClick={tocarMusica} className="btn rounded-[50%] bg-white"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="Black" d="m6.192 3.67l13.568 7.633a.8.8 0 0 1 0 1.394L6.192 20.33A.8.8 0 0 1 5 19.632V4.368a.8.8 0 0 1 1.192-.697"></path>
                        </svg></button>
                        <button onClick={()=> atualizarValor(numero + 1)} className="btn bg-transparent border-none"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M20.095 21a.75.75 0 0 1-.75-.75V3.75a.75.75 0 0 1 1.5 0v16.5a.74.74 0 0 1-.75.75m-3.4-9.589a2.25 2.25 0 0 1-.85 1.82l-9.11 7.09c-.326.247-.713.4-1.12.44h-.23a2.14 2.14 0 0 1-1-.22a2.2 2.2 0 0 1-.9-.81a2.17 2.17 0 0 1-.33-1.16V5.421a2.2 2.2 0 0 1 .31-1.12a2.25 2.25 0 0 1 .85-.8a2.18 2.18 0 0 1 2.24.1l9.12 6.08c.29.191.53.448.7.75a2.3 2.3 0 0 1 .32.98"></path>
                        </svg></button>
                        <button className="btn bg-transparent border-none"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="m6.85 19l.85.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L3.7 18.7q-.15-.15-.213-.325T3.426 18t.063-.375t.212-.325l2.575-2.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7l-.85.85H17v-3q0-.425.288-.712T18 13t.713.288T19 14v3q0 .825-.587 1.413T17 19zm10.3-12H7v3q0 .425-.288.713T6 11t-.712-.288T5 10V7q0-.825.588-1.412T7 5h10.15l-.85-.85q-.3-.3-.288-.7t.288-.7q.3-.3.712-.312t.713.287L20.3 5.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-2.575 2.575q-.3.3-.712.288T16.3 9.25q-.275-.3-.288-.7t.288-.7z"></path>
                        </svg></button>
                    </div>
                    <input type="range" min='0' max='100' value={progress} onChange={(e) => setProgress(e.target.value)} className="w-full accent-white h-1 mt-3" />
                </div>
                <div className="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <g fill="currentColor" fillRule="evenodd" strokeWidth={1.5} clipRule="evenodd">
                            <path d="M16.97 6.97a.75.75 0 0 1 1.06 0l-.53.53l.53-.53h.001l.001.002l.003.002l.007.007l.02.02l.062.069c.05.057.12.138.201.241A6.87 6.87 0 0 1 19.75 11.5a6.87 6.87 0 0 1-1.425 4.189a5 5 0 0 1-.264.31l-.02.02l-.006.007l-.003.002v.001h-.001l-.51-.508l.51.51a.75.75 0 1 1-1.061-1.061l.53.53l-.53-.53h-.001v.001l-.002.001l.005-.005l.033-.036q.048-.052.139-.167a5.37 5.37 0 0 0 .448-5.843a5 5 0 0 0-.448-.685a3 3 0 0 0-.172-.203l-.005-.005a.75.75 0 0 1 .003-1.058"></path>
                            <path d="M19.97 3.97a.75.75 0 0 1 1.06 0l-.53.53l.53-.53h.001l.002.002l.003.003l.009.01a2 2 0 0 1 .124.134c.079.089.188.218.316.385c.257.333.594.823.929 1.46c.67 1.274 1.336 3.143 1.336 5.536s-.666 4.262-1.336 5.537a10 10 0 0 1-.929 1.46a7 7 0 0 1-.44.518l-.01.01l-.002.003l-.002.001l-.531-.529l.53.53a.75.75 0 0 1-1.061-1.06v.001h-.001l.001-.001l.014-.014l.063-.07q.089-.098.25-.304c.212-.276.5-.693.79-1.244c.58-1.1 1.164-2.731 1.164-4.838s-.584-3.738-1.164-4.838a8.7 8.7 0 0 0-.79-1.244a6 6 0 0 0-.313-.374l-.014-.014l-.001-.002v.002h.001a.75.75 0 0 1 0-1.06m-7.932-.574c1.163-.767 2.713.068 2.713 1.461v14.286c0 1.394-1.55 2.228-2.713 1.461l-6-3.955a.25.25 0 0 0-.137-.042H3a2.75 2.75 0 0 1-2.75-2.75v-3.714A2.75 2.75 0 0 1 3 7.393h2.9a.25.25 0 0 0 .138-.041z"></path>
                        </g>
                    </svg>
                    <input type="range" min={0} max={100} step={1} value={value1} onChange={MudaVolume} className="w-full accent-white h-1" />
                </div>
            </div>
        </>
    )
}