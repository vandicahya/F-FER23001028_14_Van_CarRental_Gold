/* eslint-disable react/prop-types */
import Star from "../../assets/Rate.png";

const CardSlider = (props) => {
  return (
    <div className="flex flex-col py-20 px-6 bg-primary rounded-md justify-center gap-8 lg:w-1/2 lg:mx-auto ">
      <div className="">
        <img
          src={props.cardTestimonial.profile}
          alt=""
          className="h-28 mx-auto"
        />
      </div>
      <div className="">
        <img src={Star} alt="" className="h-4 mx-auto" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-semibold text-lg">
          {props.cardTestimonial.testimoni}
        </span>
        <span>{props.cardTestimonial.name}</span>
      </div>
    </div>
  );
};

export default CardSlider;
