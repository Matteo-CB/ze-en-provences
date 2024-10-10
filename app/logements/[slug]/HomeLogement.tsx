"use client";
import React from "react";
import CarouselLogement from "./CarouselLogement";
import { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Review from "@/components/Review";

const HomeLogement = ({ villa }: any) => {
  if (!villa) {
    return <p>Logement non trouvé</p>; // Gestion des erreurs si la villa n'est pas trouvée
  }

  const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };

  return (
    <>
      <div
        className="w-full h-[30vh] md:h-[50vh] relative"
        style={{
          background: `url(${villa.images[0]}) center/cover`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 opacity-50"></div>
      </div>
      <div className="bg-neutral-50">
        <h1 className=" text-lg italic font-title text-[#719f67] text-center pt-4 pb-2">
          {villa.nom}
        </h1>
        <p className="text-xs md:text-sm text-center font-title text-neutral-500 font-light pb-4">
          {villa.personnes +
            " personnes - " +
            villa.lits +
            (villa.lits > 1 ? " lits" : " lit") +
            " - " +
            villa.ville +
            " - " +
            villa.m2 +
            "m²"}
        </p>
        <p className="pt-2 pb-8 text-center text-xs lg:text-sm px-5 text-neutral-800">
          {villa.description}{" "}
          <Link
            className="underline text-[#719f67]"
            href={villa.airbnb}
            target="_blank"
          >
            En savoir plus
          </Link>
        </p>
      </div>

      <div className="flex w-full justify-center gap-10 py-8 bg-[#efebe1]">
        <Button
          asChild
          className="rounded text-neutral-50 hover:scale-105 hover:bg-[#719f67] transition-all"
        >
          <Link href={villa.airbnb} target="_blank">
            Réserver le logement
          </Link>
        </Button>
        <Button
          asChild
          className="rounded bg-neutral-50 hover:bg-neutral-200 hover:scale-105 transition-all text-neutral-700"
        >
          <Link href={villa.livret_accueil} target="_blank">
            Voir le livret d'accueil
          </Link>
        </Button>
      </div>

      <div className="bg-[#719f67] text-white py-12 text-center mb-4">
        <h3 className="text-lg font-semibold">Adresse</h3>
        <p className="text-sm mt-2">
          {villa.adresse}, {villa.ville}, {villa.code_postal}
        </p>
      </div>
      <div className="w-full flex justify-center py-10">
        <CarouselLogement slides={villa.images} options={OPTIONS} />
      </div>
      <div className="px-5 pb-8 bg-neutral-100">
        <h2 className="text-center text-lg text-[#719f67] mb-4 font-title pt-4">
          Équipements
        </h2>
        <ul className="list-none text-neutral-800 text-sm">
          {villa.equipements.map((equipement: any, index: any) => (
            <li key={index} className="mb-1 flex items-center justify-center">
              <span className="text-[#719f67] mr-2">✔</span>
              {equipement}
            </li>
          ))}
        </ul>
      </div>
      <Review />
    </>
  );
};

export default HomeLogement;
