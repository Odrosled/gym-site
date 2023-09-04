import AboutHero from "../components/AboutHero";
import TopBanner from "../components/TopBanner";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <TopBanner title="About Us" />
      <AboutHero
        title="We Will Give You Strength"
        description="At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals."
        button="CONTACT US"
      />
      <div className="xl:w-3/5 mt-24 mb-36 max-md:mt-0">
        <div className="grid grid-cols-2 max-md:grid-cols-1">
          <div className="flex flex-col items-center justify-center text-center gap-3 px-16">
            <img className="w-28 h-28" src="/assets/flying-saucer.svg" alt="" />
            <h1>Our History</h1>
            <p className="max-md:mb-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi, tempore eligendi. Unde quas nemo veritatis pariatur,
              dolor sequi eaque, suscipit quibusdam reprehenderit ea ab
              delectus.
            </p>
          </div>
          <div className="w-full">
            <img src="/assets/aboutimage1.jpg" alt="" />
          </div>

          <div className="w-full max-md:pt-8">
            <img src="/assets/aboutimage2.jpg" alt="" />
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-3 px-16">
            <img
              className="w-28 h-28 max-md:mt-5"
              src="/assets/flower-lotus.svg"
              alt=""
            />
            <h1>Our History</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi, tempore eligendi. Unde quas nemo veritatis pariatur,
              dolor sequi eaque, suscipit quibusdam reprehenderit ea ab
              delectus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
