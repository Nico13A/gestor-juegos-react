/*
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Detalles from "./pages/Detalles/Detalles.jsx";
import Favoritos from "./pages/Favoritos/Favoritos.jsx";
import { ROUTES } from "./const/routes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.detalles} element={<Detalles />} />
        <Route path={ROUTES.favoritos} element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Detalles from "./pages/Detalles/Detalles.jsx";
import Favoritos from "./pages/Favoritos/Favoritos.jsx";
import { ROUTES } from "./const/routes";
import ContextProviders from "./context/ContextProviders.jsx";
import "./App.css";

function App() {
  return (
    <ContextProviders>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.detalles} element={<Detalles />} />
          <Route path={ROUTES.favoritos} element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
    </ContextProviders>
  );
}

export default App;
