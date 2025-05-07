import Juegos from "../../components/Juegos/Juegos";
import Pie from "../../components/Footer/Footer"
import Header from "../../components/Header/Header";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <Juegos/>
            <Pie/>
        </div>
    );
}

export default Home;
