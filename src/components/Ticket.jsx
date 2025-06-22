import bgTicket from "../assets/images/pattern-ticket.svg";
import logoMark from "../assets/images/logo-mark.svg";
import iconGH from "../assets/images/icon-github.svg";

const Ticket = ({ ghUserName, fullName }) => {
  return (
    <div className="relative w-[343px] h-[160px] sm:w-[600px] sm:h-[280px]">
      <img
        src={bgTicket}
        alt="ticket-pattern"
        className="-z-80 backdrop-blur-md "
      />
      <div className="absolute top-5 left-5 text-white font-mono flex justify-between gap-2">
        <img
          src={logoMark}
          alt="logo"
          className="w-7 h-7 sm:w-10 sm:h-10 sm:m-2 m-0"
        />
        <div className="flex flex-col justify-between">
          <h4 className="text-2xl sm:text-[40px] font-bold">Coding Conf</h4>
          <p className="text-sm sm:text-lg text-custom-neutral-300 mt-2">
            Jan 31, 2025 / Austin, TX
          </p>
        </div>
      </div>
      <div className="absolute bottom-5 left-5 flex justify-between items-center gap-2">
        <div className="flex flex-col gap-1">
          <h5 className="text-xl font-medium text-white">
            {fullName || "Jonatan Kristof"}
          </h5>
          <div className="flex flex-row gap-1">
            <img src={iconGH} alt="github-icon" />
            <p className="text-sm sm:text-lg text-custom-neutral-300">
              {ghUserName || "@kristofhuistoff"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
