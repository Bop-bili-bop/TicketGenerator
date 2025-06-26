const Title = ({children, className}) => {
  return (
    <h2 className={`text-white font-extrabold md:text-5xl sm:text-4xl text-3xl text-center max-w-sm sm:max-w-md md:max-w-2xl hyphens-auto ${className}`}>
      {children}
    </h2>
  );
};

export default Title;
