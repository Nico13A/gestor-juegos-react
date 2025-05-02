import Juegos from "../../components/Juegos/Juegos";
import Pie from "../../components/pie/pie"
import Header from "../../components/header/header";
const Home = () => {
    return (
        <div className="p-4">
            <Header/>
            <Juegos />
            <Pie/>
        </div>
    );
}

export default Home;
