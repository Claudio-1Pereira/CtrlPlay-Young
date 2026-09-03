import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import I7 from './assets/I7_14_Gen.jpg'
import pc_ryzen from './assets/Pc_ Ryzen.jpg'
import Pc_Intel from './assets/Pc_Intel.jpg'
import pc_montado from './assets/Pc_montado.jpg'
import pc_potente from './assets/Pc_Potente.jpg'
import Rtx from './assets/RTX_3060.jpg'
import ryzen from './assets/Ryzen_7_5800x3d.jpg'

export default function DetalheProduto() {

    const { id } = useParams()

    const infos = [
        "• Processador: Intel Core i7-14700F\n• Frequência: 2.1 GHz (até 5.40 GHz Turbo)\n• Cache: 33 MB\n• Núcleos: 20\n• Threads: 28\n• Socket: LGA 1700\n• Vídeo integrado: Não",

        "• Memória RAM: 16 GB\n• Processador: AMD Ryzen 5 5600GT\n• Marca: AMD\n• Sistema operacional: Windows 11 Pro",

        "• Processador: Intel Core i5-10400F\n• Placa de vídeo: GeForce GT 610 2 GB\n• Memória RAM: 8 GB DDR4\n• Armazenamento: SSD 120 GB",

        "• Processador: Intel Core i5-14400F\n• Placa de vídeo: GeForce G 210\n• Memória RAM: 16 GB DDR4\n• Armazenamento: SSD 240 GB",

        "• Processador: AMD Ryzen 5 5600GT\n• Gráficos: AMD Radeon Graphics integrados\n• Indicado para: estudos, tarefas do dia a dia e jogos leves\n• Acompanha: monitor e kit gamer",

        "• Modelo: RTX 3060 Gaming OC 8G\n• Marca: Gigabyte NVIDIA\n• Memória: 8 GB GDDR6\n• Interface: 128 bits\n• Tecnologia: Ray Tracing",

        "• Processador: AMD Ryzen 7 5800X3D\n• Frequência: 3.4 GHz\n• Núcleos: 8\n• Cache: 100 MB\n• Socket: AM4"
    ];

    const imgs = [
        I7,
        pc_ryzen,
        Pc_Intel,
        pc_potente,
        pc_montado,
        Rtx,
        ryzen
    ]
    
    const precos = [
        "R$2000.00",
        "R$2500.00",
        "R$4000.00",
        "R$3000.00",
        "R$2000.00",
        "R$3000.00",
        "R$1500.00"
    ]
    const nomes = [
        "I7 14 Gen",
        "PC Ryzen",
        "PC Intel",
        "PC potente",
        "PC Gamer montado",
        "Rtx 3060",
        "Ryzen 7 5800x3d"
    ]

    return (
        <>
            <div className="flex flex-col p-5 bg-[#080225] h-screen items-center">
                <Link to={`/`} className="w-10 text-xl font-bold text-blue-400">Voltar</Link>
                <h1 className="font-bold text-3xl mb-2">{nomes[id]}</h1>
                <div className="flex">
                <img className="w-60 h-60 rounded-2xl" src={imgs[id]} alt="" />
                <p className="text-2xl p-4 whitespace-pre-line">{infos[id]}</p>
                </div>
                <div className="flex flex-row items-center">
                    <button className="btn w-40 h-16 mt-4 bg-blue-700 text-2xl font-bold">Comprar</button>
                    <p className="font-bold text-3xl p-5">{precos[id]}</p>
                </div>
            </div>
        </>
    )
}