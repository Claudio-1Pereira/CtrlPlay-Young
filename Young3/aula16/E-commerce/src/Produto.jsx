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
      <div className="flex w-48 h-60 flex-col rounded-2xl bg-mist-900 justify-center p-4 m-3 hover:scale-110">

        <img
          className="w-40 h-36 rounded-2xl"
          src={NomeDoPC[name].arquivo}
          alt=""
        />

        <span>{NomeDoPC[name].nome.replaceAll("_", " ")}</span>

        <span>{preco}</span>

      </div>
    </Link>
  )
}