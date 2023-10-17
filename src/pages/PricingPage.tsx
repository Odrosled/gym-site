import Pricing from "../components/Pricing";
import { useEffect } from "react";
import TopBanner from "../components/TopBanner";

const PricingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TopBanner title="Pricing" />
      <div className="my-32">
        <Pricing />;
      </div>
    </>
  );
};

export default PricingPage;
