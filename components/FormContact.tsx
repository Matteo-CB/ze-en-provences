"use client";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { RiMailSendFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
function FormContact(): any {
  const [name, setName]: any = useState("");
  const [message, setMessage]: any = useState("");
  const [email, setEmail]: any = useState("");
  const [success, setSuccess]: any = useState(false);
  useEffect(() => {
    if (success) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [success]);
  const handleSubmit = (e: any): any => {
    e.preventDefault();

    // Send email using emailjs-com library
    // Replace the placeholders with your own email service details
    emailjs
      .send(
        "service_b8nf85a",
        "template_lf4crpx",
        {
          name: name,
          email: email,
          message: message,
        },
        "kHbCD03HDs39gDPE4"
      )
      .then(
        () => {
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="md:w-[80%] w-full max-w-[600px] text-center md:m-auto mb-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-start  gap-2 px-2 pb-8 max-w-[700px] md:m-auto"
      >
        <Label className="text-sm " htmlFor="name">
          Nom
        </Label>
        <Input
          id="name"
          type="text"
          className="rounded placeholder:italic  bg-neutral-100 border-neutral-500 placeholder:text-neutral-500 "
          placeholder="Entrez votre nom"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          required
        />
        <Label className="text-sm " htmlFor="mail">
          Email
        </Label>
        <Input
          id="mail"
          type="email"
          placeholder="Entrez votre email"
          className="rounded  placeholder:italic  bg-neutral-100 border-neutral-500 placeholder:text-neutral-500 "
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          required
        />

        <Label className="text-sm " htmlFor="message">
          Votre message
        </Label>
        <Textarea
          id="message"
          placeholder="Entrez votre message"
          className="rounded resize-none min-h-[150px]   placeholder:italic  bg-neutral-100 border-neutral-500 placeholder:text-neutral-500 "
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
          required
        />
        <div className="flex flex-col ">
          <Button
            type="submit"
            className="flex gap-2 items-center justify-center rounded bg-neutral-950 hover:bg-[#88B47F]   text-white hover:scale-105 transition-all "
          >
            Envoyer <RiMailSendFill />
          </Button>
        </div>
        {success && (
          <div className=" border-2  border-neutral-700  top-[50%] left-[50%]  bg-neutral-200 flex items-center justify-center w-[300px] h-[200px] md:h-[400px] md:w-[600px] text-center px-4 rounded-md text-sm fixed z-50 translate-x-[-50%] translate-y-[-50%]">
            <IoClose
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => setSuccess(false)}
            />
            <p>Votre message a bien été envoyé !</p>
          </div>
        )}
      </form>
    </div>
  );
}
export default FormContact;
