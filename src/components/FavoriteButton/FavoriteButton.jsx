import { Star } from "lucide-react";

const FavoriteButton = ({ isFavorite, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="text-yellow-500 hover:text-yellow-600 cursor-pointer"
            aria-label="Marcar como favorito"
        >
            <Star fill={isFavorite ? "currentColor" : "none"} />
        </button>
    );
};

export default FavoriteButton;
