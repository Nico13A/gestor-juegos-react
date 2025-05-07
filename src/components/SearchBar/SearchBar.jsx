import { Search } from "lucide-react";
import Input from "../Input/Input.jsx";
import { useTranslation } from "react-i18next";

const SearchBar = ({ value, onChange, onSearch }) => {
  const { t }=useTranslation();
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="bg-[#9ecfe7] p-4 max-w-md mx-auto flex items-center my-8 rounded-md shadow-sm">
      <Input
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={t("search")}
      />
      <button
        onClick={onSearch}
        className="group cursor-pointer h-10 px-4 flex items-center justify-center border border-gray-300 bg-[#F4F9FC] text-gray-600 rounded-md hover:bg-gray-100 transition shadow-sm"
      >
        <Search className="w-5 h-5 text-gray-600 group-hover:text-blue-500 transition-colors" />
      </button>
    </div>
  );
};

export default SearchBar;


