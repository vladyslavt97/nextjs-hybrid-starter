"use client";
import React, { useEffect, useState } from "react";
import { PiGlobe } from "react-icons/pi";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useStore, StoreState } from "./State";

type Props = {};

export default function LanguageSwitch({}: Props) {
  const [openLanSwitch, setOpenLanSwitch] = useState<boolean>(false);
  const setLanguage = useStore((state: StoreState) => state.setLanguage);
  const language = useStore((state: StoreState) => state.language);
  const setLoaded = useStore((state: StoreState) => state.setLoaded);

  useEffect(() => {
    const browserLanguage = navigator.language;
    setLoaded(true);
    if (browserLanguage.includes("de")) {
      setLanguage("deu");
    } else {
      setLanguage("eng");
    }
  }, []);

  const engBio = () => {
    setLanguage("eng");
    setOpenLanSwitch(false);
  };

  const deuBio = () => {
    setLanguage("deu");
    setOpenLanSwitch(false);
  };

  return (
    <div className="text-md text-white relative">
      <div
        className="flex flex-row items-center"
        onClick={(e) => setOpenLanSwitch(!openLanSwitch)}
      >
        <PiGlobe color="white" size={35} />
        {!openLanSwitch ? (
          <MdOutlineKeyboardArrowDown color="white" size={25} />
        ) : (
          <MdOutlineKeyboardArrowUp color="white" size={25} />
        )}
      </div>
      {openLanSwitch && (
        <div className="absolute right-1 sm:top-16 bg-blue-sits-iam-dark">
          <h1
            className="border-white border-b-2 cursor-pointer w-[150px] p-3"
            onClick={(e) => deuBio()}
          >
            German
          </h1>
          <h1
            className="border-white border-b-2 cursor-pointer w-[150px] p-3"
            onClick={(e) => engBio()}
          >
            English
          </h1>
        </div>
      )}
    </div>
  );
}
