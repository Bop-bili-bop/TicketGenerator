const Button = ({ children, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-red-400 text-center rounded-xl font-bold text-custom-neutral-900 py-4 cursor-pointer hover:bg-red-500"
    >
      {children}
    </button>
  );
};

export default Button;
