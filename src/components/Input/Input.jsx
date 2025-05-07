const Input = ({
    value,
    onChange,
    onKeyDown,
    placeholder = "Escribe aquí...",
    className = ""
}) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            className={`w-full h-10 px-4 border border-gray-300 bg-[#F4F9FC] text-gray-600 rounded-md shadow-sm text-sm focus:outline-none ${className}`}
        />
    );
};

export default Input;

