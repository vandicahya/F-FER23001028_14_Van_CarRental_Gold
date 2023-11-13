import logoimg from "../../assets/Logo.png";
import "./style.css";
import fb from "../../assets/icon_facebook.png";
import ig from "../../assets/icon_instagram.png";
import twitter from "../../assets/icon_twitter.png";
import mail from "../../assets/icon_mail.png";
import twitch from "../../assets/icon_twitch.png";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 p-4 lg:flex-row lg:px-40 lg:justify-between mt-40">
      <div className="flex flex-col font-semibold gap-4 lg:w-1/4">
        <span>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</span>
        <span>binarcarrental@gmail.com</span>
        <span>081-233-334-808</span>
      </div>
      <div className="flex flex-col gap-4">
        <span>Our services</span>
        <span>Why Us</span>
        <span>Testimonial</span>
        <span>FAQ</span>
      </div>
      <div className="flex flex-col font-semibold gap-4">
        <span>Connect with us</span>
        <div className="flex gap-3">
          <span>
            <img src={fb} alt="" />
          </span>
          <span>
            <img src={ig} alt="" />
          </span>
          <span>
            <img src={twitter} alt="" />
          </span>
          <span>
            <img src={mail} alt="" />
          </span>
          <span>
            <img src={twitch} alt="" />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span>Copyrigt binar 2022</span>
        <img src={logoimg} alt="" className="w-1/3" />
      </div>
    </div>
  );
};
export default Footer;
