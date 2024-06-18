"use client";
import React, { FormEvent, useEffect, useState } from "react";

type Props = {};

export default function page({}: Props) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (firstName === "" || lastName === "" || email === "" || phone === "") {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [firstName, lastName, email, phone]);

  const insertNewApplication = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/sendform", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
      }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    setFormSubmitted(true);
    console.log("should be okay");
    setFormSubmitted(true);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setTimeout(() => {
      setFormSubmitted(false);
    }, 6000);
  };

  const inputStyles =
    "border-b-2 border-logo-color rounded bg-gray-100 shadow-sm";
  const divStyles = "flex flex-col w-full";

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        className="flex flex-col justify-center items-center gap-2 sm:gap-6 my-5 sm:w-[600px]"
        onSubmit={insertNewApplication}
      >
        <div className={`${divStyles}`}>
          <label className="text-red-100">
            First Name <span className="text-gray-400 text-sm">(required)</span>
          </label>
          <input
            type="text"
            className={`${inputStyles}`}
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>

        <div className={`${divStyles}`}>
          <label className="text-red-100">
            Last Name <span className="text-gray-400 text-sm">(required)</span>
          </label>
          <input
            type="text"
            className={`${inputStyles}`}
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>

        <div className={`${divStyles}`}>
          <label className="text-red-100">
            Email <span className="text-gray-400 text-sm">(required)</span>
          </label>
          <input
            type="text"
            className={`${inputStyles}`}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={`${divStyles}`}>
          <label className="text-red-100">
            Phone Number{" "}
            <span className="text-gray-400 text-sm">(required)</span>
          </label>
          <input
            type="text"
            className={`${inputStyles}`}
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        {buttonDisabled && (
          <span className="text-red-100 text-sm text-center">
            * Please, fill out the required fields!
          </span>
        )}
        <button
          className={`text-center px-10 py-2 ${
            !buttonDisabled
              ? "bg-gradient-radial from-blue-sits-iam-dark to-petrol-sits-dark text-white hover:from-blue-sits-iam hover:to-blue-sits-light"
              : "bg-gray-400 cursor-not-allowed"
          } font-bold rounded-full border-gray-200 border-2 hover:border-yellow-sits-dark max-w-96 m-auto`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
