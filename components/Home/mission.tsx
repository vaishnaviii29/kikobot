import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MissionSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const imageCardRef = useRef<HTMLDivElement | null>(null); // Reference for the image card

  useEffect(() => {
    // Function to create the typing effect
    const typingEffect = (element: HTMLHeadingElement, text: string, speed: number) => {
      let index = 0;
      const interval = setInterval(() => {
        element.textContent += text[index];
        index++;
        if (index >= text.length) {
          clearInterval(interval);
        }
      }, speed);
    };

    // Start the typing effect
    if (titleRef.current) {
      typingEffect(titleRef.current, 'Our Mission', 200); // Adjust speed as needed
    }

    // Create GSAP animation for the title and subtitle
    const animation = gsap.fromTo(
      [titleRef.current, subtitleRef.current], // Target both elements
      { y: '100vh', opacity: 0 }, // Start off-screen at the bottom
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' } // End at the normal position
    );

    // Set up ScrollTrigger for the title and subtitle
    ScrollTrigger.create({
      trigger: titleRef.current, // Trigger animation when the title is in view
      start: 'top center', // Start animation when the top of element hits the center of the viewport
      end: 'bottom top', // End animation when the bottom of element leaves the top of the viewport
      onEnter: () => animation.play(), // Play animation when entering
      once: true, // Ensure the animation only plays once
      onLeave: () => {
        gsap.to([titleRef.current, subtitleRef.current], {
          y: '-100vh', // Slide up and exit the screen
          opacity: 0, // Fade out
          duration: 1, // Duration of the exit animation
          ease: 'power3.out',
        });
      },
    });

    // Create GSAP animation for the image card (slide-up)
    if (imageCardRef.current) {
      gsap.fromTo(
        imageCardRef.current,
        { y: '100vh', opacity: 0 }, // Start off-screen below
        { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out' } // Slide up into view
      );

      // Set up ScrollTrigger for the image card
      ScrollTrigger.create({
        trigger: imageCardRef.current,
        start: 'top 80%', // Start animation when the top of the image card is 80% from the top
        once: true, // Only animate once
      });
    }
  }, []);

  return (
    <div>
      <section className="flex flex-col items-center justify-center h-screen bg-white">
        <h1
          ref={titleRef}
          className="text-[#3537E8] font-bold mb-4 whitespace-nowrap"
        >
          {/* Text content will be set by the typing effect */}
        </h1>
        <p ref={subtitleRef} className="text-lg text-[#212121] text-center">
          To deliver innovative, adaptable robotic solutions that <br /> enhance productivity and drive automation across industries.
        </p>
      </section>

      <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div
          ref={imageCardRef}
          className="w-80 h-80 bg-cover bg-center bg-no-repeat rounded-lg shadow-lg"
          style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }} // Update with your image path
        ></div>
      </section>
    </div>
  );
};

export default MissionSection;
