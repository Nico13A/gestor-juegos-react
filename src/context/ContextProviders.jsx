import FavoritosProvider from "./FavoritosContext/FavoritosProvider";

const ContextProviders = ({ children }) => (
  <FavoritosProvider>{children}</FavoritosProvider>
);

export default ContextProviders;
