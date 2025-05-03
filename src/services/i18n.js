import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { 
        game_manager: "My Game Manager" 
        } 
    },
    es: { translation: { 
        game_manager: "Mi Gestor de juegos" 
        } 
    }
  },
  lng: "es",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;