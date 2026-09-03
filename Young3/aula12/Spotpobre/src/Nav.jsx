import letrac from './assets/C.png'

export default function Nav() {

    return (
        <>
            <div className="w-screen h-16 bg-black flex justify-around items-center">
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></path>
                    </svg>
                </a>

                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M6 19h3.692v-5.077q0-.343.233-.575q.232-.233.575-.233h3q.343 0 .576.233q.232.232.232.575V19H18v-8.692q0-.154-.067-.28t-.183-.22L12.366 5.75q-.154-.134-.366-.134t-.365.134L6.25 9.808q-.115.096-.183.22t-.067.28zm-1 0v-8.692q0-.384.172-.727t.474-.565l5.385-4.078q.423-.323.966-.323t.972.323l5.385 4.077q.303.222.474.566q.172.343.172.727V19q0 .402-.299.701T18 20h-3.884q-.344 0-.576-.232q-.232-.233-.232-.576v-5.076h-2.616v5.076q0 .344-.232.576T9.885 20H6q-.402 0-.701-.299T5 19m7-6.711"></path>
                    </svg>
                </a>

                <label className="input rounded-3xl outline-none">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" className="grow" placeholder="O que você quer ouvir?" />
                </label>

                <button className="btn rounded-3xl bg-white text-black font-bold">Ver planos Premiun</button>
                <button>
                    <a href="" className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.485 6.485 2 12 2s10 4.485 10 10s-4.485 10-10 10S2 17.515 2 12m1.5 0c0 4.685 3.815 8.5 8.5 8.5s8.5-3.815 8.5-8.5s-3.815-8.5-8.5-8.5S3.5 7.315 3.5 12m9.25-5.5v8.47L15.72 12l1.06 1.06l-3.895 3.895a1.25 1.25 0 0 1-.885.365c-.32 0-.64-.12-.885-.365L7.22 13.06L8.28 12l2.97 2.97V6.5z" clipRule="evenodd"></path>
                    </svg>
                    <span>Instalar aplicativo</span>
                    </a>
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <g fill="none" fillRule="evenodd">
                        <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
                        <path fill="currentColor" d="M5 9a7 7 0 0 1 14 0v3.764l1.822 3.644A1.1 1.1 0 0 1 19.838 18h-3.964a4.002 4.002 0 0 1-7.748 0H4.162a1.1 1.1 0 0 1-.984-1.592L5 12.764zm5.268 9a2 2 0 0 0 3.464 0zM12 4a5 5 0 0 0-5 5v3.764a2 2 0 0 1-.211.894L5.619 16h12.763l-1.17-2.342a2 2 0 0 1-.212-.894V9a5 5 0 0 0-5-5"></path>
                    </g>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 21c0-1.943 0-2.915-.305-3.677c-.321-.802-.873-1.453-1.564-1.847c-.658-.374-1.63-.476-3.211-.472L11.08 15c-1.58 0-2.533.092-3.183.453c-.713.396-1.277 1.06-1.601 1.886C6 18.09 6 19.06 6 21m1-9c-1.662.061-2.493.092-3.133.453c-.701.396-1.256 1.06-1.576 1.886c-.29.752-.29 1.721-.29 3.661M17 12c1.675.066 2.513.098 3.16.472c.68.394 1.224 1.046 1.54 1.848c.3.763.3 1.735.3 3.68m-7-9a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-5-5.236A3 3 0 1 0 6.341 8.5m7.661-4.736A3 3 0 1 1 17.661 8.5"></path>
                </svg>

                <img src={letrac} className='w-8 h-8 rounded-[50%] bg-white p-1 object-cover' alt="" />
            </div>
        </>
    )
}
