import { useEffect, useState } from "react";
import getJuegos from "../../services/getJuegos.js";
import Card from "../Card/Card.jsx";
import Loading from "../Loading/Loading.jsx";
import Button from "../Button/Button.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";

const Juegos = () => {
  const [juegos, setJuegos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [loading, setLoading] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [totalJuegos, setTotalJuegos] = useState(0);

  const cargarJuegos = async (paginaActual, termino = "") => {
    setLoading(true);
    const { juegos, total } = await getJuegos(paginaActual, termino);
    setJuegos(juegos);
    setTotalJuegos(total);
    setLoading(false);
  };

  useEffect(() => {
    cargarJuegos(pagina, terminoBusqueda);
  }, [pagina, terminoBusqueda]);

  const ejecutarBusqueda = () => {
    setPagina(1);
    setTerminoBusqueda(busqueda);
  };

  return (
    <main className="w-full max-w-[960px] mx-auto px-8 flex-grow mb-4">

      <SearchBar
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        onSearch={ejecutarBusqueda}
      />

      {totalJuegos > 0 && (
        <div className="mb-4 text-gray-700">
          <span>
            Mostrando {juegos.length} de {totalJuegos} juegos
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {loading ? (
          <div className="col-span-full flex justify-center items-center min-h-[70vh]">
            <Loading />
          </div>
        ) : juegos.length === 0 ? (
          <div className="col-span-full flex justify-center">
            <p className="bg-yellow-100 text-yellow-800 border border-yellow-300 rounded-md px-6 py-4 text-center text-base">
              No se encontraron juegos que coincidan con tu búsqueda.
            </p>
          </div>

        ) : (
          juegos.map((juego) => <Card key={juego.id} juego={juego} />)
        )}
      </div>


      <div className="flex justify-between mt-8 mb-8 items-center">
        <Button
          onClick={() => setPagina((prev) => (prev > 1 ? prev - 1 : 1))}
          disabled={pagina === 1}
          texto="Anterior"
          className="text-white bg-[#676566] hover:bg-[#4f4d4d] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#676566]"
        />
        <span className="text-lg font-medium">Página {pagina}</span>
        <Button
          onClick={() => setPagina((prev) => prev + 1)}
          disabled={pagina * 18 >= totalJuegos}
          texto="Siguiente"
          className="text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
        />
      </div>
    </main>
  );
};

export default Juegos;