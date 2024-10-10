import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { reviews } from "@/lib/data";
import { IoIosStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { Button } from "./ui/button";

const Review = () => {
  const truncateDescription = (description: string) => {
    if (description.length > 200) {
      return description.substring(0, 200) + "...";
    }
    return description;
  };
  return (
    <>
      <section className="flex justify-center flex-col items-center select-none text-start bg-[#efebe1]">
        <Carousel
          opts={{
            align: "start",

            loop: true,
          }}
          className="w-[60%]  sm:w-full max-w-sm lg:max-w-[38rem] my-10"
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3 ">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-start gap-2 justify-start p-3  flex-col relative bg-neutral-50 rounded-xl">
                      <div className="flex justify-between items-center w-full">
                        <p className="text-sm font-semibold">{review.name}</p>
                        <p className="text-xs italic text-neutral-500">
                          {review.date}
                        </p>
                      </div>
                      <p className="text-[0.7rem]">
                        {truncateDescription(review.text)}
                      </p>
                      <div className=" flex items-center gap-1 absolute bottom-3">
                        {review.note === 5 ? (
                          <>
                            <IoMdStar className="text-yellow-400" />
                            <IoMdStar className="text-yellow-400" />
                            <IoMdStar className="text-yellow-400" />
                            <IoMdStar className="text-yellow-400" />
                            <IoMdStar className="text-yellow-400" />
                          </>
                        ) : review.note === 4 ? (
                          <>
                            <IoMdStar className="text-yellow-400" />
                            <IoMdStar className="text-yellow-400" />
                            <IoMdStar className="text-yellow-400" />
                            <IoMdStar className="text-yellow-400" />
                            <IoIosStarOutline className="text-yellow-400" />
                          </>
                        ) : review.note === 3 ? (
                          <>
                            <IoMdStar className="text-yellow-400" />
                            <IoMdStar className="text-yellow-400" />
                            <IoMdStar className="text-yellow-400" />
                            <IoIosStarOutline className="text-yellow-400" />
                            <IoIosStarOutline className="text-yellow-400" />
                          </>
                        ) : review.note === 2 ? (
                          <>
                            <IoMdStar className="text-yellow-400" />
                            <IoMdStar className="text-yellow-400" />
                            <IoIosStarOutline className="text-yellow-400" />
                            <IoIosStarOutline className="text-yellow-400" />
                            <IoIosStarOutline className="text-yellow-400" />
                          </>
                        ) : (
                          <>
                            <IoMdStar className="text-yellow-400" />
                            <IoIosStarOutline className="text-yellow-400" />
                            <IoIosStarOutline className="text-yellow-400" />
                            <IoIosStarOutline className="text-yellow-400" />
                            <IoIosStarOutline className="text-yellow-400" />
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <div className="flex justify-center w-full pt-6 pb-2">
        <Button
          asChild
          variant={"outline"}
          className="rounded  hover:scale-105 transition-all  border-2 border-neutral-700 text-neutral-700 mb-4 text-sm px-6 py-1 hover:border-[#719f67] hover:text-[#719f67] "
        >
          <a href="https://www.airbnb.fr/users/show/81387681" target="_blank">
            Voir tout les avis
          </a>
        </Button>
      </div>
    </>
  );
};

export default Review;
