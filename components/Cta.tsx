import { readexPro } from "@/app/fonts";
import { cta } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Cta = () => {
  return (
    <section className="flex flex-col md:flex-row items-stretch justify-between  p-4  max-w-7xl mx-auto rounded-lg shadow-lg w-full h-auto md:h-[500px]">
      {/* Left Section: Text and CTA */}
      <div className="flex flex-col items-start justify-between  text-left mx-auto w-full md:w-1/2 h-full bg-[#3537E8] p-6 md:p-8 ">
        <div className="flex flex-col justify-center text-left space-y-8 md:space-y-8  pt-0 md:pt-4 ">
          <h2
            className={` text-2xl md:text-4xl  font-extralight max-w-md text-white ${readexPro.className}`}
          >
            Ready to redefine what’s possible?
          </h2>
          <p
            className={`text-white font-extralight text-sm md:text-lg  max-w-md ${readexPro.className}`}
          >
            Explore our product pages to delve deeper into the world of our
            cobots and witness firsthand how they can reshape your business and
            ignite your innovation.
          </p>
        </div>
        {/* CTA: Link to Contact Page */}

        <p className="inline-flex items-center justify-between space-x-2 py-4 md:py-0 w-full">
          {" "}
          <span
            className={`${readexPro.className} font-extralight text-xl md:text-3xl text-white`}
          >
            Let’s Talk
          </span>
          <Link
            href="/contact"
            className=" bg-white text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 px-2 py-2"
          >
            <FaArrowRight className= " h-5 w-5 md:w-8 md:h-8" />
          </Link>
        </p>
      </div>

      {/* Right Section: Robot Image */}
      <div className="w-full md:w-1/2 h-full">
        <Image
          src={cta}
          alt="Cobot Arm"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default Cta;
