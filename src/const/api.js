export const API_KEY = "c963779517dc4a59a567edf619ae95cb";

export const API_BASE_URL = "https://api.rawg.io/api";

export const API_URL_GAMES = `${API_BASE_URL}/games?key=${API_KEY}`;

export const getGameByIdUrl = (id) => `${API_BASE_URL}/games/${id}?key=${API_KEY}`;

export const getGamesUrl = (page = 1, search = "", exact = false) => {
    let url = `${API_BASE_URL}/games?key=${API_KEY}&page=${page}&page_size=18`;
    if (search) {
        url += `&search=${encodeURIComponent(search)}`;
        if (exact) {
            url += `&search_exact=true`;  
        }
    }
    return url;
};

