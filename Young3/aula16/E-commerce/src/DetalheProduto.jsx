import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import Headset_AOC from './assets/Headset_AOC.jpg'
import Headset_Arena from './assets/Headset_Arena.jpg'
import Headset_HAVIT from './assets/Headset_HAVIT.jpg';
import Headset_Hyperx from './assets/Headset_Hyperx.jpg';
import Headset_Redragon from './assets/Headset_Redragon.jpg';
import I7_14_Gen from './assets/I7_14_Gen.jpg';
import Memoria_Kingston from './assets/Memoria_Kingston.jpg';
import Memoria_Rise from './assets/Memoria_Rise.jpg';
import Mouse_Attack_Shark from './assets/Mouse_Attack.jpg';
import Mouse_Lead_2 from './assets/Mouse_Lead_2.jpg';
import Mouse_Logitech from './assets/Mouse_Logitech.jpg';
import Mouse_Razer from './assets/Mouse_Razer.jpg';
import Mouse_Redragon from './assets/Mouse_Redragon.jpg';
import Pc_Ryzen from './assets/Pc_ Ryzen.jpg';
import Pc_Intel from './assets/Pc_Intel.jpg';
import Pc_montado from './assets/Pc_montado.jpg';
import Pc_Potente from './assets/Pc_Potente.jpg';
import PC_RGB from './assets/PC_RGB.jpg';
import RTX_3060 from './assets/RTX_3060.jpg';
import Ryzen_7_5800x3d from './assets/Ryzen_7_5800x3d.jpg';

