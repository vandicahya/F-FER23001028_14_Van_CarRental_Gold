import ChecklistImage from "../../assets/imagechecklist.png";

// eslint-disable-next-line react/prop-types
const Checklist = ({ text }) => {
  return (
    <div className="flex gap-3 items-center">
      <img src={ChecklistImage} alt="" className="h-6" />
      <span>{text}</span>
    </div>
  );
};

export default Checklist;
