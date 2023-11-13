/* eslint-disable react/prop-types */

const FaqCollapse = (props) => {
  return (
    <div className="collapse collapse-arrow bg-white border border-customGrey rounded-sm">
      <input type="checkbox" />
      <div className="collapse-title text-md font-medium">
        {props.data.title}
      </div>
      <div className="collapse-content">
        <p>{props.data.description}</p>
      </div>
    </div>
  );
};

export default FaqCollapse;
