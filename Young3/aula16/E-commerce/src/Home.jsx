import Produto from "./Produto"

export default function Home() {


    return (
        <>
            <div className="flex flex-col bg-[#000039]">
                <div className="h-12 bg-[#371be4] mb-10 flex flex-row shadow shadow-[#311f99] justify-center items-center">
                    <h1 className="font-bold font-sans text-3xl">E-commerce PC e Hardware</h1>
                    <svg className="ml-60" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1024 1024">
                        <path fill="currentColor" d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2M568 868H456V664h112zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7l23.1 23.1L882 542.3z"></path>
                    </svg>
                    <img src="" alt="" />
                </div>
                <div>
                    <span>Produtos PC</span>
                    <div className="">
                        <ul className="flex flex-row">
                            <Produto name={1} preco="R$2000.00" />
                            <Produto name={2} preco="R$2500.00" />
                            <Produto name={3} preco="R$4000.00" />
                            <Produto name={4} preco="R$3000.00" />
                        </ul>
                    </div>
                </div>
                <div>
                    <span>Produtos Hardware</span>
                    <div className="">
                        <ul className="flex flex-row">
                            <Produto name={0} preco="R$2000.00" />
                            <Produto name={5} preco="R$3000.00" />
                            <Produto name={6} preco="R$1500.00" />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}