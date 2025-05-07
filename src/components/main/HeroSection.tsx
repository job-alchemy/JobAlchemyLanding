import React from "react";
import Image from "next/image";
import { HoverBorderGradient } from "@/components/ui/borderbeams";
import { BackgroundBeamsWithCollision } from "@/components/ui/backgroundbeams";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center mt-28">
      <div className="relative items-center flex flex-col justify-center w-full py-12 lg:py-20 ">
        <BackgroundBeamsWithCollision>
          <div className="text-center">
            <div className="flex justify-center text-center">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-[#faf9f5] dark:bg-[#161618] text-[#4a4a4a] dark:text-white  flex items-center space-x-2"
              >
                <span>AI-Powered Job Applications</span>
              </HoverBorderGradient>
            </div>
            <h1 className="mt-8 text-[#4a4a4a] dark:text-white text-4xl font-semibold sm:text-6xl md:text-7xl tracking-tight lg:text-[4.5rem] leading-none">
              Automate Your Job Search
              
            </h1>
            <p className="max-w-2xl mx-auto mt-4 lg:text-lg text-[#4a4a4a] dark:text-gray-300">
              JobAlchemy creates tailored resumes for each position and automatically applies to jobs matching your profile across multiple platforms. Save hours of tedious work while maximizing your success rate.
            </p>
            <div className="mt-6 mb-12 flex flex-col sm:flex-row items-center justify-center gap-10">
              <Button size="lg" className="rounded-md font-normal text-base px-8 bg-[#9addd4] hover:bg-[#9addd4]/80 text-white ">
                Start Applying Now
              </Button>
              <Button size="lg" variant="outline" className="rounded-md font-normal text-base px-8 text-[#4a4a4a] dark:text-white border-[#e7b38c] hover:bg-[#e7b38c]/10">
                See How It Works
              </Button>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
        <div className="relative w-full">
          <svg
            className="absolute inset-0 -mt-24 blur-3xl z-0 "
            fill="none"
            viewBox="0 0 400 400"
            height="100%"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_10_20)">
              <g filter="url(#filter0_f_10_20)">
                <path
                  d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
                  fill="#9addd4"
                ></path>
                <path
                  d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
                  fill="#4a4a4a"
                ></path>
                <path
                  d="M320 400H400V78.75L106.2 134.75L320 400Z"
                  fill="#e7b38c"
                ></path>
                <path
                  d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
                  fill="#9addd4"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="720.666"
                id="filter0_f_10_20"
                width="720.666"
                x="-160.333"
                y="-160.333"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_10_20"
                  stdDeviation="80.1666"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>

          <Image
            src="/lightDash.png"
            alt="JobAlchemy Dashboard"
            width={1920}  
            height={1080}
            priority
            quality={100}
            className="relative dark:hidden z-20 object-cover w-full border rounded-lg shadow-2xl lg:rounded-2xl"
          />
          <Image
            src="/darkDash.png"
            alt="JobAlchemy Dashboard"
            width={1920}  
            height={1080}
            priority
            quality={100}
            className="relative hidden dark:block z-20 object-cover w-full border rounded-lg shadow-2xl lg:rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
