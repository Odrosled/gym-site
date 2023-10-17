import ButtonWhite from "./ButtonWhite";

interface ClassCardProps {
  img: string;
  title?: string;
  trainer: string;
  time: string;
}

const ClassCard = ({ img, title, trainer, time }: ClassCardProps) => {
  return (
    <div className="h-[450px]">
      <div className={`h-full bg-no-repeat bg-cover rounded-2xl bg-bottom relative`} style={{ backgroundImage: `url(${img})` }}>
        <div className="p-8 text-white flex flex-col gap-3 absolute top-[50%]">
          <h1 className="font-bold text-3xl">{title}</h1>
          <div className="bg-[#f97316] h-[4px] w-[50px]"></div>
          <div className="flex flex-col tracking-wider">
            <div className="flex items-center gap-2">
              <img className="h-5 w-5" src="/assets/user.svg" alt="user" />
              <h1>{trainer}</h1>
            </div>
            <div className="flex items-center gap-2">
              <img className="h-5 w-5" src="/assets/clock.svg" alt="clock" />
              <p>{time}</p>
            </div>
          </div>
          <div>
            <ButtonWhite text="JOIN NOW" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
