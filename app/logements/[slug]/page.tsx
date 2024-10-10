import React from "react";
import HomeLogement from "./HomeLogement";
import { logements } from "@/lib/logements";

// Cette fonction prérend les pages statiques pour chaque slug
export async function generateStaticParams() {
  return logements.map((logement) => ({
    slug: logement.link.split("/logements/")[1],  // Extraire le slug du lien
  }));
}

const Page = ({ params }: any) => {
  // Utiliser params.slug pour trouver la villa correspondante
  const villa = logements.find(
    (v) => v.link.split("/logements/")[1] === params.slug
  );

  return (
    <div>
      {/* On passe les détails du logement à HomeLogement */}
      <HomeLogement villa={villa} />
    </div>
  );
};

export default Page;
