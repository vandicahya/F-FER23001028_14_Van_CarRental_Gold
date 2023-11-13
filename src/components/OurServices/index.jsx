import React from "react";
import ourimg from "../../assets/img_service.png";
import "./style.css";

const OurServices = () => {
  return (
    <div>
      <div class="ourservices">
        <img src={ourimg} />
      </div>
      <div class="ourservices-text">
        <h1>
          Best Car Rental for any kind of trip in
          <br />
          (Lokasimu)!
        </h1>
        <p>
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
          <br />
          lebih murah dibandingkan yang lain, kondisi mobil baru, serta
          <br />
          kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
          <br />
          meeting, dll.
        </p>
        <ul>
          <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
          <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
          <li>Sewa Mobil Jangka Panjang Bulanan</li>
          <li>Gratis Antar - Jemput Mobil di Bandara</li>
          <li>Layanan Airport Transfer / Drop In Out</li>
        </ul>
      </div>
    </div>
  );
};
export default OurServices;
