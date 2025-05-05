import { useState, useEffect } from "react";
import FavoritosContext from "./FavoritosContext";

const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    const favoritosGuardados = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(favoritosGuardados);
    setCargado(true);
  }, []);

  useEffect(() => {
    if (cargado) {
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }
  }, [favoritos, cargado]);

  const toggleFavorito = (juegoId) => {
    setFavoritos((prev) =>
      prev.includes(juegoId) ? prev.filter((id) => id !== juegoId) : [...prev, juegoId]
    );
  };

  const isFavorito = (juegoId) => favoritos.includes(juegoId);

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito, isFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosProvider;
