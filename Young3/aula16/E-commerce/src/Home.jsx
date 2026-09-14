import Produto from "./Produto"
import { Link } from "react-router-dom";

export default function Home() {


    return (
        <>
            <div className="flex flex-col bg-[#010125]">
                <div className="h-12 bg-[#221a56] mb-10 flex flex-row shadow shadow-[#221a56] justify-center items-center">
                    <h1 className="font-bold font-sans text-3xl">E-commerce PC e Hardware</h1>
                    <Link to={`/`}>
                        <svg className="ml-60" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1024 1024">
                            <path fill="currentColor" d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2M568 868H456V664h112zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7l23.1 23.1L882 542.3z"></path>
                        </svg>
                    </Link>
                </div>
                <div>
                    <span className="text-4xl font-bold p-4">Produtos PC</span>
                    <div className="pl-3">
                        <ul className="flex flex-row">
                            <Produto name={8} preco="R$1999.99" />
                            <Produto name={9} preco="R$2499.99" />
                            <Produto name={10} preco="R$3999.99" />
                            <Produto name={12} preco="R$2999.99" />
                            <Produto name={11} preco="R$2999.99" />
                        </ul>
                    </div>
                </div>
                <div>
                    <span className="text-4xl font-bold p-4">Produtos Hardware</span>
                    <div className="pl-3">
                        <ul className="flex flex-row">
                            <Produto name={14} preco="R$1999.99" />
                            <Produto name={5} preco="R$2999.99" />
                            <Produto name={13} preco="R$1499.99" />
                            <Produto name={7} preco="R$1499.99" />
                            <Produto name={6} preco="R$1499.99" />
                        </ul>
                    </div>
                </div>
                <div>
                    <span className="text-4xl font-bold p-4">Produtos Hardware</span>
                    <div className="pl-3">
                        <ul className="flex flex-row">
                            <Produto name={0} preco="R$1999.99" />
                            <Produto name={1} preco="R$2999.99" />
                            <Produto name={2} preco="R$1499.99" />
                            <Produto name={3} preco="R$1499.99" />
                            <Produto name={4} preco="R$1499.99" />
                        </ul>
                    </div>
                </div>
                <footer className="pl-2 pt-5 bg-[#000017] shadow-[0_-8px_12px_-6px_rgba(0,0,0,0.3)]">
                    <div className="flex flex-row">
                        <div className="mr-30">
                            <p className="text-xs leading-5">&copy; E-commerce. Todos os direitos reservados.</p>
                            <address className="text-xs leading-5">
                                Contato: E-commerce@gmail.com
                            </address>
                        </div>
                        <div>
                            <ul>
                                <li className="text-xs leading-5 hover:underline hover:cursor-pointer">Política de Privacidade</li>
                                <li className="text-xs leading-5 hover:underline hover:cursor-pointer">Termos de Uso</li>
                                <li className="text-xs leading-5 hover:underline hover:cursor-pointer">Quem Somos</li>
                                <li className="text-xs leading-5 hover:underline hover:cursor-pointer">FAQ</li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}