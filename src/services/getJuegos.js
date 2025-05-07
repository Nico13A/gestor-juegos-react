import { getGamesUrl } from "../const/api.js";

const getJuegos = async (pagina = 1, search = "") => {
  let juegos = [];
  let total = 0;
  try {
    const respuesta = await fetch(getGamesUrl(pagina, search, search !== ""));
    if (respuesta.ok) {
      const datos = await respuesta.json();
      juegos = datos.results;
      total = datos.count;
    } else {
      console.error(`Error al obtener los juegos: Código de estado ${respuesta.status}`);
    }
  } catch (error) {
    console.error("Error en obtener los juegos:", error);
  }
  return { juegos, total };
};

export default getJuegos;
