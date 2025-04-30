import { useEffect, useState } from "react";

const Juegos = () => {
    const [juegos, setJuegos] = useState([]);

    const getJuegos = async () => {
        const responseJuegos = await fetch(
            "https://api.rawg.io/api/games?key=c963779517dc4a59a567edf619ae95cb"
        );
        const dataJuegos = await responseJuegos.json();
        setJuegos(dataJuegos.results);
        console.log(dataJuegos.results);
    };

    useEffect(() => {
        getJuegos();
    }, []);

    return (
        <div>
            <h2>Lista de Juegos</h2>
            <ul>
                {juegos.map((juego) => (
                    <li key={juego.id}>
                        {juego.name}
                        <img src={juego.background_image} alt={juego.id} width="200px"/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Juegos;
