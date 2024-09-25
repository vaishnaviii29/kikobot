"use client";
import { chivo, readexPro } from "@/app/fonts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Cursor from "./cursor";

const Mission = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          toggleActions: "play pause resume reset",
        },
      }
    );

    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      duration: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom", 
        end: "bottom 20%", 
        toggleActions: "play pause resume reset", 
      },
    });
  }, []);
  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center space-y-2 md:space-y-4 max-w-5xl mx-auto"
    >
      <h2
        className={`text-heading ${chivo.className} text-base md:text-xl font-normal flex items-center `}
      >
        Our Mission
        <div ref={cursorRef}>
          <Cursor />
        </div>
      </h2>
      <p
        className={`${readexPro.className} text-xl md:text-3xl font-extralight text-center max-w-5xl `}
      >
        To deliver innovative, adaptable robotic solutions that enhance
        productivity and drive automation across industries.
      </p>
    </section>
  );
};

export default Mission;
