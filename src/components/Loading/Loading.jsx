const Loading = ({ mensaje = "Cargando..." }) => {
    return (
        <div className="flex flex-col items-center justify-center pt-10 text-[#090605]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid mb-4"></div>
            <span className="text-lg font-medium">{mensaje}</span>
        </div>
    );
};

export default Loading;
