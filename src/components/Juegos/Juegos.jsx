import { useEffect, useState } from "react";
import getJuegos from "../../services/getJuegos.js";
import Card from "../Card/Card.jsx";
import Loading from "../Loading/Loading.jsx";
import Button from "../Button/Button.jsx";

const Juegos = () => {
  const [juegos, setJuegos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [loading, setLoading] = useState(true);

  const cargarJuegos = async (paginaActual) => {
    setLoading(true);
    const data = await getJuegos(paginaActual);
    if (data) {
      setJuegos(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    cargarJuegos(pagina);
  }, [pagina]);

  const siguientePagina = () => setPagina((prev) => prev + 1);
  const anteriorPagina = () => setPagina((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <main className="w-full max-w-[960px] mx-auto">
      <h2 className="text-xl font-semibold mb-4">Lista de juegos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {loading ? (
          <div className="col-span-full flex justify-center items-center min-h-[70vh]">
            <Loading />
          </div>
        ) : (
          juegos.map((juego) => (
            <Card key={juego.id} juego={juego} />
          ))
        )}
      </div>

      <div className="flex justify-between mt-8 mb-8 items-center">
        <Button
          onClick={anteriorPagina}
          disabled={pagina === 1}
          className="px-4 py-2 bg-[#676566] text-white rounded disabled:opacity-50 cursor-pointer hover:bg-[#4f4d4d] disabled:cursor-not-allowed disabled:hover:bg-[#676566]"
        >
          Anterior
        </Button>
        <span className="text-lg font-medium">Página {pagina}</span>
        <Button
          onClick={siguientePagina}
          className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700"
        >
          Siguiente
        </Button>
      </div>
    </main>
  );
};

export default Juegos;


