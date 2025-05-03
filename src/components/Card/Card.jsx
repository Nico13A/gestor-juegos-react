import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Button from "../../components/Button/Button";
import { ROUTES } from "../../const/routes";

const Card = ({ juego }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate();
const toggleFavorite = () => {
    setIsFavorite((currentValue) => !currentValue);
};
/*/            Alfredo                 /*/
const [favoritosGuardados,setFavoritosGuardados]=useState([]);

useEffect(()=>{
    let itemsFavoritos=JSON.parse(localStorage.getItem("favoritos")) || [];
    itemsFavoritos.map((id)=>{
        if (id===juego.id) {
            setIsFavorite(true);
        }
    }
    )
},[])

useEffect(()=>{
    let nuevoFavorito=JSON.parse(localStorage.getItem("favoritos")) || [];
    if (!isFavorite) {
        nuevoFavorito = nuevoFavorito.filter((id) => id !== juego.id);
    }
    else{
        nuevoFavorito.push(juego.id);
    }
    setFavoritosGuardados(nuevoFavorito);
    localStorage.setItem("favoritos", JSON.stringify(nuevoFavorito));
},[isFavorite])


/*/            Fin Alfredo                 /*/

const onClickNavigateHandler = () => {
        const rutaDetalle = ROUTES.detalles.replace(":id", juego.id);
        navigate(rutaDetalle);
    };

    return (
        <div className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
                        className="text-sm text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                    >
                        Ver detalles
                    </Button>
                    <FavoriteButton isFavorite={isFavorite} onClick={toggleFavorite} />
                </div>
            </div>
        </div>
    );
};

export default Card;


