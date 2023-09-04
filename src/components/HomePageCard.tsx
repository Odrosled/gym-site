interface HomePageCardProps {
  svg: string;
  title: string;
  description: string;
}

const HomePageCard = ({ svg, title, description }: HomePageCardProps) => {
  return (
    <div className="flex flex-col items-center text-center bg-white px-7 py-12 gap-3 shadow-md rounded-lg relative bottom-10 cursor-pointer hover:bg-black hover:text-white duration-100 max-md:py-6">
      <img className="h-14 w-14" src={svg} alt="" />
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="text-sm font-medium">{description}</p>
    </div>
  );
};

export default HomePageCard;
