const Title = ({children, className}) => {
  return (
    <h2 className={`text-white font-extrabold sm:text-6xl text-3xl text-center max-w-sm sm:max-w-4xl hyphens-auto ${className}`}>
      {children}
    </h2>
  );
};

export default Title;
