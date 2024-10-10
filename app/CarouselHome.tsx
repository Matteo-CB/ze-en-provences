'use client'
import BlurFade from '@/components/magicui/blur-fade'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


const images = [
"/carousel-image/1.webp",
"/carousel-image/2.webp",
"/carousel-image/3.webp",
"/carousel-image/4.webp",
"/carousel-image/5.webp",
"/carousel-image/6.webp",
"/carousel-image/7.webp",]
const CarouselHome = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-0 h-[45vh] md:h-[60vh] lg:h-[80vh] text-neutral-50 flex justify-center items-center">
       
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        <div className="flex flex-col gap-3 lg:gap-5 relative z-10">
          <BlurFade delay={0.8} inView>
            <div className="flex flex-col gap-1 lg:gap-3">
              <h1 className="text-2xl lg:text-4xl font-semibold">
                Vacances en provence
              </h1>
              <p className="lg:text-lg">
                Repos et sérénité entre alpilles et luberon.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.8 * 2} inView>
            <div className="flex gap-3 my-4">
              <Button
                asChild
                className="rounded hover:scale-105 hover:bg-[#719f67] transition-all"
              >
                <Link href="/#logements">Nos logements</Link>
              </Button>
              <Button
                asChild
                className="rounded bg-neutral-50 hover:bg-neutral-200 hover:scale-105 transition-all text-neutral-700"
              >
                <Link href="/#contact">Contactez-nous</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>
  )
}

export default CarouselHome
