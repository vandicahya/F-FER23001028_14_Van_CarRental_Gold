/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import hammenu from "../../assets/fi_menu.png";
import logoimg from "../../assets/Logo.png";

const Navbar = (props) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="z-10">
      <div className="flex justify-between items-center px-8 py-2 fixed w-full bg-primary">
        <div className="lg:pl-20">
          <img src={logoimg} />
        </div>
        <div className="flex ">
          <div
            className="menu cursor-pointer lg:hidden"
            onClick={() => setIsMenuActive(!isMenuActive)}
          >
            <img src={hammenu} alt="" />
          </div>
          <div
            className={`flex flex-col fixed top-0 ${
              isMenuActive ? "right-0" : "-right-[200%]"
            } w-[50vw] h-[100vh] p-5 gap-3 transition-all duration-500 ease-linear bg-white
               lg:flex-row lg:static lg:bg-primary lg:h-full z-[999]
              `}
          >
            <div className="flex justify-between items-center lg:hidden">
              <span className="font-bold text-lg ">BCR</span>
              <button
                className="text-xl"
                onClick={() => setIsMenuActive(!isMenuActive)}
              >
                <AiOutlineClose />
              </button>
            </div>
            {props.dataMenu.map((data, i) => (
              <button
                key={i}
                onClick={() => {
                  // data.to.current.scrollIntoView({ behavior: "smooth" });
                  navigate("/");
                }}
                className="cursor-pointer"
              >
                <a>{data.nama}</a>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
