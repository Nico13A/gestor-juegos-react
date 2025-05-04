const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="h-auto p-8 bg-gray-950 text-gray-400 flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-sm space-y-2 md:space-y-1 tracking-wider font-light">
        <p className="hover:text-white transition-colors duration-200">
          Facebook: <span className="font-medium">PlayCave</span>
        </p>
        <p className="hover:text-white transition-colors duration-200">
          Twitter: <span className="font-medium">PlayCave</span>
        </p>
        <p className="hover:text-white transition-colors duration-200">
          Email: <span className="font-medium">playcave@gmail.com</span>
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
        <img
          onClick={scrollToTop}
          src="/imagenes/logo.png"
          alt="Logo"
          className="max-h-24 object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
          title="Volver arriba"
        />
      </div>
    </footer>
  );
};

export default Footer;
