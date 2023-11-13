// import Footer from "../../components/Footer";
import ImageCar from "../../assets/img_car.png";
import ImageService from "../../assets/img_service.png";
import Checklist from "../../components/OurServices/Checklist";
import ImageComplete from "../../assets/icon_complete.png";
import ImagePrice from "../../assets/icon_price.png";
import ImageTime from "../../assets/icon_24hrs.png";
import ImageProfessional from "../../assets/icon_professional.png";
import Card from "../../components/WhyUs/Card";
import Slider from "../../components/Testimonial/Slider";
import Profile1 from "../../assets/img_photo.png";
import Profile2 from "../../assets/img_photo2.png";
import FaqCollapse from "../../components/Faq/FaqCollapse";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import NavbarHome from "../../components/Navbar";

const datafaq = [
  {
    title: "Apa saja syarat yang dibutuhkan?",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore minima vitae ut incidunt mollitia impedit iusto eius veritatis soluta sunt.",
  },
  {
    title: "Berapa hari minimal sewa mobil lepas kunci?",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore minima vitae ut incidunt mollitia impedit iusto eius veritatis soluta sunt.",
  },
  {
    title: "Berapa hari sebelumnya sebaiknya booking sewa mobil?",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore minima vitae ut incidunt mollitia impedit iusto eius veritatis soluta sunt.",
  },
  {
    title: "Apakah ada biaya antar-jemput?",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore minima vitae ut incidunt mollitia impedit iusto eius veritatis soluta sunt.",
  },
  {
    title: "Bagaimana jika terjadi kecelakaan?",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore minima vitae ut incidunt mollitia impedit iusto eius veritatis soluta sunt.",
  },
];

const cardTestimonial = [
  {
    profile: Profile1,
    testimoni:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis dolorum voluptatem incidunt inventore ratione. Sit dignissimos quis quae nisi!",
    name: "John Dee 23, Bromo",
  },
  {
    profile: Profile2,
    testimoni:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis dolorum voluptatem incidunt inventore ratione. Sit dignissimos quis quae nisi!",
    name: "Sarah 23, Bromo",
  },
  {
    profile: Profile1,
    testimoni:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis dolorum voluptatem incidunt inventore ratione. Sit dignissimos quis quae nisi!",
    name: "John Dee 23, Bromo",
  },
];

const dataCard = [
  {
    icon: ImageComplete,
    title: "Mobil Lengkap",
    description:
      "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
  },
  {
    icon: ImagePrice,
    title: "Harga Murah",
    description:
      "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
  },
  {
    icon: ImageTime,
    title: "Layanan 24 Jam",
    description:
      "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
  },
  {
    icon: ImageProfessional,
    title: "Sopir Professional",
    description:
      "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
  },
];

const checklistService = [
  "Sewa Mobil Dengan Supir di Bali 12 Jam",
  "Sewa Mobil Lepas Kunci di Bali 24 Jam",
  "Sewa Mobil Jangka Panjang Bulanan",
  "Gratis Antar - Jemput Mobil di Bandara",
  "Gratis Antar - Jemput Mobil di Bandara",
];

const Home = () => {
  const ourServiceRef = useRef(null);
  const whyUsRef = useRef(null);
  const testimoniRef = useRef(null);
  const faqRef = useRef(null);
  const navigate = useNavigate();

  console.log(location.pathname);

  const dataMenu = [
    {
      nama: "Our Services",
      to: ourServiceRef,
    },
    {
      nama: "Why Us",
      to: whyUsRef,
    },
    {
      nama: "Testimony",
      to: testimoniRef,
    },
    {
      nama: "FAQ",
      to: faqRef,
    },
  ];

  return (
    <div className="">
      <NavbarHome dataMenu={dataMenu} />
      <section className="pt-40 bg-primary w-full px-4 lg:pt-40 lg:px-0">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex flex-col gap-4 lg:align-middle my-auto lg:px-20">
            <span className="text-4xl font-semibold leading-relaxed">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </span>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
              optio.
            </span>
            <button
              className="bg-customGreen p-2 w-36"
              onClick={() => navigate("/search")}
            >
              <span className="text-white font-semibold text-sm">
                Mulai Sewa Mobil
              </span>
            </button>
          </div>
          <img src={ImageCar} alt="" />
        </div>
      </section>
      <section className="pt-40 w-full px-4 my-16" ref={ourServiceRef}>
        <div className="flex flex-col gap-4 lg:flex-row ">
          <div className="lg:w-1/2 w-3/4 mx-auto">
            <img src={ImageService} alt="" className="lg:mx-auto" />
          </div>
          <div className="lg:flex lg:flex-col lg:w-1/2 lg:my-auto lg:gap-5 flex flex-col gap-5">
            <span className="text-2xl">
              Best Car Rental for any kind of trip in (Lokasimu)!
            </span>
            <span>
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </span>
            {checklistService.map((data, i) => (
              <Checklist text={data} key={i} />
            ))}
          </div>
        </div>
      </section>
      <section ref={whyUsRef} className="w-full px-4 my-16 lg:px-40 pt-40">
        <div className="flex flex-col gap-4">
          <span className="text-center font-bold text-2xl lg:text-left">
            Why Us?
          </span>
          <span className="text-center font-semibold lg:text-left">
            Mengapa harus pilih Binar Car Rental?
          </span>
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-4">
            {dataCard.map((data, i) => (
              <Card
                key={i}
                icon={data.icon}
                title={data.title}
                description={data.description}
              />
            ))}
          </div>
        </div>
      </section>
      <section
        ref={testimoniRef}
        className="w-full px-4 my-16 flex flex-col gap-4 pt-40"
      >
        <span className="text-2xl font-bold mx-auto">Testimonial</span>
        <span className="font-semibold mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          eveniet.
        </span>
        <Slider cardTestimonial={cardTestimonial} />
      </section>
      <section className="pt-40 w-full px-4 my-16 lg:px-40">
        <div className="w-full px-10 py-24 flex flex-col bg-customBlue rounded-md text-white text-center gap-10">
          <span className="text-2xl font-bold lg:text-4xl">
            Sewa Mobil di (Lokasimu) Sekarang
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quas
            quis rem aliquid quaerat.
          </span>
          <button
            className="bg-customGreen rounded-sm p-3 w-2/3 mx-auto lg:w-1/3"
            onClick={() => navigate("/search")}
          >
            <span>Mulai Sewa Mobil</span>
          </button>
        </div>
      </section>
      <section ref={faqRef} className="pt-40 w-full px-4 my-16 lg:px-40">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="flex flex-col gap-5 ">
            <span className="text-2xl font-bold mx-auto lg:mx-0">
              Frequently Asked Question
            </span>
            <span className="font-semibold mx-auto text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              eveniet.
            </span>
          </div>
          <div className="flex flex-col lg:gap-5 gap-5 z-0">
            {datafaq.map((data, i) => (
              <FaqCollapse key={i} data={data} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
