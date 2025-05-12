import React from "react";
import Link from "next/link";
import { HoverBorderGradient } from "@/components/ui/borderbeams";
// import { BackgroundBeamsWithCollision } from "@/components/ui/backgroundbeams";
import { Button } from "@/components/ui/button";
import { LottieAnimation } from "./LottieAnimation";

const HeroSection = () => {
  return (
    // <BackgroundBeamsWithCollision>
      <section className="relative flex items-center justify-center mt-28">
        <div className="relative items-center flex flex-col justify-center w-full py-12 lg:py-20 ">
          {/* <BackgroundBeamsWithCollision> */}
            <div className="text-center relative z-30">
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
              <div className="mt-10 mb-8 flex flex-col sm:flex-row items-center justify-center gap-10">
                <Link href="https://app.jobalchemy.ai">
                  <Button
                    size="lg"
                    className="rounded-md font-normal text-base px-8 bg-[#9addd4]/80 hover:bg-[#9addd4] hover:text-[#232630] text-white"
                  >
                    <b>Join The Beta</b>
                  </Button>
                </Link>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="rounded-md font-normal text-base px-8 text-[#4a4a4a] dark:text-white border-[#e7b38c] hover:bg-[#e7b38c]/10"
                >
                  See How It Works
                </Button> */}
              </div>
              <div className="w-full mx-auto mt-4 mb-4 px-4 sm:px-6 lg:text-md text-[#4a4a4a] dark:text-gray-300">
                  <b>What&apos;s in a beta?</b>
                  <br />
                  <br />
                  <p className="text-center">
                    <span className="block sm:inline">Free Access: You&apos;ll get full, unlimited access during the beta. </span>
                    <br></br><span className="block sm:inline">Your Voice Matters: Your honest feedback will directly influence how JobAlchemy evolves. </span>
                    <span className="block sm:inline">Limited Spots: We&apos;re inviting only 1,000 early users to help us fine-tune our platform—because quality feedback matters.</span>
                  </p>
              </div>
            </div>
          {/* </BackgroundBeamsWithCollision> */}
          <div className="relative w-full pt-4 mt-8">
            <svg
              className="absolute inset-x-0 top-20 blur-3xl z-0"
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

            <div className="relative z-10">
              <LottieAnimation />
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