export default function DetalheProduto() {

    const { id } = useParams()

    const infos = [
        // Index 0: Headset AOC
        "• Headset Gamer AOC\n• Som Surround 7.1\n• Microfone Removível\n• Conexão USB/P2",
        // Index 1: Headset Arena
        "• Headset Gamer Arena\n• Iluminação RGB\n• Drivers de 50mm\n• Conexão USB",
        // Index 2: Headset HAVIT
        "• Headset Gamer HAVIT HV-H2232d\n• Iluminação RGB\n• Driver 50mm\n• Conexão 3.5mm + USB",
        // Index 3: Headset Hyperx
        "• Headset Gamer HyperX Cloud II\n• Som Surround 7.1 Virtual\n• Estrutura em Alumínio\n• Microfone com cancelamento de ruído",
        // Index 4: Headset Redragon
        "• Headset Gamer Redragon Lamia2\n• Som Surround 7.1 Virtual\n• Iluminação RGB\n• Acompanha suporte",

        // Index 5: Memória Rise
        "• Memória Rise Mode Z 8GB\n• Frequência: 3200MHz\n• Tipo: DDR4\n• Cor: Branco",

        // Index 6: RTX 3060
        "• Modelo: RTX 3060 Gaming OC 8G\n• Marca: Gigabyte NVIDIA\n• Memória: 8 GB GDDR6\n• Interface: 128 bits\n• Tecnologia: Ray Tracing",
        // Index 7: Ryzen 7 5800x3d
        "• Processador: AMD Ryzen 7 5800X3D\n• Frequência: 3.4 GHz\n• Núcleos: 8\n• Cache: 100 MB\n• Socket: AM4",

        // Index 8: Mouse Attack Shark
        "• Mouse Gamer Attack Shark X3\n• Sensor Óptico PixArt\n• Conexão Wireless / Bluetooth / Cabo\n• Peso Ultra Leve",
        // Index 9: Mouse Lead 2
        "• Mouse Gamer Lead 2\n• Iluminação RGB\n• Design Ergonômico\n• Resolução ajustável até 6400 DPI",
        // Index 10: Mouse Logitech
        "• Mouse Gamer Logitech G203\n• RGB LIGHTSYNC\n• Sensor de 8.000 DPI\n• 6 Botões Programáveis",
        // Index 11: Mouse Razer
        "• Mouse Gamer Razer DeathAdder Essential\n• Sensor Óptico de 6.400 DPI\n• 5 Botões Hyperesponse\n• Swithes Mecânicos",
        // Index 12: Mouse Redragon
        "• Mouse Gamer Redragon Cobra M711\n• Sensor Pixart 3325\n• Iluminação RGB Chroma\n• 10.000 DPI / 7 Botões",

        // Index 13: PC RGB (PC Inicial)
        "• Computador Gamer RGB\n• Processador Intel Core i5\n• Memória RAM: 16 GB\n• SSD 480GB\n• Gabinete com FANs RGB",
        // Index 14: PC Ryzen
        "• Memória RAM: 16 GB\n• Processador: AMD Ryzen 5 5600GT\n• Marca: AMD\n• Sistema operacional: Windows 11 Pro",
        // Index 15: PC Intel
        "• Processador: Intel Core i5-10400F\n• Placa de vídeo: GeForce GT 610 2 GB\n• Memória RAM: 8 GB DDR4\n• Armazenamento: SSD 120 GB",
        // Index 16: PC Potente
        "• Processador: Intel Core i5-14400F\n• Placa de vídeo: GeForce G 210\n• Memória RAM: 16 GB DDR4\n• Armazenamento: SSD 240 GB",
        // Index 17: PC Montado
        "• Processador: AMD Ryzen 5 5600GT\n• Gráficos: AMD Radeon Graphics integrados\n• Indicado para: estudos, tarefas do dia a dia e jogos leves\n• Acompanha: monitor e kit gamer",

        // Index 18: Intel Core i7 14 Gen
        "• Processador: Intel Core i7-14700F\n• Frequência: 2.1 GHz (até 5.40 GHz Turbo)\n• Cache: 33 MB\n• Núcleos: 20\n• Threads: 28\n• Socket: LGA 1700\n• Vídeo integrado: Não",
        // Index 19: Memória Kingston
        "• Memória Kingston Fury Beast 16GB\n• Frequência: 3200MHz\n• Tipo: DDR4\n• Dissipador de calor em alumínio"
    ];

    const imgs = [
        Headset_AOC,
        Headset_Arena,
        Headset_HAVIT,
        Headset_Hyperx,
        Headset_Redragon,
        Memoria_Rise,
        RTX_3060,
        Ryzen_7_5800x3d,
        Mouse_Attack_Shark,
        Mouse_Lead_2,
        Mouse_Logitech,
        Mouse_Razer,
        Mouse_Redragon,
        PC_RGB,
        Pc_Ryzen,
        Pc_Intel,
        Pc_Potente,
        Pc_montado,
        I7_14_Gen,
        Memoria_Kingston
    ];

    const precos = [
        "R$ 299,99",   // Index 0: Headset AOC
        "R$ 189,99",   // Index 1: Headset Arena
        "R$ 159,99",   // Index 2: Headset HAVIT
        "R$ 499,99",   // Index 3: Headset HyperX
        "R$ 249,99",   // Index 4: Headset Redragon
        "R$ 189,99",   // Index 5: Memória Rise
        "R$ 1.899,99", // Index 6: RTX 3060
        "R$ 1.399,99", // Index 7: Ryzen 7 5800X3D
        "R$ 219,99",   // Index 8: Mouse Attack Shark
        "R$ 129,99",   // Index 9: Mouse Lead 2
        "R$ 149,99",   // Index 10: Mouse Logitech
        "R$ 229,99",   // Index 11: Mouse Razer
        "R$ 179,99",   // Index 12: Mouse Redragon
        "R$ 3.499,99", // Index 13: PC RGB
        "R$ 2.499,99", // Index 14: PC Ryzen
        "R$ 3.999,99", // Index 15: PC Intel
        "R$ 2.999,99", // Index 16: PC Potente
        "R$ 2.799,99", // Index 17: PC Montado
        "R$ 2.299,99", // Index 18: Intel i7 14 Gen
        "R$ 349,99"    // Index 19: Memória Kingston
    ];

    const nomes = [
        "Headset AOC",
        "Headset Arena",
        "Headset HAVIT",
        "Headset HyperX",
        "Headset Redragon",
        "Memória Rise",
        "RTX 3060",
        "Ryzen 7 5800X3D",
        "Mouse Attack Shark",
        "Mouse Lead 2",
        "Mouse Logitech",
        "Mouse Razer",
        "Mouse Redragon",
        "PC RGB Gamer",
        "PC Ryzen",
        "PC Intel",
        "PC Potente",
        "PC Montado",
        "I7 14 Gen",
        "Memória Kingston"
    ];

    return (
        <>
            <div className="flex flex-col p-5 bg-[#080225] h-screen items-center">
                <Link to={`/`} className="w-10 text-xl font-bold text-blue-400">Voltar</Link>
                <h1 className="font-bold text-3xl mb-2 text-white">{nomes[id]}</h1>
                <div className="flex">
                    <img className="w-60 h-60 rounded-2xl" src={imgs[id]} alt="" />
                    <p className="text-2xl p-4 whitespace-pre-line text-white">{infos[id]}</p>
                </div>
                <div className="flex flex-row items-center">
                    <button className="btn w-40 h-16 mt-4 bg-blue-700 text-2xl font-bold">Comprar</button>
                    <p className="font-bold text-white text-3xl p-5">{precos[id]}</p>
                </div>
            </div>
        </>
    )
}