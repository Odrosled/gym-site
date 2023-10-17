import { useEffect } from "react";
import ContactInfo from "../components/ContactInfo";
import TopBanner from "../components/TopBanner";
import { FieldValues, useForm } from "react-hook-form";
import ContactTitle from "../components/ContactTitle";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <div>
      <TopBanner title="Contact Us" />
      <div className="wrapper grid grid-cols-2 my-40 gap-20 max-md:grid-cols-1">
        <div>
          <h1 className="text-4xl font-bold pb-10">
            We are here to help you!
            <br /> To Shape Your Body.
          </h1>
          <p className="pb-10">
            At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness
            and nutrition plan that helps you reach your specific goals.
          </p>
          <ContactInfo />
        </div>
        <div className="bg-[#f8f8f8] p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <ContactTitle title="Leave Us Your Info" />
            <input {...register("name")} id="name" type="text" placeholder="Full Name *" className="my-4 mt-10 p-4 outline-none" />
            <input {...register("email")} id="email" type="email" placeholder="Email Address *" className="my-4 p-4 outline-none" />
            <select {...register("class")} id="class" className="my-4 p-4 outline-none">
              <option value="">Select Class *</option>
              <option value="">Boxing</option>
              <option value="">Yoga</option>
              <option value="">Powerlifting</option>
              <option value="">Karate</option>
              <option value="">Running</option>
              <option value="">CrossFit</option>
            </select>
            <textarea className="my-4 p-4 outline-none" placeholder="Comment"></textarea>
            <div className="flex justify-center my-4">
              <button className="border-2 px-8 py-2 rounded-full font-semibold text-sm bg-[#f97316] hover:bg-[#f8f8f8] text-white hover:text-black duration-200">SUBMIT NOW</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
