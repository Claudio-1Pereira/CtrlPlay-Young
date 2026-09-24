import { useState } from "react";

export default function MenuNavegacao() {
  const [menuAberto, setMenuAberto] = useState(false);

 
  const irParaSecao = (id) => {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth" });
    }
    setMenuAberto(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setMenuAberto(!menuAberto)}
        className="text-white px-4 py-2 font-bold hover:bg-blue-950 transition rounded"
      >
        ☰
      </button>

      {menuAberto && (
        <div className="absolute top-12 left-0 w-48 bg-slate-800 text-white rounded-lg shadow-xl border border-slate-700 z-50 p-2 flex flex-col gap-1">
          <button
            onClick={() => irParaSecao("secao-pc")}
            className="text-left px-3 py-2 hover:bg-slate-700 rounded transition"
          >
            PCs
          </button>
          <button
            onClick={() => irParaSecao("secao-hardware")}
            className="text-left px-3 py-2 hover:bg-slate-700 rounded transition"
          >
            Hardware
          </button>
          <button
            onClick={() => irParaSecao("secao-headsets")}
            className="text-left px-3 py-2 hover:bg-slate-700 rounded transition"
          >
            Headsets
          </button>
          <button
            onClick={() => irParaSecao("secao-mouses")}
            className="text-left px-3 py-2 hover:bg-slate-700 rounded transition"
          >
            Mouses
          </button>
        </div>
      )}
    </div>
  );
}