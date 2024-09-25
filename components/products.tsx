import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductShowcase = () => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  // Separate hover states for product1 and product2
  const [hoveredProduct1, setHoveredProduct1] = useState(false);
  const [hoveredProduct2, setHoveredProduct2] = useState(false);

  useEffect(() => {
    const typingEffect = (element: HTMLHeadingElement, text: string, speed: number) => {
      let index = 0;
      const interval = setInterval(() => {
        if (element) {
          element.textContent += text[index];
          index++;
          if (index >= text.length) {
            clearInterval(interval);
          }
        }
      }, speed);
    };

    gsap.fromTo(
      [titleRef.current],
      { y: '100vh', opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    if (titleRef.current) {
      titleRef.current.textContent = '';
      typingEffect(titleRef.current, 'Our Products', 150);
    }

    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current,
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        }
      );

      ScrollTrigger.create({
        trigger: gridRef.current,
        start: 'top 80%',
        once: true,
      });
    }

    imageRefs.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.5 + i * 0.2,
          }
        );

        ScrollTrigger.create({
          trigger: card,
          start: 'top 80%',
          once: true,
        });
      }
    });
  }, []);

  return (
    <div className="w-full h-screen pt-5 px-4 py-8">
      <h2 ref={titleRef} className="text-center text-lg  text-[#3537E8]">
        {/* Typing effect will insert the text here */}
      </h2>

      {/* Grid container */}
      <div className="flex justify-center items-center">
        <div ref={gridRef} className=" grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Product 1 */}
          <div
            ref={(el) => {
              imageRefs.current[0] = el;
            }}
            className="p-4 w-full sm:w-[600px] h-[400px] rounded-lg text-center"
            onMouseEnter={() => setHoveredProduct1(true)}
            onMouseLeave={() => setHoveredProduct1(false)}
          >
            <div className="bg-[#F0F0F0] w-full h-full items-center">
              <div className="relative w-full h-full">
                <Image
                  src={hoveredProduct1 ? '/assets/home3.png' : '/assets/home1.png'}
                  alt="C1 Series Robot"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <h3 className="text-xl mt-4">C1 Series</h3>
              <span className="text-[#3537E8] hover:underline">View Details →</span>
            </div>

            <hr className="my-2 border-gray-300" />

            <p className="text-left text-gray-600">
              This compact and versatile 6-axis cobot is perfect for research, education, and light industrial applications. Its lightweight design and user-friendly interface make it an ideal choice for those new to automation.
            </p>
          </div>

          {/* Product 2 */}
          <div
            ref={(el) => {
              imageRefs.current[1] = el;
            }}
            className="p-4 w-full sm:w-[600px] h-[400px] rounded-lg text-center"
            onMouseEnter={() => setHoveredProduct2(true)}
            onMouseLeave={() => setHoveredProduct2(false)}
          >
            <div className="bg-[#F0F0F0] w-full h-full items-center">
              <div className="relative w-full h-full">
                <Image
                  src={hoveredProduct2 ? '/assets/home5.png' : '/assets/home2.png'}
                  alt="C1 Series Robot"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <h3 className="text-xl mt-4">C1 Series</h3>
              <span className="text-[#3537E8] hover:underline">View Details →</span>
            </div>

            <hr className="my-2 border-gray-300" />

            <p className="text-left text-gray-600">
              This compact and versatile 6-axis cobot is perfect for research, education, and light industrial applications. Its lightweight design and user-friendly interface make it an ideal choice for those new to automation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
