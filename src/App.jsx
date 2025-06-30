import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import InputField from "./components/InputField";
import Header from "./components/Header";
import Title from "./components/Title";
import Button from "./components/Button";
import Description from "./components/Description";
import Ticket from "./components/Ticket";
import BackgroundLayout from "./components/BackgroundLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import { ticketRegistrationInfo } from "../validations/formValidation";
import { generateTicketID } from "../utils/utils";


function App() {
  const [formData, setFormData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
  return (
    <div className="relative min-h-screen">
      <BackgroundLayout/>
      {!isSubmitted ? (
        <>
          <div className="flex flex-col justify-center items-center px-2">
            <Header className="mt-4 mb-4 sm:mb-2">Coding Conf</Header>
            <Title className="mb-4">
              Your Journey to Coding Conf 2025 Starts Here!
            </Title>
            <Description className="mb-2 sm:mb-[25px]">
              Secure your spot at next year's biggest coding conference.
            </Description>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full max-w-md mx-auto px-6 rounded-xl flex flex-col gap-4 mt-2"
          >
            <InputField
              name="photoAvatar"
              label="Upload Avatar"
              id="photo-avatar"
              setValue={setValue}
              hint="Upload your photo (JPG or PNG, max size: 500KB)."
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
          <Header className="mt-5 mb-8 sm:mb-12">Coding Conf</Header>
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
