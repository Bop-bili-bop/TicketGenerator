import logoCompany from "../assets/images/logo-mark.svg";

const Header = ({ children, className }) => {
  return (
    <h1 className={`text-white text-xl  font-bold flex justify-center items-center ${className}`}>
      <img src={logoCompany} alt="company-logo" className="h-5 pr-4" />
      {children}
    </h1>
  );
};

export default Header;
