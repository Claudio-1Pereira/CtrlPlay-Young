import Card from "./Card"

export default function Playlist(){
    
    
    return(
        <>
            <div className="w-[20%] h-[calc(100vh-150px)] m-1.5 bg-[#121212] rounded-2xl flex flex-col ">
                <span className="font-bold m-1 text-center">Fila de Reprodução</span>
                <span className="font-semibold m-2">Tocando agora:  </span>
                    <Card/>
                <div className="flex overflow-y-auto flex-col w-full">
                    <span className="font-semibold m-2">Proximas a tocar: </span>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </>
    )
}