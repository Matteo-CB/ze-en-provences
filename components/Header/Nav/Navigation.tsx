import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navBurger, navData } from "@/lib/data";
import { IoIosMail } from "react-icons/io";
import { FaAirbnb, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
const Navigation = ({ className }: any) => {
  return (
    <NavigationMenu className={" transition-all ease-in-out" + className}>
      <NavigationMenuList>
        {navData.map((item) => (
          <NavigationMenuItem
            key={item.title}
            className="hover:underline hover:text-[#88B47F] hover-text"
          >
            {item.links.length >= 1 ? (
              <>
                {" "}
                <NavigationMenuTrigger className="text-sm">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="py-1 px-2 flex flex-col outline-none bg-neutral-50  border-none max-w-[3000px]">
                  {navBurger.slice(4).map((link: any) => (
                    <NavigationMenuLink
                      className="py-1 text-sm px-1 hover:underline hover:text-[#88B47F] hover-text transition-all 
                      duration-300 ease-in-out
                      whitespace-nowrap"
                      key={link.href}
                      href={link.href}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                key={item.title}
                className={navigationMenuTriggerStyle()}
                href={item.url}
              >
                <span>{item.title}</span>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

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
          className="ml-4 mr-2 text-xl
      text-primary-foreground hover:text-[#88B47F] transition-all duration-300 cursor-pointer hover:scale-110 ease-in-out"
        />
      </Link>
      <Link href="https://wa.me/+33608905954" passHref target="_blank">
        <FaWhatsapp
          className="mx-2 text-xl
      text-primary-foreground hover:text-[#88B47F] transition-all duration-300 cursor-pointer hover:scale-110 ease-in-out"
        />
      </Link>
      <Link
        href="https://www.airbnb.fr/users/show/81387681"
        passHref
        target="_blank"
      >
        <FaAirbnb
          className="ml-1 text-xl
      text-primary-foreground hover:text-[#88B47F] transition-all duration-300 cursor-pointer hover:scale-110 ease-in-out"
        />
      </Link>
    </NavigationMenu>
  );
};

export default Navigation;
