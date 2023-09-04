const Footer = () => {
  return (
    <div className="mx-auto w-3/5">
      <div className="flex justify-between mb-28 max-md:flex-col max-md:gap-10">
        <div className="">
          <div className="flex items-center gap-2 mb-5">
            <img className="mt-2" src="/assets/barbell.svg" alt="bb" />
            <div>
              <h1 className="font-bold text-3xl">GymRat</h1>
              <p className="text-[10px] tracking-[.26em] font-normal uppercase leading-3">
                never satisfied
              </p>
            </div>
          </div>
          <p className="mb-5">
            Take your health and body to the next level with our
            <br />
            comprehensive program designed to help you reach
            <br />
            your fitness goals.
          </p>
          <div className="flex gap-10 mb-5">
            <img
              className="cursor-pointer"
              src="/assets/facebook-logo.svg"
              alt="facebook"
            />
            <img
              className="cursor-pointer"
              src="/assets/twitter-logo.svg"
              alt="twitter"
            />
            <img
              className="cursor-pointer"
              src="/assets/tiktok-logo.svg"
              alt="tiktok"
            />
          </div>
          <p className="font-semibold">Privacy Policy | © 2023 GymRat</p>
        </div>
        {/* END OF FIRST BOX */}
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-xl border-b-2 border-b-orange-500">
            Our Classes
          </h1>
          <p>Fitness Classes</p>
          <p>Aerobic Classes</p>
          <p>Power Yoga</p>
          <p>Learn Machines</p>
          <p>Full-body Strength</p>
        </div>
        {/* END OF SECOND BOX */}
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-xl border-b-2 border-b-orange-500">
            Working Hours
          </h1>
          <p className="font-semibold">Monday - Friday:</p>
          <p>7:00am - 21:00pm</p>
          <p className="font-semibold">Saturday:</p>
          <p>7:00am - 19:00pm</p>
          <p className="font-semibold">Sunday - Closed</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
