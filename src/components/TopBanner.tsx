interface TopBannerProps {
  title: string;
}

const TopBanner = ({ title }: TopBannerProps) => {
  return (
    <div className="bg-black w-full h-1/2 flex flex-col items-end justify-end relative">
      <div className="w-1/2">
        <img src="/assets/pagesbanner.jpg" alt="pagesbanner" />
      </div>
      <h1 className="absolute right-[48%] text-white font-bold text-3xl pb-10">
        {title}
      </h1>
    </div>
  );
};

export default TopBanner;
