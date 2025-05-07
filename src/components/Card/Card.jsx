import { useNavigate } from "react-router-dom";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Button from "../../components/Button/Button";
import { ROUTES } from "../../const/routes";
import useFavoritos from "../../context/FavoritosContext/useFavoritos"; 

const Card = ({ juego }) => {
  const navigate = useNavigate();
  const { isFavorito, toggleFavorito } = useFavoritos(); 

  const onClickNavigateHandler = () => {
    const rutaDetalle = ROUTES.detalles.replace(":id", juego.id);
    navigate(rutaDetalle);
  };

  return (
<div className="bg-white rounded-md shadow-md overflow-hidden transform hover:scale-102 hover:shadow-lg transition-all duration-300">

      <img
        src={juego.background_image}
        alt={juego.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col justify-between h-32">
        <h3 className="text-base font-semibold mb-2">{juego.name}</h3>
        <div className="flex justify-between items-center">
          <Button
            onClick={onClickNavigateHandler}
            texto="Ver detalles"
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
            padding="none"
          />
          <FavoriteButton
            isFavorite={isFavorito(juego.id)} 
            onClick={() => toggleFavorito(juego.id)} 
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
