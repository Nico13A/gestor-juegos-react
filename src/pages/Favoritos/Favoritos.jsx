import { useState, useEffect } from "react";
import getJuegoPorId from "../../services/getJuegoPorId";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";
import  useFavoritos  from "../../context/useFavoritos";

const Favoritos = () => {
  const { favoritos } = useFavoritos();
  const [juegos, setJuegos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarFavoritos = async () => {
      setLoading(true);

      if (favoritos.length > 0) {
        try {
          const juegosFavoritos = await Promise.all(
            favoritos.map((id) => getJuegoPorId(id))
          );
          setJuegos(juegosFavoritos);
        } catch (error) {
          console.error("Error al obtener juegos favoritos:", error);
        }
      } else {
        setJuegos([]);
      }

      setLoading(false);
    };

    cargarFavoritos();
  }, [favoritos]);

  return (
    <>
      <Header />
      <div>
        {loading ? (
          <Loading />
        ) : juegos.length > 0 ? (
          juegos.map((juego) => <Card key={juego.id} juego={juego} />)
        ) : (
          <p className="text-center py-10">No tenés juegos favoritos.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Favoritos;

