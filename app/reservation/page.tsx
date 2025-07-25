import Contact from "@/components/Contact";
import { LoginForm } from "./Card";

const page = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="text-center flex flex-col">
          <h1 className=" text-3xl italic font-title  text-center my-10">
            Tarifs
          </h1>
          <LoginForm
            villa="Villa Picasso"
            tarif="140€"
            pleine="180€"
            link="/logements/rougadou"
            desc="À Noves, 3 chambres climatisées, jacuzzi, nature."
          />
          <LoginForm
            villa="Villa du Rougadou"
            tarif="400€"
            pleine="500€"
            link="/logements/noves"
            desc="Maison calme, 4 chambres, vue Alpilles, près Avignon."
          />
        </div>
      </div>
      <Contact />
    </>
  );
};

export default page;
