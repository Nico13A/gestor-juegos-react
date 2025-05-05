import { useContext } from "react";
import FavoritosContext from "./FavoritosContext";

const useFavoritos = () => useContext(FavoritosContext);

export default useFavoritos;
