const Button = ({ children}) => {
  return (
    <button className="bg-red-400 text-center rounded-xl font-bold text-custom-neutral-900 py-4 cursor-pointer hover:bg-red-500">
      {children}
    </button>
  );
};

export default Button;
