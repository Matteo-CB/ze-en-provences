import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ height }: any) => {
  return (
      <Image
        src="/logo-t.webp"
        alt="Logo"
        width={height}
        height={height}
      ></Image>
  );
};

export default Logo;
