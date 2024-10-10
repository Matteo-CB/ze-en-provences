import React from "react";
import Logo from "./Logo";
import Navigation from "./Nav/Navigation";
import Image from "next/image";
import Hamburger from "./Hamburger";
import { navBurger } from "@/lib/data";

const Header = () => {
  return (
    <header className="px-5 py-1 flex justify-between border-b border-neutral-300">
      <Image src="/logo-t.webp" alt="Logo" width={80} height={80}></Image>
      <Navigation className=" hidden md:flex" />
      <Hamburger links={navBurger} />
    </header>
  );
};

export default Header;
