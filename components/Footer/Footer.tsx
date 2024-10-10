import React from "react";
import Logo from "../Header/Logo";
import { navData } from "@/lib/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" py-2 bg-neutral-200">
      <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 grid-cols-2 h-full">
        <div className="flex items-center justify-center flex-col gap-3">
          <ul className="flex flex-col gap-2">
            <h3 className="text-md py-1 font-semibold">Nos Pages</h3>
            {navData.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.url}
                  className="underline text-sm  transition-all hover:text-[#88B47F]"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li key={"Mentions légales"}>
              <Link
                href={"legal"}
                className="underline text-sm  transition-all hover:text-[#88B47F]"
              >
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>
        <div className=" hidden xl:flex items-center justify-center">
          <div className="w-[200px] h-[300px] bg-footer3 rounded"></div>
        </div>
        <div className=" hidden lg:flex items-center justify-center">
          <div className="w-[200px] h-[300px] bg-footer2 rounded"></div>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <div className="w-[200px] h-[300px] bg-footer rounded"></div>
        </div>
        <div className="flex items-center flex-col gap-20 justify-center">
          <Logo height={150} />
          <div className="flex flex-col gap-1 lg:gap-2">
            <small className=" block text-[0.7rem] md:text-xs italic font-semibold">
              &#169; 2024 Vacances en provence.
            </small>
            <small className=" block text-[0.65rem] md:text-xs ">
              Site réalisé par{" "}
              <Link
                className="underline hover:text-[#88B47F] transition-all italic font-semibold"
                href={"https://dlkdigitalagency.com"}
                target="_blank"
              >
                DLK Digital Agency
              </Link>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
