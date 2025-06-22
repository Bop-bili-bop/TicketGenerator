const Description = ({ children, className }) => {
  return (
    <h3 className={`text-neutral-200/80 text-center md:text-2xl text-xl ${className}`}>
      {children}
    </h3>
  );
};

export default Description;
