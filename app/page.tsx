import Logements from "@/components/Accueil-Logement/Logements";
import Contact from "@/components/Contact";
import Review from "@/components/Review";
import CarouselHome from "./CarouselHome";
import Link from "next/link";

export default function Home() {
  
  return (
    <main className="min-h-[80vh]">
      <CarouselHome />

      <section className="text-center my-4 py-4 md:px-2">
        <h2 className="font-title mb-2 text-xl">Vos vacances à la carte !</h2>
        <p className="text-sm mx-6 mt-4 mb-6">
          Bienvenue chez ZE en Provence ! Nous vous proposons une expérience
          unique, mêlant confort, convivialité et authenticité provençale. Nos
          logements, soigneusement décorés et entièrement équipés, vous offrent
          un cadre idéal pour des vacances adaptées à vos envies. Détente,
          gastronomie, et moments inoubliables sous le soleil de Provence
          n'attendent plus que vous.{" "}
          <Link href="/about" className={"underline text-[#719f67]"}>
            En savoir plus sur nous
          </Link>
        </p>
      </section>
      <hr />
      <Review />
      <hr />
      <Logements />
      <hr />
      <Contact />
    </main>
  );
}
