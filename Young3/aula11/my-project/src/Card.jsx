import tenis from './assets/shopping.webp'

export default function Card({produto}){

    



    return(
        <>
            <main className='flex flex-col justify-center items-center w-68 bg-gray-800 rounded-2xl m-0.5'>
                <img className='w-46 h-38 object-contain rounded-3xl mt-2' src={produto.image}/>
                <span className='font-bold m-2 text-2xl'>{produto.title}</span>
                <div className='flex flex-row items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                    <path fill="#e9ff00" d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm3.15.45l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15zm0-5.025" />
                    </svg>
                    <span className='font-xl text-center text-yellow-200'>{produto.rating.rate}</span>
                </div>
                <p className='font-medium text-center text-sm/5'>{produto.description.substring(0,80)}</p>
                <div className='flex flex-row p-3'>
                    <span className='font-semibold mt-1 mr-6 text-xl'>R${produto.price}</span>
                    <button className='btn btn-primary bg-blue-700 w-32 rounded'>Comprar</button>
                </div>
            </main>
        </>
    )
}