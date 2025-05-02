import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getJuegoPorId from "../../services/getJuegoPorId.js";
import Loading from "../../components/Loading/Loading.jsx";
import Pie from "../../components/pie/pie.jsx";
import Header from "../../components/header/header.jsx";

const Detalles = () => {
  const { id } = useParams();
  const [juego, setJuego] = useState(null);
  const [loading, setLoading] = useState(true);
  const [verMas, setVerMas] = useState(false);

  const cargarJuego = async () => {
    setLoading(true);
    const data = await getJuegoPorId(id);
    setJuego(data);
    setLoading(false);
  };

  useEffect(() => {
    cargarJuego();
  }, [id]);

  const descripcionCorta = juego?.description_raw?.slice(0, 300) + "...";

  return (
    <div className="w-full max-w-[960px] mx-auto p-6">
      <Header/>
      {loading ? (
        <Loading />
      ) : !juego ? (
        <div className="text-center text-xl text-[#090605]">
          <p>Juego no encontrado.</p>
        </div>
      ) : (
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <img
            src={juego.background_image}
            alt={juego.name}
            className="w-full h-96 object-cover"
          />

          <div className="p-6 space-y-4">
            <h1 className="text-4xl font-bold text-[#090605]">{juego.name}</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
              <div className="bg-[#D6DFE8] p-4 rounded-lg shadow-sm">
                <p className="font-semibold">Fecha de lanzamiento</p>
                <p>{juego.released}</p>
              </div>
              <div className="bg-[#D6DFE8] p-4 rounded-lg shadow-sm">
                <p className="font-semibold">Rating</p>
                <p>{juego.rating} / {juego.rating_top}</p>
              </div>
              {juego.added && (
                <div className="bg-[#D6DFE8] p-4 rounded-lg shadow-sm">
                  <p className="font-semibold">Usuarios</p>
                  <p>{juego.added.toLocaleString()}</p>
                </div>
              )}
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">Descripción</h2>
              <p className="text-gray-700 leading-relaxed">
                {verMas ? juego.description_raw : descripcionCorta}
              </p>
              {juego.description_raw?.length > 300 && (
                <button
                  onClick={() => setVerMas(!verMas)}
                  className="cursor-pointer text-blue-600 hover:underline mt-2 hover:text-blue-800"
                >
                  {verMas ? "Mostrar menos" : "Leer más"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      <Pie/>
    </div>
  );
};

export default Detalles;
