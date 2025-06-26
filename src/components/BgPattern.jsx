import patternSquigglyDesktop from "../assets/images/pattern-squiggly-line-bottom-desktop.svg";
import patternSquigglyTabletMobile from "../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg";

const BgPattern = ({ desktop }) => {
  return (
    <div
      className="absolute inset-0 z-10"
      style={{
        backgroundImage: `${desktop ? `url(${patternSquigglyDesktop})` : `url(${patternSquigglyTabletMobile})`}`,
      }}
    ></div>
  );
};

export default BgPattern;
