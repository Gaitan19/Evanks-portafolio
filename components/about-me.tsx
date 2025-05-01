import { Phone, Mail, Linkedin, Github } from "lucide-react";

import { dataAboutMe, dataSlider } from "@/data";

import Title from "./shared/title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
      <Title title="About me" subtitle="Get to know me" />

      <div className="grid md:grid-cols-2">
        <div className="py-12 md:py-0 flex items-center justify-center">
          {/* CAROUSEL */}
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="w-full max-w-xs h-fit"
          >
            <CarouselContent className="-mt-1 h-[200px]">
              {dataSlider.map((data) => (
                <CarouselItem key={data.id}>
                  <div className="flex items-center justify-center">
                    <Image
                      src={data.url}
                      alt="Image"
                      width={250}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div>
          <p className="my-8">
            {" "}
            Frontend & Backend Developer +2 years experience. Passionate about
            technology and software development, working with modern tools to
            create efficient and secure solutions. Outside the world of coding,
            I enjoy watching anime, reading manga, light novels, and manhwas,
            immersing myself in fascinating stories. I also like listening to
            music and exercising, always seeking a balance between mind and
            body.
          </p>

         
          <div className="flex flex-wrap justify-start gap-4">

            {/* Enlace de LinkedIn */}
            <Button asChild>
              <a
                href="https://www.linkedin.com/in/kenley-gaitan-evanks-0a2739363/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </Button>

            {/* Enlace de GitHub */}
            <Button asChild>
              <a
                href="https://github.com/Gaitan19"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} className="mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
