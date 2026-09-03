import Joao from './assets/joao.webp'

export default function Card(){
    
    
    return(
        <>
            <div className="w-full hover:bg-[#181819] flex min-h-18 p-2 items-center">
                <img src={Joao} alt="João Gomes" className='h-14 w-14  rounded-[50%] object-cover ml-2' />
                <div className='flex flex-col ml-2'>
                <span>João gomes</span>
                <span className='text-gray-500'>Artista</span>
                </div>
            </div>
        </>
    )
}