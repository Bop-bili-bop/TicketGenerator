import bgTicket from "../assets/images/pattern-ticket.svg";
import logoMark from "../assets/images/logo-mark.svg";
import iconGH from "../assets/images/icon-github.svg";
import avaratDefault from "../assets/images/image-avatar.jpg";

const Ticket = ({ ghUserName, fullName, ticketID }) => {
  return (
    <div className="relative w-[343px] h-[160px] sm:w-[600px] sm:h-[280px]">
      <img
        src={bgTicket}
        alt="ticket-pattern"
        className="-z-80 backdrop-blur-md "
      />
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-white flex items-start h gap-1">
        <img
          src={logoMark}
          alt="logo"
          className="w-7 h-7 sm:w-10 sm:h-10 sm:m-2 m-0 pt-2"
        />
        <div className="flex flex-col justify-around font-stretch-110%">
          <h4 className="text-2xl sm:text-[40px] font-bold pb-2">
            Coding Conf
          </h4>
          <p className="text-sm sm:text-lg text-custom-neutral-300">
            Jan 31, 2025 / Austin, TX
          </p>
        </div>
      </div>
      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex justify-between items-center gap-3">
        <img
          src={avaratDefault}
          alt="user-avatar"
          className="w-11 h-11 sm:w-20 sm:h-20 rounded-xl"
        />
        <div className="flex flex-col gap-1">
          <h5 className="text-xl sm:text-2xl font-medium text-white">
            {fullName || "Jonatan Kristof"}
          </h5>
          <div className="flex flex-row gap-1">
            <img src={iconGH} alt="github-icon" />
            <p className="text-sm sm:text-xl text-custom-neutral-300">
              {ghUserName || "@kristofhuistoff"}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 sm:right-4 flex items-center justify-center text-white">
        <span className="rotate-90 text-custom-neutral-500 text-xl sm:text-2xl">{ticketID || "#02344"}</span>
      </div>
    </div>
  );
};

export default Ticket;
