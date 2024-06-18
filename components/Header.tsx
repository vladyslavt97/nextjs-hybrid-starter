"use client";
import TheMenu from "./TheMenu";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitch from "./LanguageSwitch";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="h-[100px] bg-blue-sits-iam-dark flex flex-row justify-between items-center border-white border-b-2">
      <Link href="/">
        <Image
          src="/SITS_LOGO_C_RGB.png"
          alt="logo"
          width={130}
          height={100}
          priority
          className="ml-3 object-cover -mt-2 w-auto h-[70px] z-20"
        />
      </Link>
      <h1 className="text-white font-bold md:text-lg text-center -ml-20">
        Digital Partner Verified ID
      </h1>
      <TheMenu />
      <div className="hidden md:flex flex-row justify-center items-center gap-2 mr-3">
        <div className=" h-[100px] w-[2px] bg-white" />
        <LanguageSwitch />
      </div>
    </div>
  );
}
