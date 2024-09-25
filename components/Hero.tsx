import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";

const Hero = () => {
  return (
    <section>
      <div className=" hidden md:block">
        <DesktopHero />
      </div>
      <div className=" block md:hidden">
        <MobileHero />
      </div>
    </section>
  );
};

export default Hero;
