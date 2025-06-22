import logoCompany from "../assets/images/logo-mark.svg";

const Header = ({ children, className }) => {
  return (
    <h1 className="text-white text-xl mt-5 mb-10 sm:mb-[60px] font-bold flex justify-center items-center">
      <img src={logoCompany} alt="company-logo" className="h-5 pr-4" />
      {children}
    </h1>
  );
};

export default Header;
