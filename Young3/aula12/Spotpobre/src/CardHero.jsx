import matue from './assets/matue.jpg'

export default function CardHero(){

    return(
        <>
            <div className='flex flex-col shrink-0 p-2'>
                 <img src={matue} alt="Matuê" className='h-36 rounded-2xl' />
                 <span>Matuê Album</span>
            </div>
        </>
    )
}