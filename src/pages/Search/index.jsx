import { useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import CardSearch from "../../components/Search/CardSearch";
import HeroSearch from "../../components/Search/HeroSearch";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/notfound.json";
const Search = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    getDataCars();
    // console.log("terpanggil");
  }, []);

  const getDataCars = async () => {
    await axios
      .get(`https://api-car-rental.binaracademy.org/customer/v2/car`)
      .then((res) => {
        setCars(res.data.cars);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [searched, isSearched] = useState(false);
  const ourServiceRef = useRef(null);
  const whyUsRef = useRef(null);
  const testimoniRef = useRef(null);
  const faqRef = useRef(null);
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

  const dataKategori = [
    {
      display: "2 - 4 Orang",
      value: "small",
    },
    {
      display: "4 - 6 Orang",
      value: "medium",
    },
    {
      display: "6 - 8 Orang",
      value: "large",
    },
  ];
  const dataHarga = [
    {
      display: "< Rp. 400.000",
      minPrice: 0,
      maxPrice: 399999,
    },
    {
      display: "Rp. 400.000 - Rp. 600.000",
      minPrice: 400000,
      maxPrice: 600000,
    },
  ];
  const [nama, setNama] = useState(null);
  const [kategori, setKategori] = useState(null);
  const [harga, setHarga] = useState(null);
  const [status, setStatus] = useState(null);
  const searchCars = async () => {
    let query = [];
    if (nama) {
      query.push(`name=${nama}`);
    }
    if (kategori) {
      query.push(`category=${kategori.value}`);
    }
    if (harga) {
      query.push(`minPrice=${harga.minPrice}&maxPrice=${harga.maxPrice}`);
    }
    await axios
      .get(
        `https://api-car-rental.binaracademy.org/customer/v2/car?${query.join(
          "&"
        )}&page=1&pageSize=10`
      )
      .then((res) => {
        // console.log("ini data search cars", res.data);
        console.log(
          "ini query",
          `https://api-car-rental.binaracademy.org/customer/v2/car?${query.join(
            "&"
          )}&page=1&pageSize=10`
        );
        setCars(res.data.cars);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        isSearched(true);
      });
  };

  return (
    <>
      <Navbar dataMenu={dataMenu} />
      <HeroSearch
        nama={nama}
        setNama={setNama}
        kategori={kategori}
        setKategori={setKategori}
        harga={harga}
        setHarga={setHarga}
        status={status}
        setStatus={setStatus}
        searchCars={searchCars}
        setCars={setCars}
        dataKategori={dataKategori}
        dataHarga={dataHarga}
        searched={searched}
      />
      <section className="w-full pt-40 px-40">
        {cars.length === 0 ? (
          <div className="flex gap-12 flex-wrap justify-center">
            <Lottie
              options={{
                animationData: animationData,
              }}
              height={400}
              width={400}
            />
          </div>
        ) : (
          <div className="flex gap-12 flex-wrap justify-center">
            {cars.map((data, i) => (
              <CardSearch data={data} key={i} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Search;
