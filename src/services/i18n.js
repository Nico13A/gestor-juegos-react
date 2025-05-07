import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { 
        home:"Home",
        showing: "Showing", 
        of:"of",
        games:"games",
        favorites: "Favorites",
        games_list:"List of Favorite Games",
        page:"Page",
        previous:"Previous",
        next:"Next",
        see_details:"See details",
        game_not_found:"Game not found.",
        release_date:"Release date",
        users:"Users",
        description:"Description",
        show_less:"Show less",
        read_more:"Read more",
        no_search:"No games were found that match your search.",
        game_not_found:"Game not found.",
        search:"Search game...",
        error_getting_games:"Error getting favorite games:",
        dont_have_any_games :"You don't have any favorite games saved.",
        explore:"Explore and add games from the home page.",
        loading:"Loading "
        } 
        
    },
    es: { translation: { 
        home:"Inicio",
        showing: "Mostrando",
        of:"de",
        games:"Juegos",
        favorites: "Favoritos",
        games_list:"Lista de Juegos Favoritos",
        page:"Pagina",
        previous:"Anterior",
        next:"Siguiente",
        see_details:"Ver detalles",
        game_not_found:"Juego no encontrado.",
        release_date:"Fecha de lanzamiento",
        users:"Usuarios",
        description:"Descripcion",
        show_less:"Mostrar menos",
        read_more:"Ver mas",
        no_search:"No se encontraron juegos que coincidan con tu búsqueda.",
        game_not_found:"Juego no encontrado.",
        search:"Buscar juego...",
        error_getting_games:"Error al obtener juegos favoritos:",
        dont_have_any_games :"No tenés juegos favoritos guardados.",
        explore:"Explorá y agregá juegos desde la página principal.",
        loading:"Cargando..."
        } 
    }
  },
  lng: "es",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;