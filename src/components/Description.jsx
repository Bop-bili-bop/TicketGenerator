const Description = ({ children, className }) => {
  return (
    <h3 className={`text-neutral-200/80 text-center sm:text-2xl text-xl max-w-xs sm:max-w-3xl ${className}`}>
      {children}
    </h3>
  );
};

export default Description;
