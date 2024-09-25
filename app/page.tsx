import Cta from "@/components/Cta";
import FeaturesSection from "@/components/FeatureSection";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ProductList from "@/components/ProductList";
import Image from "next/image";

export default function Home() {
  return (

    <main className=" flex flex-col space-y-8 md:space-y-16 lg:space-y-32 w-full h-full">

    <main className="flex flex-col space-y-8 md:space-y-16 lg:space-y-32 mx-auto">

      <Hero />
      <Mission />
      <ProductList />
      <FeaturesSection />
      <Cta />
      </main>
    </main>
  );
}
