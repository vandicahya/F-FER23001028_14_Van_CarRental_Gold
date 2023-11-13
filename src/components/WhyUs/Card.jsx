/* eslint-disable react/prop-types */

const Card = (props) => {
  return (
    <div className="border border-1 border-slate-400 rounded-md p-5 flex flex-col gap-2 text-left lg:w-1/4">
      <img src={props.icon} alt="" className="w-9" />
      <span className="font-bold">{props.title}</span>
      <span className="font-semibold">{props.description}</span>
    </div>
  );
};

export default Card;
