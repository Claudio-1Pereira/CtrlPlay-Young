import nike from './assets/Logo_NIKE.svg'

export default function Navigation(){
    return(
        <>
            <nav>
                <img src={nike} alt="Nike Logo"  height='30px'/>
                <input type="text"placeholder="Procura produto..." />
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Produtos</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>
        </>
    )
}