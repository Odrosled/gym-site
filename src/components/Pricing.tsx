import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section className="flex flex-col items-center my-44">
      <div>
        <div className="text-center">
          <h1 className="font-bold text-3xl mb-5">Exclusive Pricing Plan</h1>
          <p className="mb-20">
            A plan for every objective you'd like to conquer.
          </p>
        </div>
        <div className="flex gap-10 max-md:flex-col">
          <PricingCard
            src="/assets/pricing_beginner.jpg"
            title="Beginner"
            price={39}
          />
          <PricingCard
            src="/assets/pricing_intermediate.jpg"
            title="Intermediate"
            price={65}
          />
          <PricingCard
            src="/assets/pricing_advanced.jpg"
            title="Advanced"
            price={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
