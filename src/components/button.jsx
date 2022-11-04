const Button = ({ ...rest }) => {
  return (
    <button className="btn--primary" {...rest}>
      <span className="material-symbols-outlined">search</span>
      search
    </button>
  );
};

export default Button;
