import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import HeroSearch from "../../components/Search/HeroSearch";
import animationData from "../../assets/notfound.json";
const CarDetail = () => {
  const { id } = useParams();
  console.log("ini params", id);
  const [dataCar, setDataCar] = useState(null);
  useEffect(() => {
    getDataCars();
    // console.log("terpanggil");
  }, []);

  const getDataCars = async () => {
    await axios
      .get(`https://api-car-rental.binaracademy.org/customer/car/${id}`)
      .then((res) => {
        setDataCar(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const formattedNumber = (number) => {
    return number.toLocaleString("en-ID", { minimumFractionDigits: 2 });
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

  const listInclude = [
    "Apa saja yang termasuk dalam paket misal durasi max 12 jam",
    "Sudah termasuk bensin selama 12 jam",
    "Sudah termasuk Tiket Wisata",
    "Sudah termasuk pajak",
  ];
  const listExclude = [
    "Tidak termasuk biaya makan sopir Rp 75.000/hari",
    "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
    "Tidak termasuk akomodasi penginapan",
  ];
  const listRefund = [
    "Tidak termasuk biaya makan sopir Rp 75.000/hari",
    "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
    "Tidak termasuk akomodasi penginapan",
    "Tidak termasuk biaya makan sopir Rp 75.000/hari",
    "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
    "Tidak termasuk akomodasi penginapan",
    "Tidak termasuk biaya makan sopir Rp 75.000/hari",
    "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
    "Tidak termasuk akomodasi penginapan",
  ];
  //   const [nama, setNama] = useState(null);
  //   const [kategori, setKategori] = useState(null);
  //   const [harga, setHarga] = useState(null);
  //   const [status, setStatus] = useState(null);
  if (!dataCar) {
    return (
      <>
        <Navbar dataMenu={dataMenu} />
        <HeroSearch
          // nama={nama}
          // setNama={setNama}
          // kategori={kategori}
          // setKategori={setKategori}
          // harga={harga}
          // setHarga={setHarga}
          // status={status}
          // setStatus={setStatus}
          // searchCars={searchCars}
          // setCars={setCars}
          dataKategori={dataKategori}
          dataHarga={dataHarga}
          searched={searched}
        />
        <Lottie options={{ animationData: animationData }} />
      </>
    );
  }
  return (
    <>
      <Navbar dataMenu={dataMenu} />
      <HeroSearch
        // nama={nama}
        // setNama={setNama}
        // kategori={kategori}
        // setKategori={setKategori}
        // harga={harga}
        // setHarga={setHarga}
        // status={status}
        // setStatus={setStatus}
        // searchCars={searchCars}
        // setCars={setCars}
        dataKategori={dataKategori}
        dataHarga={dataHarga}
        searched={searched}
      />
      <div className="flex w-[75%] mt-40 mx-auto gap-10">
        <div className="flex flex-col w-[60%] gap-6 border border-gray-300 rounded-md p-4 font-bold ">
          <span>Tentang Paket</span>
          <span>
            Include
            <ul className="list-disc px-4 text-gray-400 font-bold pt-2">
              {listInclude.map((data, i) => (
                <li className="pt-1" key={i}>
                  {data}
                </li>
              ))}
            </ul>
          </span>
          <span>
            Exclude
            <ul className="list-disc px-4 text-gray-400 font-bold pt-2 ">
              {listExclude.map((data, i) => (
                <li className="pt-1" key={i}>
                  {data}
                </li>
              ))}
            </ul>
          </span>
          <div className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title text-base font-bold p-0 min-h-0">
              <span>Refund, Reschedule, Overtime</span>
            </div>
            <div className="collapse-content">
              <ul className="list-disc px-4 text-gray-400 font-bold pt-2">
                {listRefund.map((data, i) => (
                  <li className="pt-1" key={i}>
                    {data}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 border border-gray-300 rounded-md p-4 mb-auto gap-10">
          <img src={dataCar.image} className="w-3/4 mx-auto" alt="" />
          <span className="font-bold">{dataCar.name}</span>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M11.5 10.5004V9.50043C11.4997 9.05729 11.3522 8.62682 11.0807 8.27659C10.8092 7.92636 10.4291 7.67621 10 7.56543"
                stroke="#8A8A8A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 10.5V9.5C8.5 8.96957 8.28929 8.46086 7.91421 8.08579C7.53914 7.71071 7.03043 7.5 6.5 7.5H2.5C1.96957 7.5 1.46086 7.71071 1.08579 8.08579C0.710714 8.46086 0.5 8.96957 0.5 9.5V10.5"
                stroke="#8A8A8A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 1.56543C8.43021 1.67558 8.81152 1.92578 9.08382 2.27658C9.35612 2.62739 9.50392 3.05884 9.50392 3.50293C9.50392 3.94701 9.35612 4.37847 9.08382 4.72927C8.81152 5.08008 8.43021 5.33028 8 5.44043"
                stroke="#8A8A8A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.5 5.5C5.60457 5.5 6.5 4.60457 6.5 3.5C6.5 2.39543 5.60457 1.5 4.5 1.5C3.39543 1.5 2.5 2.39543 2.5 3.5C2.5 4.60457 3.39543 5.5 4.5 5.5Z"
                stroke="#8A8A8A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {dataKategori.map(({ display, value }, i) => {
              return value === dataCar.category ? (
                <span key={i} className="text-gray-500">
                  {display}
                </span>
              ) : (
                <span key={i}></span>
              );
            })}
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Total</span>
            <span className="font-bold">
              Rp. {formattedNumber(dataCar.price)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetail;
