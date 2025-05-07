import { useState, useEffect } from "react";
import getJuegoPorId from "../../services/getJuegoPorId";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";
import useFavoritos from "../../context/FavoritosContext/useFavoritos";
import { HeartOff } from "lucide-react";
import { useTranslation } from "react-i18next";

const Favoritos = () => {
  const { t }=useTranslation();
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
          console.error(t("error_getting_games"), error);
        }
      } else {
        setJuegos([]);
      }

      setLoading(false);
    };

    cargarFavoritos();
  }, [favoritos]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow px-4 pb-6 bg-gray-50 mb-4">
        {loading ? (
          <Loading />
        ) : juegos.length > 0 ? (
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold md:text-3xl text-gray-800 mt-6 mb-6">
              {t("games_list")}
            </h2>
            <div className="flex flex-col gap-4">
              {juegos.map((juego) => (
                <Card key={juego.id} juego={juego} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center text-gray-600 py-20">
            <HeartOff className="w-16 h-16 mb-4 text-gray-300" />
            <p className="text-lg">{t("dont_have_any_games")}</p>
            <p className="text-sm mt-1 text-gray-400">{t("explore")}</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Favoritos;

