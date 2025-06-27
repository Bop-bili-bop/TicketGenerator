const Button = ({ children, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-[#F57463] flex justify-center items-center rounded-xl h-[54px] font-bold text-custom-neutral-900 py-4 cursor-pointer hover:bg-[#E1604F]"
    >
      {children}
    </button>
  );
};

export default Button;
