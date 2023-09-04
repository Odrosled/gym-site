interface HomePageIconProps {
  src: string;
  title: string;
}

const HomePageIcon = ({ src, title }: HomePageIconProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <img className="h-14 w-14" src={src} alt="" />
      <h1 className="font-bold text-lg">{title}</h1>
    </div>
  );
};

export default HomePageIcon;
