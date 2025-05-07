const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

const API_BASE_URL = "https://api.rawg.io/api";

const API_URL_GAMES = `${API_BASE_URL}/games?key=${API_KEY}`;

export const getGameByIdUrl = (id) => `${API_BASE_URL}/games/${id}?key=${API_KEY}`;

export const getGamesUrl = (page = 1, search = "", exact = false) => {
    let url = API_URL_GAMES + `&page=${page}&page_size=18`;
    if (search) {
        url += `&search=${encodeURIComponent(search)}`;
        if (exact) {
            url += `&search_exact=true`;  
        }
    }
    return url;
};

