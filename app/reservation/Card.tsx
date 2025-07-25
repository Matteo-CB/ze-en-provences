"client";
import { TbSend2 } from "react-icons/tb";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TbHomeHeart } from "react-icons/tb";
import { ShineBorder } from "@/components/magicui/shine-border";
import Link from "next/link";

export function LoginForm({ villa, tarif, pleine, link, desc }: any) {
  return (
    <Card className="relative min-w-[350px] overflow-hidden mb-10 px-0">
      <ShineBorder shineColor={["#88B47F", "#8fe27f", "#54724e"]} />
      <CardHeader className="px-0">
        <CardTitle className="text-lg pb-1">{villa}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent className="px-3">
        <hr />
        <CardDescription className="italic text-xl font-semibold py-5">
          {villa == "Villa du Rougadou"
            ? tarif + " par nuit"
            : tarif + " par nuit"}
        </CardDescription>
        <hr />
        <CardDescription className="italic text-lg py-5">
          {pleine} en pleine saison
        </CardDescription>
        <hr />

        <CardFooter className="flex items-center justify-center  gap-3  min-w-full mt-5 p-0">
          <div className="flex gap-3">
            <Link
              href={"#contact"}
              className="flex gap-2 items-center justify-center  text-md font-semibold  rounded border-2 border-neutral-950 hover:border-[#88B47F] bg-neutral-950 hover:bg-[#88B47F]   text-white hover:scale-105 transition-all  py-2 px-3"
            >
              Contactez-nous
              <TbSend2 />
            </Link>
            <Link
              href={link}
              className="flex gap-2 items-center justify-center  text-md py-2 px-3 font-semibold  rounded bg-neutral-50 border-2 border-black     hover:scale-105  transition-all "
            >
              Voir la villa
              <TbHomeHeart />
            </Link>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
