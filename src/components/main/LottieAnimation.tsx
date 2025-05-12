'use client';

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

export const LottieAnimation = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/hero-animation.json')
      .then(response => response.json())
      .then(data => setAnimationData(data));
  }, []);

  if (!animationData) return null;

  return (
    <div className="relative z-20 w-full px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto aspect-[900/470]">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: '100%' }}
          className="w-full h-full"
          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        />
      </div>
    </div>
  );
}; 