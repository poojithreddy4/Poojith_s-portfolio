import SectionHeading from "@/components/Helper/SectionHeading";
import Slider from "./Slider";

const Review = () => {
  return (
    <div id="reviews" className="pt-16 pb-16 bg-[#050709] scroll-mt-24">
      <SectionHeading>My Reveiws</SectionHeading>
      <div className="w-[90%] sm:w-[80%] mx-auto mt-20">
        {/* Slider */}
        <Slider />
      </div>
    </div>
  );
};

export default Review;
