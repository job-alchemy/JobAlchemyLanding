"use client";

import * as React from "react";
import Link from "next/link";
import { useAnimate } from "framer-motion";
import { ArrowRight, Users, Briefcase, Target, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  HighlighterItem,
  HighlightGroup,
  Particles,
} from "@/components/ui/highlighter";

export function CtaSection() {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    animate(
      [
        ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
        ["#job-matching", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 50, top: 102 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#job-matching", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#resume-optimization", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 224, top: 170 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        [
          "#resume-optimization",
          { opacity: 0.4 },
          { at: "-0.3", duration: 0.1 },
        ],
        ["#career-coaching", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 88, top: 198 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#career-coaching", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#interview-prep", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 200, top: 60 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#interview-prep", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      }
    );
  }, [animate]);

  return (
    <section className="relative mx-auto mb-20 mt-6 max-w-5xl">
      <HighlightGroup className="group h-full">
        <div
          className="group/item h-full md:col-span-6 lg:col-span-12"
          data-aos="fade-down"
        >
          <HighlighterItem className="rounded-3xl p-6">
            <div className="relative z-20 h-full overflow-hidden rounded-3xl  bg-card dark:bg-[#232630]">
              <Particles
                className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                quantity={200}
                color={"#9addd4"}
                vy={-0.2}
              />
              <div className="flex justify-center">
                <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
                  <div
                    className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]"
                    ref={scope}
                  >
                    <Briefcase className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-primary" />
                    <div
                      id="interview-prep"
                      className="absolute bottom-12 left-14 rounded-3xl border border-border bg-muted px-3 py-2 text-xs opacity-50 dark:border-border dark:bg-muted"
                    >
                      <Users className="inline mr-1 h-3 w-3" />
                      Interview Prep
                    </div>
                    <div
                      id="resume-optimization"
                      className="absolute left-2 top-20 rounded-3xl border border-border bg-muted px-3 py-2 text-xs opacity-50 dark:border-border dark:bg-muted"
                    >
                      <Target className="inline mr-1 h-3 w-3" />
                      Resume Optimization
                    </div>
                    <div
                      id="career-coaching"
                      className="absolute bottom-20 right-1 rounded-3xl border border-border bg-muted px-3 py-2 text-xs opacity-50 dark:border-border dark:bg-muted"
                    >
                      <Zap className="inline mr-1 h-3 w-3" />
                      Career Coaching
                    </div>
                    <div
                      id="job-matching"
                      className="absolute right-12 top-10 rounded-3xl border border-border bg-muted px-3 py-2 text-xs opacity-50 dark:border-border dark:bg-muted"
                    >
                      <Briefcase className="inline mr-1 h-3 w-3" />
                      Job Matching
                    </div>

                    <div id="pointer" className="absolute">
                      <svg
                        width="16.8"
                        height="18.2"
                        viewBox="0 0 12 13"
                        className="fill-primary"
                        stroke="white"
                        strokeWidth="1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                        />
                      </svg>
                      <span className="bg-primary relative -top-1 left-3 rounded-3xl px-2 py-1 text-xs text-primary-foreground font-medium">
                        JobAlchemy
                      </span>
                    </div>
                  </div>

                  <div className="-mt-20 flex h-full flex-col justify-center p-2 md:-mt-4 md:ml-10 md:w-[400px]">
                    <div className="flex flex-col items-center">
                      <h3 className="mt-6 pb-1 font-bold text-center">
                        <span className="text-2xl md:text-4xl text-foreground">
                          Ready to Transform Your Career?
                        </span>
                      </h3>
                    </div>
                    <p className="mb-4 text-muted-foreground text-center">
                      Join thousands of professionals who have accelerated their
                      careers with JobAlchemy. Get personalized job matching,
                      expert coaching, and AI-powered tools.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <Link href="https://app.jobalchemy.ai/signup">
                        <Button className="group cursor-pointer ">
                          Join Beta
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </div>
      </HighlightGroup>
    </section>
  );
}
