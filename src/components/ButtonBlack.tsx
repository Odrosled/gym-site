import { Link, To } from "react-router-dom";

interface ButtonBlackProps {
  text: string;
  link?: To;
}

const ButtonBlack = ({ text, link }: ButtonBlackProps) => {
  return (
    <Link
      to={link ?? ""}
      className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
    >
      <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]"></span>
      <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
      <span className="flex items-center gap-2 relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">
        {text}
      </span>
      <span className="absolute inset-0 border-2 border-black rounded-full"></span>
    </Link>
  );
};

export default ButtonBlack;
