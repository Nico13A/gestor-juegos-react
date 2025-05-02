const Button = ({ children, className = "", onClick, ...rest }) => {
    return (
      <button className={className} onClick={onClick} {...rest}>
        {children}
      </button>
    );
};
  
export default Button;  