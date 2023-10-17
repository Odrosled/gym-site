import ButtonBlack from "./ButtonBlack";
import HomePageIcon from "./HomePageIcon";

interface AboutHeroProps {
  title: string;
  description: string;
  button: string;
}

const AboutHero = ({ title, description, button }: AboutHeroProps) => {
  return (
    <section className="flex justify-center mt-28 wrapper">
      <div className="flex">
        <div className="flex flex-col gap-10 max-md:mb-32">
          <h1 className="font-bold text-4xl max-md:text-3xl max-md:text-center">{title}</h1>
          <p className="max-md:text-center">{description}</p>
          <div className="flex gap-5 text-center max-md:flex-col">
            <HomePageIcon src="/assets/certificate.svg" title="PROFESSIONAL TRAINERS" />
            <HomePageIcon src="/assets/globe-hemisphere-west.svg" title="MODERN EQUIPMENTS" />
            <HomePageIcon src="/assets/heartbeat.svg" title="FANCY GYM MACHINES" />
          </div>
          <div className="mt-10 max-md:text-center">
            <ButtonBlack text={button} link={"/contact"} />
          </div>
        </div>
        <img className="max-h-[600px] max-w-[500px] max-md:hidden" src="/assets/female-runner.jpg" alt="runner" />
      </div>
    </section>
  );
};

export default AboutHero;
