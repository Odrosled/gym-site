import ContactTitle from "./ContactTitle";

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
      <div>
        <ContactTitle title="Rome City, ITA" />
        <p className="pt-5">Via Trastevere 33</p>
        <p>Roma, 00166, ITA</p>
      </div>
      <div>
        <ContactTitle title="Opening Hours" />
        <p className="pt-4">Mon to Fri: 7:30 am — 1:00 am</p>
        <p>Mon to Fri: 7:30 am — 1:00 am</p>
      </div>
      <div>
        <ContactTitle title="Information" />
        <p className="pt-4">+800-123-4567</p>
        <p>gymrat@gmail.com</p>
      </div>
      <div>
        <ContactTitle title="Follow Us On" />
        <div className="flex gap-10 pt-4">
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
      </div>
    </div>
  );
};

export default ContactInfo;
