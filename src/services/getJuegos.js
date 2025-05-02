import { getGamesUrl } from "../const/api.js";

const getJuegos = async (pagina = 1) => {
  let juegos = null;
  try {
    const respuesta = await fetch(getGamesUrl(pagina));
    if (respuesta.ok) {
      const datos = await respuesta.json();
      juegos = datos.results;
    } else {
      console.error(`Error al obtener los juegos: Código de estado ${respuesta.status}`);
    }
  } catch (error) {
    console.error("Error en obtener los juegos:", error);
  }
  return juegos;
};

export default getJuegos;
