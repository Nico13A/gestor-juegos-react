import { useState, useEffect } from "react";
import getJuegoPorId from "../../services/getJuegoPorId";
import Card from "../../components/Card/Card"
import Header from "../../components/header/header";
import Pie from "../../components/pie/pie";
const Favoritos = () => {

const [juegos, setJuegos] = useState([]);
useEffect(() => {
    const idsFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    if (idsFavoritos.length > 0) {
        Promise.all(idsFavoritos.map((id) => getJuegoPorId(id)))
            .then((juegos) => setJuegos(juegos))
            .catch((error) => console.error("Error al obtener juegos favoritos:", error));
    }
}, []);
    console.log(juegos);
  
    return (
        <div>
            <Header/>
            {juegos.map((juego) => (
                <Card key={juego.id} juego={juego} />
            ))}
            <Pie/>
        </div>
    )
  };
export default Favoritos