import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LanguageSwitch from "./LanguageSwitch";

type Props = {};

export default function TheMenu({}: Props) {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  return (
    <div
      className={`flex flex-col-reverse gap-5 items-end sm:items-center sm:flex-row ${
        menu ? "mt-[55px] sm:mt-0" : "mt-0"
      }`}
    >
      <div className="hidden text-white md:flex gap-4 -mr-24">
        <Link href="/invite">Invite</Link>
        <Link href="/issuer">Issuer</Link>
        <Link href="/verifier">Verifier</Link>
      </div>
      <div
        className={`mr-3 sm:mr-10 ${menu ? "block" : "hidden"} md:hidden z-10`}
      >
        <LanguageSwitch />
      </div>

      {menu && (
        <div className=" bg-blue-sits-iam-dark w-full h-screen absolute top-0 left-0 flex justify-center md:hidden">
          <div className="text-white absolute top-[130px] w-[95%] flex flex-col gap-5 justify-center items-center mx-auto">
            <div className="w-full flex flex-col gap-5">
              <Link href="/invite" className="ml-5">
                Invite
              </Link>
              <div className="h-[2px] w-full bg-gradient-to-r from-yellow-sits-dark to-white" />
            </div>
            <div className="w-full flex flex-col gap-5">
              <Link href="/issuer" className="ml-5">
                Issuer
              </Link>
              <div className="h-[2px] w-full bg-gradient-to-r from-yellow-sits-dark to-white" />
            </div>
            <div className="w-full flex flex-col gap-5">
              <Link href="/verifier" className="ml-5">
                Verifier
              </Link>
              <div className="h-[2px] w-full bg-gradient-to-r from-yellow-sits-dark to-white" />
            </div>
          </div>
        </div>
      )}

      <div
        onClick={(e) => toggleMenu()}
        className="z-50 flex flex-col gap-2 md:hidden bg-[#0C2F48] p-[10px] py-[12px] mr-4 w-[50px]"
      >
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{ rotate: menu ? -45 : 0, y: menu ? 10 : 0 }}
            className={
              menu
                ? "h-[2px] w-[30px] bg-gray-400"
                : "h-[2px] w-[30px] bg-white"
            }
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{ opacity: menu ? 0 : 1 }}
            transition={{ duration: 0.1 }}
            className={
              menu
                ? "h-[2px] w-[30px] bg-gray-400"
                : "h-[2px] w-[30px] bg-white"
            }
          />
        </motion.div>

        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{
              rotate: menu ? 45 : 0,
              y: menu ? -10 : 0,
            }}
            className={
              menu
                ? "h-[2px] w-[30px] bg-gray-400"
                : "h-[2px] w-[30px] bg-white"
            }
          />
        </motion.div>
      </div>
    </div>
  );
}
