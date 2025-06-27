import patternLines from "../assets/images/pattern-lines.svg";
import patternSquigglyLineTop from "../assets/images/pattern-squiggly-line-top.svg";
import patternSquigglyLineBottomDesktop from "../assets/images/pattern-squiggly-line-bottom-desktop.svg";
import patternSquigglyLineBottomTabletMobile from "../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";
import patternCircle from "../assets/images/pattern-circle.svg"

const BackgroundLayout = () => {
  return (
    <div className="absolute inset-0 bg-cover bg-center -z-99 bg-hero-desktop md:bg-hero-tablet lg:bg-hero-desktop">
      <div
        className="absolute inset-0 bg-repeat-x opacity-70 -z-20"
        style={{ backgroundImage: `url(${patternLines})` }}
      ></div>
      <img
        src={patternSquigglyLineTop}
        alt="squiggly-line-top"
        className="absolute right-0 top-4 sm:top-8 w-36 md:w-md sm:w-62 "
      />
      <img
        className="absolute bottom-0 hidden lg:block"
        src={patternSquigglyLineBottomDesktop}
        alt="squiggly-line-bottom"
      />
      <img className="absolute bottom-0 lg:hidden" src={patternSquigglyLineBottomTabletMobile} alt="squiggly-line-bottom" />
      <img
        src={patternCircle}
        alt="pattern-circle"
        className="absolute top-4/7 left-4/7 hidden sm:inline"
      />
    </div>
  );
};

export default BackgroundLayout;
