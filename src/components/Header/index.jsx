import React from "react";
import logoimg from "../../assets/logo.png";
import carimg from "../../assets/img_car.png";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-page">
      <div className="header">
        <div className="header-logo">
          <img src={logoimg} />
        </div>
        <div className="header-navlist flex">
          <Link to={"/"}>
            <p className="font-bold text-6xl">OurServices</p>
          </Link>
          <Link>
            <p>WhyUs</p>
          </Link>
          <Link>
            <p>Testimonial</p>
          </Link>
          <Link>
            <p>FAQ</p>
          </Link>
        </div>
      </div>
      <div className="header-text">
        <h1>
          Sewa & Rental Mobil Terbaik di<br></br> kawasan (Lokasimu)
        </h1>
        <h5>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas<br></br> terbaik
          dengan harga terjangkau. Selalu siap melayani kebutuhanmu<br></br> untuk sewa mobil selama
          24 jam.
        </h5>
        <button>Mulai Sewa Mobil</button>
      </div>
      <div className="header-car">
        <img src={carimg} />
      </div>
    </div>
  );
};

export default Header;
