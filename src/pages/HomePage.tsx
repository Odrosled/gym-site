import HomePageCard from "../components/HomePageCard";
import TrainerCard from "../components/TrainerCard";
import ButtonWhite from "../components/ButtonWhite";
import AboutHero from "../components/AboutHero";
import { useEffect } from "react";
import Pricing from "../components/Pricing";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* SECTION 1 HERO*/}
      <section className="bg-black flex max-md:mb-20 max-md:w-full">
        <img className="w-4/5 max-md:hidden" src="/assets/homepageMain(1).jpg" alt="" />
        <div className="flex flex-col justify-center relative right-32 gap-5 max-md:right-0 max-md:py-16 max-md:pl-4">
          <h1 className="text-white font-bold text-7xl max-md:text-5xl">
            SCULPT
            <br />
            YOUR
            <br />
            BODY
          </h1>
          <h1 className="text-white font-normal text-xl">HEALTH & FITNESS</h1>
          <div>
            <ButtonWhite text="OUR CLASSES" link={"/classes"} />
          </div>
        </div>
      </section>
      {/* SECTION 2 CARDS*/}
      <section className="flex justify-center wrapper">
        <div>
          <div className="flex justify-around gap-10 max-md:flex-col">
            <HomePageCard
              svg="/assets/clock-clockwise.svg"
              title="PROGRESSION"
              description="Our team of experts will work with you to create a customized plan
              that helps you achieve success one step at a time."
            />
            <HomePageCard
              svg="/assets/person-simple-run.svg"
              title="WORKOUT"
              description="With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life."
            />
            <HomePageCard
              svg="/assets/clipboard-text.svg"
              title="NUTRITION"
              description="Our team will work with you to create a personalized meal plan that helps you reach your specific health goals."
            />
          </div>
        </div>
      </section>
      {/* SECTION 3 HERO*/}
      <AboutHero
        title="Take Your Health And Body To The Next Level"
        description="Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals."
        button="TAKE A TOUR"
      />
      {/* SECTION 4 SPLITTER*/}
      <section className="flex gap-10 max-md:hidden">
        <div className="h-[150px] w-3/5 bg-[#f97316] flex items-center justify-center gap-20 rounded-r-[150px] relative top-20">
          <h1 className="text-white font-bold text-4xl">
            Always Providing The Best
            <br /> Fitness Service For You
          </h1>
          <div>
            <ButtonWhite text="JOIN US" link={"/contact"} />
          </div>
        </div>
      </section>
      {/* SECTION 5 TRAINERS*/}
      <section className="bg-black py-32 flex justify-center">
        <div className="wrapper flex flex-col items-center">
          <div className="text-white text-center py-10 my-5 mb-16 max-md:py-0">
            <h1 className="font-bold text-4xl mb-5">Team Of Expert Coaches</h1>
            <p>
              Expert team of coaches helps you succeed.
              <br />
              Personalized guidance and motivation provided!
            </p>
          </div>
          <div className="flex gap-10 max-md:flex-col">
            <TrainerCard src="/assets/trainer1.jpg" name="John Deer" subject="Crossfit Trainer" />
            <TrainerCard src="/assets/trainer2.jpg" name="Kate Priest" subject="Yoga Trainer" />
            <TrainerCard src="/assets/trainer3.jpg" name="Tony Linar" subject="Personal Trainer" />
          </div>
        </div>
      </section>
      {/* SECTION 6 TESTIMONIAL*/}
      <section className="flex justify-center my-32 wrapper">
        <div className="flex items-end border-b-8 border-[#f97316]">
          <img className="h-full object-fill rounded-tr-[25%] max-md:hidden transform md:translate-x-1" src="/assets/testimonial.jpg" alt="testimonial" />
          <div className="flex flex-col justify-center gap-3 text-white bg-black px-[10%] py-[5%] max-md:py-40 transform md:-translate-x-1">
            <img className="h-24 w-24" src="/assets/quotes.svg" alt="quotes" />
            <p className="pb-5 font-light">
              "I've been a member of GymRat for the past 6 months and it has been an amazing experience. The trainers are knowledgeable and supportive, the equipment is top-notch,
              and the community of members is friendly and encouraging."
            </p>
            <h1 className="font-bold text-xl">Julia Dane</h1>
            <p className="text-sm">Coffee Shop Owner</p>
          </div>
        </div>
      </section>
      {/* SECTION 7 PRICING*/}
      <Pricing />
      {/* SECTION 8 BANNER*/}
      <section className="flex justify-center">
        <div className="flex gap-20 mb-28 justify-center bg-black w-full max-md:py-10">
          <div className="flex justify-between wrapper">
            <div className="flex flex-col justify-center gap-5 font-bold">
              <h1 className="text-white text-4xl">Need a Fitness Trainer?</h1>
              <div className="flex">
                <p className="text-[#f97316] text-3xl pr-3">Call:</p>
                <p className="text-white text-3xl">+123-456789</p>
              </div>
              <div>
                <ButtonWhite text="PURCHASE" link={"/contact"} />
              </div>
            </div>
            <img className="max-md:hidden" src="/assets/banner_edited1.jpg" alt="banner" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
