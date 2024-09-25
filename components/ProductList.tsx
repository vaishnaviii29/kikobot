"use client";
import { products } from "@/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { chivo } from "@/app/fonts";
import ProductCard from "./ProductCard";
import Cursor from "./cursor";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ProductList = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>(
    Array(products.length).fill(null)
  ); // Initialize with nulls

  useGSAP(() => {
    const section = sectionRef.current;

    if (section) {
      // Animation for the section title (Our Products)
    //   gsap.fromTo(
    //     section,
    //     { opacity: 0, y: 50 },
    //     {
    //       opacity: 1,
    //       y: 0,
    //       duration: 1,
    //       ease: "power3.out",
    //       scrollTrigger: {
    //         trigger: section,
    //         start: "top bottom",
    //         toggleActions: "play pause resume reset",
    //       },
    //     }
    //   );

      // Cursor blink animation
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

      // Parallax and stagger animation for product cards
      gsap.fromTo(
        productRefs.current.filter(Boolean),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay: 1,
          ease: "power3.out",
          stagger: 0.3, // Stagger the animation for each product card
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            toggleActions: "play pause resume reset",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="p-6 max-w-7xl mx-auto space-y-10 flex flex-col items-center"
    >
      <h2
        className={`text-heading ${chivo.className} text-base md:text-xl font-normal flex items-center`}
      >
        Our Products
        <div ref={cursorRef}>
          <Cursor />
        </div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            ref={(el) => {
              productRefs.current[index] = el;
            }} // No return statement here
            className="transform transition-transform"
          >
            <ProductCard
              title={product.title}
              description={product.description}
              image1={product.image1}
              image2={product.image2}
              detailsLink={product.detailsLink}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
