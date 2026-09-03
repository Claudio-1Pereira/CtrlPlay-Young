import Card from "./Card"

export default function Library(){
    
    
    return(
        <>
            <div className="w-[30%] h-[calc(100vh-150px)] m-1.5 bg-[#121212] rounded-2xl flex items-center flex-col">
                <span className="font-bold m-2">Sua biblioteca</span>
                <div className="flex flex-col overflow-y-auto w-full">
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