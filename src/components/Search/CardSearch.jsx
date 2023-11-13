/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const CardSearch = (props) => {
  // console.log("ini adalah props", props);
  const formattedNumber = (number) => {
    return number.toLocaleString("en-ID", { minimumFractionDigits: 2 });
  };
  const navigate = useNavigate();
  return (
    <div
      className="border-2 rounded-md border-gray-200 flex flex-col w-1/4 gap-4 cursor-pointer px-10 py-12"
      onClick={() => navigate(`/search/${props.data.id}`)}
    >
      <img src={props.data.image} alt="" className="w-40" />
      <span>{props.data.name}</span>
      <span className="font-semibold">{`Rp. ${formattedNumber(
        props.data.price
      )}`}</span>
      <span className="font-semibold text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fuga
        pariatur ullam adipisci quae accusamus tempora a sapiente labore hic.
      </span>
      <button className="bg-customGreen rounded-sm text-white font-semibold py-3">
        <span>Pilih Mobil</span>
      </button>
    </div>
  );
};

export default CardSearch;
