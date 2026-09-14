import { Link } from "react-router-dom";

const arquivos = import.meta.glob(
  "./assets/*.jpg",
  {
    eager: true,
    query: "?url",
    import: "default"
  }
)


export default function Produto({ name, preco }) {

  const NomeDoPC = Object.entries(arquivos).map(([caminho, arquivo]) => {
    const nomeArquivo = caminho.split("/").pop()

    return {
      nome: nomeArquivo.replace(".jpg", ""),
      arquivo: arquivo
    }
  })


  return (
    <Link to={`/produto/${name}`}>
      <div className="flex w-48 h-68 flex-col rounded-2xl bg-[#2e2373] p-4 m-3 hover:scale-110">

        <img
          className="w-40 h-36 rounded-2xl"
          src={NomeDoPC[name].arquivo}
          alt=""
        />

        <span className="text-3xl font-bold">{NomeDoPC[name].nome.replaceAll("_", " ")}</span>

        <span className="text-xl font-bold text-[#7ed784]">{preco}</span>

      </div>
    </Link>
  )
}