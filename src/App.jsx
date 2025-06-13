import React from "react";
import { useForm } from "react-hook-form";
import backgroundDesktop from "./assets/images/background-desktop.png";
import patternLines from "./assets/images/pattern-lines.svg";
import logoCompany from "./assets/images/logo-mark.svg";
import patternSquigglyLineTop from "./assets/images/pattern-squiggly-line-top.svg";
import InputField from "./components/InputField";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${backgroundDesktop})` }}
      >
        <div
          className="absolute inset-0 bg-repeat-x opacity-70"
          style={{ backgroundImage: `url(${patternLines})` }}
        ></div>
      </div>
      <div className="flex flex-col justify-center items-center px-2">
        <h1 className="text-white text-xl p-4 font-bold flex justify-center items-center">
          <img src={logoCompany} alt="company-logo" className="h-5 pr-4" />
          Coding Conf
        </h1>
        <h2 className="text-white font-bold text-4xl text-center max-w-lg mb-4 hyphens-auto">
          Your Journey to Coding Conf 2025 Starts Here!
        </h2>
        <h3 className="text-neutral-200/80 text-center text-xl max-w-lg">
          Secure your spot at next year's biggest coding conference.
        </h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <InputField 
         error='nigga'/>
      </form>
    </div>
  );
}

export default App;
