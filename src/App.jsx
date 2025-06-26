import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import patternLines from "./assets/images/pattern-lines.svg";
import patternSquigglyLineTop from "./assets/images/pattern-squiggly-line-top.svg";
import patternSquigglyLineBottomDesktop from "./assets/images/pattern-squiggly-line-bottom-desktop.svg";
import InputField from "./components/InputField";
import Header from "./components/Header";
import Title from "./components/Title";
import Button from "./components/Button";
import Description from "./components/Description";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Ticket from "./components/Ticket";
import BgPattern from "./components/BgPattern";

function App() {
  const [formData, setFormData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ticketRegistrationInfo = yup.object({
    photoAvatar: yup
      .mixed()
      .required("This field is required")
      .test(
        "fileSize",
        "File too large. Please upload a photo under 500KB",
        (value) => value?.[0]?.size <= 500 * 1024,
      )
      .test("fileType", "Unsupported file type (JPG or PNG)", (value) =>
        ["image/jpg", "image/png"].includes(value?.[0]?.type),
      ),
    fullName: yup
      .string("")
      .min(3, "Name should be atleast 3 characters long")
      .matches(/^[a-zA-Zа-яА-Я ]*$/, "Name can't contain numbers")
      .required(),
    email: yup.string().email().required(),
    githubUserName: yup
      .string()
      .test("starts-with-@", "Username must start with @", (value) =>
        value?.startsWith("@"),
      )
      .required(),
  });
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ticketRegistrationInfo),
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    setFormData(data);
    setIsSubmitted(true);
    console.log(data);
  };
  const generateTicketID = () => {
    const ticketStart = "#0";
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    return ticketStart + randomNumber;
  };
  console.log(patternSquigglyLineTop);
  return (
    <div className="">
      <div className="absolute inset-0 bg-cover bg-center -z-99 bg-hero-desktop md:bg-hero-tablet lg:bg-hero-desktop">
        <div
          className="absolute inset-0 bg-repeat-x opacity-70 -z-20"
          style={{ backgroundImage: `url(${patternLines})` }}
        ></div>
      </div>

      {!isSubmitted ? (
        <>
          <div className="flex flex-col justify-center items-center px-2">
            <Header>Coding Conf</Header>
            <Title className="mb-4">
              Your Journey to Coding Conf 2025 Starts Here!
            </Title>
            <Description className="mb-4 sm:mb-[25px]">
              Secure your spot at next year's biggest coding conference.
            </Description>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md mx-auto px-6 rounded-xl flex flex-col gap-4 mt-2"
          >
            <InputField
              name="photoAvatar"
              label="Upload Avatar"
              id="photo-avatar"
              setValue={setValue}
              error={errors.photoAvatar?.message}
              dragNDrop
            />
            <InputField
              label="Full Name"
              id="full-name"
              {...register("fullName")}
              error={errors.fullName?.message}
            />
            <InputField
              label="Email Address"
              id="email"
              {...register("email")}
              error={errors.email?.message}
            />
            <InputField
              label="Github Username"
              id="gh-user-name"
              {...register("githubUserName")}
              error={errors.githubUserName?.message}
            />
            <Button type="submit" onClick={handleSubmit}>
              Generate My Ticket
            </Button>
          </form>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center px-2">
          <Header>Coding Conf</Header>
          <Title className="mb-5 md:mb-8">
            Congrats,{" "}
            <span className="gradient-01">
              {formData.fullName || "Jonatan Kristof"}!
            </span>{" "}
            Your ticket is ready.
          </Title>
          <Description className="max-w-md md:mb-20 sm:mb-18 mb-14">
            We've emailed your ticket to{" "}
            <a
              href={`mailto:${formData.email || "jonatan@gmail.com"}`}
              className="text-[#F57463]"
            >
              {formData.email || "jonatan@gmail.com"}{" "}
            </a>
            and will send updates in the run up to the event.
          </Description>
          <Ticket
            ghUserName={formData.githubUserName}
            fullName={formData.fullName}
            ticketID={generateTicketID() || "#03412"}
          />
        </div>
      )}
    </div>
  );
}

export default App;
