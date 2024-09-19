import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductShowcase = () => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const [hovered, setHovered] = useState(false); // State to track hover

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
      titleRef.current.textContent = "";
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
      <h2 ref={titleRef} className="text-center text-2xl font-bold text-blue-600 mb-6">
        {/* Typing effect will insert the text here */}
      </h2>
      
      {/* Grid container */}
      <div ref={gridRef} className="p-20 pt-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Product 1 */}
        <div
          ref={(el) => { imageRefs.current[0] = el; }}
          className="p-4 rounded-lg text-center"
          onMouseEnter={() => setHovered(true)} // Set to true on hover
          onMouseLeave={() => setHovered(false)} // Reset on leave
        >
       <div className="bg-[#F0F0F0] w-[400px] items-center h-[400px]">
  <div className="relative w-full h-full"> {/* Use h-full to fill the parent height */}
    <Image
      src={hovered ? '/assets/home3.png' : '/assets/home1.png'} // Switch image on hover
      alt="C1 Series Robot"
      layout="fill"
      objectFit="contain"
    />
  </div>
</div>

          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl mt-4">C1 Series</h3>
            <span className="text-blue-500 hover:underline">View Details →</span>
          </div>

          <hr className="my-2 border-gray-300" />

          <p className="text-left text-gray-600">
            This compact and versatile 6-axis cobot is perfect for research, education, and light industrial applications. Its lightweight design and user-friendly interface make it an ideal choice for those new to automation.
          </p>
        </div>

        {/* Product 2 */}
        <div ref={(el) => { imageRefs.current[1] = el; }} className="p-4 rounded-lg text-center">
          <div className="bg-[#F0F0F0]">
            <div className="relative w-full h-64">
              <Image
                src="/assets/home2.png"
                alt="C1 Series Robot"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl mt-4">C1 Series</h3>
            <span className="text-blue-500 hover:underline">View Details →</span>
          </div>

          <hr className="my-2 border-gray-300" />

          <p className="text-left text-gray-600">
            This compact and versatile 6-axis cobot is perfect for research, education, and light industrial applications. Its lightweight design and user-friendly interface make it an ideal choice for those new to automation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
