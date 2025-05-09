import { useState,useEffect } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "../../services/i18n";

const Header = () => {
  const navigate = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const idioma=localStorage.getItem("idioma") || "es";
  const { t }= useTranslation();

  const handleMenu = (menu) => {
    const ruta = menu === "favoritos" ? ROUTES.favoritos : ROUTES.home;
    navigate(ruta);
    setMenuAbierto(false);
  };

  return (
    <header className="sticky top-0 mb-4 bg-gray-950 text-white px-8 h-32 flex items-center justify-between z-50">

      <div className="flex items-center space-x-4">
        <img
          onClick={() => handleMenu("home")}
          src="/imagenes/logo.png"
          alt="Logo"
          className="w-10 h-10 cursor-pointer"
        />
        <h1 className="text-4xl font-bold tracking-widest hidden md:block">PlayCave</h1>
      </div>

      <div className="md:hidden relative">
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="cursor-pointer"
        >
          {menuAbierto ? <X size={32} /> : <Menu size={32} />}
        </button>

        {menuAbierto && (
          <div className="absolute right-0 top-full bg-gray-900 p-4 rounded-lg shadow-lg space-y-3 w-40 z-50">
            <Button
              onClick={() => handleMenu("home")}
              texto={t("home")}
              className="text-white font-medium bg-gray-700 hover:bg-gray-500 rounded-lg w-full"
            />
            <Button
              onClick={() => handleMenu("favoritos")}
              texto={t("favorites")}
              className="text-white font-medium bg-gray-700 hover:bg-gray-500 rounded-lg w-full"
            />
            <select value={idioma}
              name="idioma"
              className="text-white font-medium bg-gray-700 hover:bg-gray-500 cursor-pointer rounded-lg px-4 py-2 leading-none h-[40px] w-full"
              onChange={(e) => {
                const nIdioma=e.target.value;
                i18n.changeLanguage(nIdioma);
                localStorage.setItem("idioma",nIdioma)
                } 
              }>
              <option value="es">Español</option>
              <option value="en">Inglés</option>
            </select>
          </div>
        )}
      </div>

      <nav className="hidden md:block">
        <ul className="flex space-x-4 items-center">
          <li>
            <Button
              onClick={() => handleMenu("home")}
              texto={t("home")}
              className="text-white font-medium bg-gray-700 hover:bg-gray-500 rounded-lg"
            />
          </li>
          <li>
            <Button
              onClick={() => handleMenu("favoritos")}
              texto={t("favorites")}
              className="text-white font-medium bg-gray-700 hover:bg-gray-500 rounded-lg"
            />
          </li>
          <li>
          <select value={idioma}
              name="idioma"
              className="text-white font-medium bg-gray-700 hover:bg-gray-500 cursor-pointer rounded-lg px-4 py-2 leading-none h-[40px]"
              onChange={(e) => {
                const nIdioma=e.target.value;
                i18n.changeLanguage(nIdioma);
                localStorage.setItem("idioma",nIdioma)
                }
              }>
              <option value="es">Español</option>
              <option value="en">Inglés</option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


