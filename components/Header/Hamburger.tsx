"use client";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { FaAirbnb, FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

import Image from "next/image";
type HamburgerProps = {
  links: { name: string; href: string; id: number }[];
};

const Hamburger = ({ links }: HamburgerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handler = () => {
    if (false) {
      console.log("clicked");
    }
  };
  const handler2 = () => {
    setIsOpen(!isOpen);
    setIsChecked(!isChecked);
  };

  return (
    <div className="relative hambur z-10 md:hidden px-2 flex items-center">
      <Link href="mailto:sandie.vicente@orange.fr" passHref target="_blank">
        <IoIosMail
          className="ml-4 text-xl
      text-primary-foreground hover:text-[#88B47F] transition-all duration-300 cursor-pointer hover:scale-110 ease-in-out"
        />
      </Link>
      <Link
        href="https://www.instagram.com/ze_en_provence/"
        passHref
        target="_blank"
      >
        <FaInstagram
          className="ml-4 text-xl
      text-primary-foreground hover:text-[#88B47F] transition-all duration-300 cursor-pointer hover:scale-110 ease-in-out"
        />
      </Link>
      <Link href="https://wa.me/+33608905954" passHref target="_blank">
        <FaWhatsapp
          className="ml-4 text-xl
      text-primary-foreground hover:text-[#88B47F] transition-all duration-300 cursor-pointer hover:scale-110 ease-in-out"
        />
      </Link>

      <Link
        href="https://www.airbnb.fr/users/show/81387681"
        passHref
        target="_blank"
      >
        <FaAirbnb
          className="ml-4 mr-4 text-xl
      text-primary-foreground hover:text-[#88B47F] transition-all duration-300 cursor-pointer hover:scale-110 ease-in-out"
        />
      </Link>
      <form>
        <input
          type="checkbox"
          className="hidden"
          id="hamburgerInput"
          checked={isChecked}
          onChange={handler}
        />
        <label
          onClick={handler2}
          htmlFor="hamburgerInput"
          className={
            !isOpen
              ? "relative max-w-[1.2rem] h-[0.7rem] w-[1.2rem] max-h-[0.7rem] min-w-[1.2rem] min-h-[0.7rem]  justify-center  flex flex-col toggle"
              : "relative max-w-[1.2rem] h-[1.2rem] w-[1.2rem] max-h-[1.2rem] min-w-[1.2rem] min-h-[1.2rem] justify-center  flex flex-col toggle"
          }
        >
          {!isOpen ? (
            <Image
              className="  cursor-pointer"
              src="/hamburger.svg"
              alt="hamburger"
              height="25"
              width="25"
            />
          ) : (
            <Image
              className=" cursor-pointer"
              src="/close.svg"
              alt="close"
              height="25"
              width="25"
            />
          )}
        </label>
      </form>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 right-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-md overflow-hidden">
            <div className="px-5 pt-1 flex items-center justify-between">
              <div className="-mr-2"></div>
            </div>
            <div
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div
                className=" w-[180px]   px-2 pt-1 pb-1 bg-gradient-to-tl bg-neutral-100  shadow-xl rounded border border-neutral-300 "
                role="none"
              >
                {links.map((link, index) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      onClick={handler2}
                      className={
                        links.length != index + 1
                          ? "flex items-center justify-between  py-2 m-0 rounded-md text-[0.7rem] font-medium  width-full px-1  hover:text-[#719f67] transition-all"
                          : "flex items-center justify-between  py-2 rounded-md m-0 relative  text-[0.7rem] font-medium width-full px-1  hover:text-[#719f67] transition-all"
                      }
                      role="menuitem"
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Hamburger;
