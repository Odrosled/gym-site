interface ContactTitleProps {
  title: string;
}

const ContactTitle = ({ title }: ContactTitleProps) => {
  return (
    <>
      <h1 className="font-bold text-xl">{title}</h1>
      <div className="bg-[#f97316] h-[4px] w-[50px]"></div>
    </>
  );
};

export default ContactTitle;
