import { getGameByIdUrl } from "../const/api.js";

const getJuegoPorId = async (id) => {
  let juego = null;
  try {
    const respuesta = await fetch(getGameByIdUrl(id));
    if (respuesta.ok) {
      juego = await respuesta.json();
    } else {
      console.error(`Error al obtener el juego: Código de estado ${respuesta.status}`);
    }
  } catch (error) {
    console.error("Error en obtener el juego por ID:", error);
  }
  return juego;
};

export default getJuegoPorId;
