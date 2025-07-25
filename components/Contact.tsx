import React from "react";
import FormContact from "./FormContact";

const Contact = () => {
  return (
    <section className="text-center pt-4" id="contact">
      <h2 className="italic font-semibold text-lg">Contactez-nous</h2>
      <p className="lg:text-sm  text-neutral-600 m-auto  max-w-[1000px] sm:max-w-[1300px]  pb-5 md:w-[80%] py-2 text-xs md:text-md   ">
        Contactez-nous via ce formulaire ou via l'adresse mail :{" "}
        <a
          className="underline text-neutral-900 hover:text-[#88B47F] transition"
          href="mailto:sandie.vicente@orange.fr"
        >
          sandie.vicente@orange.fr
        </a>{" "}
        et le numéro :{" "}
        <a
          className="underline text-neutral-900 hover:text-[#88B47F] transition"
          href="https://wa.me/+33608905954"
        >
          06.08.90.59.54
        </a>
      </p>
      <FormContact />
    </section>
  );
};

export default Contact;
