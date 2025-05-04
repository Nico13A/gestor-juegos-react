const Button = ({ texto, className = "", onClick, padding = "px-4 py-2", ...rest }) => {
  return (
      <button
          onClick={onClick}
          className={`${padding} ${className} rounded cursor-pointer`} 
          {...rest}
      >
          {texto}
      </button>
  );
};

export default Button;
