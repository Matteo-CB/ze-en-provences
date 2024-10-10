import { logements } from "@/lib/logements";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Logements = () => {
  const truncateDescription = (description: string) => {
    if (description.length > 200) {
      return description.substring(0, 200) + "...";
    }
    return description;
  };

  return (
    <section
      id="logements"
      className="bg-[#efebe1] justify-center items-center px-4 flex flex-col gap-6 py-8"
    >
      {logements.map((logement: any, index: any) => (
        <div
          key={index}
          className="logements flex flex-col justify-center   max-w-[600px] w-[95%] sm:w-[90%] md:w-[80%] min-w-[380px]  bg-neutral-50 rounded-xl ombre"
        >
          <div className="p-4 flex gap-4 flex-col">
            <div className="w-full h-[400px] overflow-hidden rounded-[10px] flex justify-center items-center">
              <img
                src={logement.images[0]}
                alt="logement"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div>
              <div className="flex items-center justify-between gap-2 pb-3">
                <p className="text-md md:text-lg font-semibold italic py-3">
                  {logement.nom + " - " + logement.ville}
                </p>{" "}
                <Button
                  asChild
                  variant={"outline"}
                  className="rounded  hover:scale-105 hover:border-[#719f67] hover:text-[#719f67] transition-all  border-2 border-neutral-600 text-neutral-600 "
                >
                  <Link href={logement.link}>Voir le logement</Link>
                </Button>
              </div>
              <p className="text-xs md:text-sm text-neutral-600 max-w-[800px]">
                {truncateDescription(logement.description)}{" "}
                <Link
                  className="text-[#719f67] underline hover:text-neutral-900 transition"
                  href={""}
                >
                  En savoir plus
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {logement.equipements
                .slice(0, 10)
                .map((equipement: any, index: any) => (
                  <span
                    key={index}
                    className="flex justify-center items-center text-[0.7rem] md:text-xs text-neutral-600 px-2 py-1 rounded-xl border font-semibold hover:bg-neutral-100 transition italic"
                  >
                    {equipement}
                  </span>
                ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Logements;
