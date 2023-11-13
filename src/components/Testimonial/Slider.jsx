/* eslint-disable react/prop-types */
// Slider.js
import { useState } from "react";
import LeftButton from "../../assets/left.png";
import RightButton from "../../assets/right.png";
import CardSlider from "./CardSlider";

const Slider = ({ cardTestimonial }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % cardTestimonial.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + cardTestimonial.length) % cardTestimonial.length
    );
  };

  return (
    <div className="flex flex-col relative z-0">
      <CardSlider cardTestimonial={cardTestimonial[currentImage]} />
      <div className="flex justify-center gap-4 absolute -bottom-5 w-full mx-auto">
        <button className="" onClick={() => prevImage()}>
          <img src={LeftButton} alt="" className="h-8" />
        </button>
        <button className="" onClick={() => nextImage()}>
          <img src={RightButton} alt="" className="h-8" />
        </button>
      </div>
    </div>
    // <div className="flex flex-col relative">
    //   <div className="flex">
    //     {/* Left Image */}
    //     <div className="w-1/3">
    //       {currentImage > 0 && (
    //         <CardSlider cardTestimonial={cardTestimonial[currentImage - 1]} />
    //       )}
    //     </div>
    //     {/* Center Image */}
    //     <div className="w-2/3">
    //       <CardSlider cardTestimonial={cardTestimonial[currentImage]} />
    //     </div>
    //   </div>
    //   {/* Right Images */}
    //   <div className="flex justify-center gap-4 absolute -bottom-5 w-full mx-auto">
    //     <button className="" onClick={() => prevImage()}>
    //       <img src={LeftButton} alt="" className="h-8" />
    //     </button>
    //     <button className="" onClick={() => nextImage()}>
    //       <img src={RightButton} alt="" className="h-8" />
    //     </button>
    //   </div>
    // </div>
  );
};

export default Slider;
