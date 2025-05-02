const Button = ({ texto,children, className = "", onClick, ...rest }) => {
    return (
      <button className={className} onClick={onClick} {...rest}>
        {children}
        {texto}
      </button>
    );
};
  
export default Button;  