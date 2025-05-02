const Pie = () => {
    return (
        <div className="pie rounded-lg mt-8 bg-black text-white p-4 flex justify-between">
        <div className="redes w-1/2 flex flex-col justify-center items-center">
            <p>Facebook: Mi Gestor de juegos </p>
            <p>Twitter: miGestorJuegos</p>
            <p>Email: gestorjuegos@gmail.com</p>
        </div>
        <div className="logo w-1/2 flex justify-center items-center">
          <div className="w-1/4">
                {<img src="/imagenes/logo.png" alt="Logo" />}
          </div>
        </div>
      </div>
    );
  };
  
  export default Pie;