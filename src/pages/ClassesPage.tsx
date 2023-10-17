import { useEffect } from "react";
import ClassCard from "../components/ClassCard";
import TopBanner from "../components/TopBanner";

const ClassesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <TopBanner title="Classes" />
      <div className="wrapper">
        <div className="my-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 wrapper">
          <ClassCard img="https://gymate-stefvndev.vercel.app/static/media/mma.b0861f5ca75949cc88f3.jpg" title="Boxing" trainer="Mike Mentzer" time="Wed. 9:00am" />
          <ClassCard img="https://gymate-stefvndev.vercel.app/static/media/cycling.b8899915801da38931f0.jpg" title="Yoga" trainer="Letizia Smith" time="Mon. 10:00am" />
          <ClassCard img="https://gymate-stefvndev.vercel.app/static/media/powerlifting.78726cf515db8f5e86b5.jpg" title="Powerlifting" trainer="Shane Hunt" time="Thu. 5:00pm" />
          <ClassCard img="https://gymate-stefvndev.vercel.app/static/media/karate.4ff7c8b2581ecbb6279b.jpg" title="Karate" trainer="Bruce Lee" time="Fri. 6:00pm" />
          <ClassCard img="https://gymate-stefvndev.vercel.app/static/media/running.0ffb5fb02137aabd62d1.jpg" title="Running" trainer="Usain Bolt" time="Wed. 11:00am" />
          <ClassCard img="https://gymate-stefvndev.vercel.app/static/media/cross.7185a0c6b6a2d57b359b.jpg" title="CrossFit" trainer="Ron McDonald" time="Mon. 6:00am" />
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
