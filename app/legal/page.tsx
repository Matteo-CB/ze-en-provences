import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="text-center h-[70vh]">
      <h1 className="md:text-4xl text-2xl font-semibold md:my-10 my-5 italic">
        Mentions légales
      </h1>
      <h2 className="text-lg md:text-xl font-semibold my-5 underline">
        Sci de la font du loup :
      </h2>
      <div className="flex flex-col text-sm md:text-lg gap-5 md:gap-10">
        <p>
          Forme juridique :{" "}
          <span className="italic">SCI, société civile immobilière</span>
        </p>
        <p>
          Siren : <span className="italic">904 380 771</span>
        </p>
        <p>
          Siret : <span className="italic">904 380 771 00017</span>
        </p>
        <p>
          Adresse postale :{" "}
          <span className="italic">
            2657 route de molleges CD 74 13550 Noves
          </span>
        </p>
        <p>
          Montat du capital : <span className="italic">2000€</span>
        </p>
        <Link
          href="mailto:sandie.vicente@orange.fr"
          className="italic underline text-neutral-900 hover:text-[#88B47F] transition "
          passHref
          target="_blank"
        >
          sandie.vicente@orange.fr
        </Link>
        <p className="italic">06 08 90 59 54</p>
      </div>
    </div>
  );
};

export default page;
