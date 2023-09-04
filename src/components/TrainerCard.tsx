interface TrainerCardProps {
  src: string;
  name: string;
  subject: string;
}

const TrainerCard = ({ src, name, subject }: TrainerCardProps) => {
  return (
    <div className="flex flex-col max-w-sm rounded overflow-hidden border-x-4 border-[#f97316] hover:scale-95 transition duration-500 cursor-pointer">
      <div className="flex-1">
        <img className="w-full object-fill" src={src} alt="" />
      </div>
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-3xl mb-2 text-white">{name}</div>
        <p className="text-white text-base">{subject}</p>
      </div>
    </div>
  );
};

export default TrainerCard;
