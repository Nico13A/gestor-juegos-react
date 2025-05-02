import Button from "../Button/Button"
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";

const Header = () => {
  const navigate = useNavigate();
  const HandleMenu = (menu) => {
    let ruta;
    if (menu === "favoritos") {
      ruta = ROUTES.favoritos;
    } else if (menu === "detalles") {
      ruta = ROUTES.detalles.replace(":id", juego.id);  
    } else {
      ruta = ROUTES.home; 
    }
    navigate(ruta);
  };


  return (
    <header className="mb-4 rounded-lg bg-black text-white py-3 px-6 flex flex-col items-center">
    <h1 className="text-3xl font-bold mb-4">Mi Gestor de Juegos</h1>
        <nav className="w-full flex justify-center">
          <ul className="flex space-x-4 items-center">
            <li>
              <div className="flex items-center space-x-4">
                <img onClick={() => HandleMenu("home")} src="/imagenes/logo.png" alt="Logo" className="w-10 h-10 "/>
                <Button onClick={() => HandleMenu("home")} texto="Home" className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-500"/>
              </div>
            </li>
            <li>
              <Button onClick={() => HandleMenu("detalles")} texto="Detalle" className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-500"/>
            </li>
            <li>
              <Button onClick={() => HandleMenu("favoritos")} texto="Favorito" className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-500"/>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;