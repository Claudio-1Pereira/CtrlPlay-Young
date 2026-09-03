import CardHero from "./CardHero"

export default function Hero(){
    
    
    return(
        <>
            <div className="w-[50%] h-[calc(100vh-150px)] m-1.5 bg-[#121212] rounded-2xl flex flex-col items-center">
                <span className="text-xl font-bold m-2">Single e álbuns que todo mundo gostam</span>
                <div className="flex flex-row overflow-x-auto w-full">
                    <CardHero/>
                    <CardHero/>
                    <CardHero/>
                    <CardHero/>
                    <CardHero/>
                </div>
            </div>
        </>
    )
}