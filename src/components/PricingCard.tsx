import ButtonBlack from "./ButtonBlack";

interface PricingCardProps {
  src: string;
  title: string;
  price: number;
}

const PricingCard = ({ src, title, price }: PricingCardProps) => {
  return (
    <div className="flex flex-col items-center relative text-center cursor-pointer shadow-xl hover:scale-105 transition duration-500">
      <img
        className="w-full h-full grayscale hover:grayscale-0 transition duration-200"
        src={src}
        alt=""
      />
      <h1 className="font-bold bg-white text-xl px-16 py-5 absolute top-52">
        {title}
      </h1>
      <ul className="pt-10 flex flex-col gap-5">
        <li className="flex items-end">
          <h1 className="font-bold text-5xl">${price}</h1>
          <p className="text-lg">p/m</p>
        </li>
        <li>Free Hand</li>
        <li>Gym Fitness</li>
        <li>Weight Loss</li>
        <li>Personal Trainer</li>
        <li>Cycling</li>
      </ul>
      <div className="py-7">
        <ButtonBlack text="PURCHASE" link={"/contact"} />
      </div>
    </div>
  );
};

export default PricingCard;
