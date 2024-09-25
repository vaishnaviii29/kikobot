"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FeatureCard from "./FeatureCard";
import { features } from "@/utils";
import { chivo } from "@/app/fonts";
import Cursor from "./cursor";

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>(
    Array(features.length).fill(null)
  );
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;

    if (section) {
      // Staggered animation for grid items
      gsap.fromTo(
        featureRefs.current.filter(Boolean),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay: 1,
          ease: "power3.out",
          stagger: 0.3, // Staggered load for grid items
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            toggleActions: "play pause resume reset",
          },
        }
      );
    }

    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        duration: 0.5,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom 20%",
          toggleActions: "play pause resume reset",
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto flex flex-col items-center space-y-4 p-6 w-full"
    >
      <h2
        className={`text-heading ${chivo.className} text-base md:text-xl font-normal flex items-center`}
      >
        Our Products
        <div ref={cursorRef}>
          <Cursor />
        </div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => {
              featureRefs.current[index] = el;
            }}
          >
            <FeatureCard feature={feature} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
