import Review from "@/components/Review";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="text-center px-4">
        <h1 className="font-semibold underline text-lg py-8">
          À propos de <span className="italic text-[#88B47F]">ZE</span>
        </h1>
        <div className="flex text-sm flex-col gap-8 pb-8">
          <p>
            Bonjour, Je m’appelle Sandie. Avec Benoit, mon conjoint et nos deux
            filles, nous sommes tous nés en Provence et sommes très attachés à
            ce territoire.
          </p>
          <p className="italic">Pourquoi nous l’aimons autant ?</p>

          <p>
            D’abord ce sont les liens familiaux, amicaux qui font que nous ne
            pourrions être heureux ailleurs. Ensuite, parce qu’il règne en
            Provence une ambiance qui est à la détente quelle que soit la saison
            et que l’on ne retrouve nulle part ailleurs. Les hivers restent doux
            et la période de noël avec les décorations les marchés et les
            crèches provençales vous ramènent en enfance. Vous ne pouvez pas
            venir sans gouter aux 13 desserts de noël. De mars à juin et de
            septembre à novembre les températures sont idéales pour ceux qui
            souhaitent visiter la Provence en toute tranquillité. Avec un climat
            Méditerranéen, le soleil est omniprésent et rend l’air doux et
            réconfortant ; Les petits villages typiques avec chacun leur
            placette, leurs ruelles et leurs petits commerces amènent forcément
            à flâner et se laisser aller. Vous trouverez toujours une
            boulangerie ou un joli marché proposant des spécialités culinaires à
            déguster, un café où s’attabler à l’ombre d’un platane ou d’un arbre
            fruitier. L’été tout ceci, accompagné du chant des cigales, vous
            remplira de joie.
          </p>
          <p>
            Vous l’avez compris, la gastronomie est également un point fort de
            notre belle Provence. Entre tapenade, bouillabaisse, aïoli... Et
            tartes aux fruits de saison colorés et sucrés à souhait sous notre
            beau soleil, les restaurants raffinés ne sont pas en reste.
          </p>
          <p>
            Le village de Noves est un point idéal pour se poser et découvrir la
            Provence. Situé au carrefour des bouches du Rhône et du Vaucluse,
            vous trouverez à 10 minutes en voiture, Avignon et Saint Remy de
            Provence et en 20 minutes vous serez dans les Alpilles ou le
            Luberon. Vous serez aussi à proximité de l'Isle sur la Sorgue, la
            fontaine du Vaucluse, Eygalières, le Colorado Provençal, Gordes, Aix
            en Provence, Marseille et nous sommes à seulement 45 minutes des
            Saintes Maries de la mer et de la Camargue.
          </p>
          <p>
            Je pense que je vous ai convaincu ! Vos prochaines vacances seront à
            Noves en Provence ! Mais alors, pourquoi chez nous ?
          </p>
          <p className="italic">Un peu d’histoire….</p>
          <p className="italic">
            La création de “<span className="italic text-[#88B47F]">ZE</span>”
            en Provence: Pourquoi “
            <span className="italic text-[#88B47F]">ZE</span>” ?
          </p>
          <p>
            En Provençal, “<span className="italic text-[#88B47F]">ZE</span>”
            est très utilisé de façon familière quand on aborde quelqu’un que
            l’on connait bien ou même quelquefois à peine : “Oh Zé, qu’est-ce
            que tu fais là ?”. C’est pour nous, une manière de créer une
            certaine convivialité avec les vacanciers que nous allons recevoir
            en montrant l’esprit de proximité entre vous et nous. De plus, “
            <span className="italic text-[#88B47F]">ZE</span>” est un clin d’œil
            à nos deux filles car ce sont les deux initiales de leurs prénoms. «{" "}
            <span className="italic text-[#88B47F]">ZE</span> en Provence » est
            né d’une longue réflexion autour de ma réorientation
            professionnelle.
          </p>
          <p>
            Après 18 années de travail dans le champ du Médico-Social en qualité
            d’Aide-soignante puis d’Assistante-Sociale en protection de
            l’enfance, j’ai voulu continuer à prendre soin des autres mais sous
            une autre forme. La notion de “faire plaisir” est au centre de ce
            concept. En parallèle de nos activités professionnelles, nous avions
            des projets immobiliers, ma réorientation professionnelle s’est
            dessinée au fil des mois. Depuis toujours, j’ai un attrait pour la
            décoration et les choses bien faites. De nature chaleureuse, lorsque
            je reçois, je suis généreuse et souhaite, avant toute chose, que mes
            invités se sentent “comme chez eux”. Au travers de nos trois
            logements, nous avons souhaité transmettre cela et nous espérons que
            vos demandes et souhaits soient comblés.
          </p>
          <p className="italic font-semibold underline">Nos points forts :</p>
          <p>
            Tous nos logements sont soignés et propres, ils proposent tout le
            confort dont vous avez besoin (je ne suis pas la seule à le dire,
            tous nos vacanciers l’ont approuvé et écrit). Mais aussi parce que
            nous pouvons vous proposer des vacances « à la carte ». Envie d’un
            brunch ? d’un massage ? d’un chef cuisto ? d’un bouquet de fleurs ?
            d’une bouteille de champagne ? D’aide pour organiser un enterrement
            de vie de jeunes filles ou de garçons? un anniversaire en petit
            comité ? Nous pouvons vous aider à réaliser tout ceci. Notre point
            fort est nos trois logements. Vous pouvez venir de 1 à 6 personnes
            dans chacune des deux maisons situées à la font du loup dans la
            nature. Le fait qu’elles soient voisines vous permet de venir à 12
            personnes en préservant votre intimité. Vous pouvez même venir de 1
            à 8 personnes dans la maison du Rougadou et nous pouvons accueillir
            des groupes de 20 personnes en vous proposant les 3 maisons. La
            maison du Rougadou et sa superbe piscine peut être le lieu de
            regroupement de vos journées farniente. Elle se situe à 3 minutes en
            voiture des deux autres logements.
          </p>
          <p>
            Alors convaincu ? Si oui contactez moi via{" "}
            <Link className="underline text-[#88B47F]" href={"/#contact"}>
              ce site
            </Link>{" "}
            ou au 06.08.90.59.54
          </p>
          <p className="italic">A bientôt ,</p>
          <p className="italic">Sandie</p>
        </div>
      </section>
      <Review />
    </>
  );
};

export default page;
