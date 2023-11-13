import { useRef } from "react";

/* eslint-disable react/prop-types */
const HeroSearch = (props) => {
  const dropdownPriceRef = useRef(null);

  const handleDropdownPriceClick = () => {
    dropdownPriceRef.current.removeAttribute("open");
  };

  const closeDropdownPrice = () => {
    dropdownPriceRef.current.removeAttribute("open");
  };
  const dropdownCategoryRef = useRef(null);

  const handleDropdownCategoryClick = () => {
    dropdownCategoryRef.current.removeAttribute("open");
  };

  const closeDropdownCategory = () => {
    dropdownCategoryRef.current.removeAttribute("open");
  };
  return (
    <section className="w-full bg-primary h-72 px-40 relative flex justify-center">
      <div className="flex flex-col mt-24 p-7 border-2 rounded-md bg-white absolute -bottom-20 shadow-md gap-6 w-[75%]">
        <span className="font-bold">Pencarianmu</span>
        <div className="flex gap-4">
          <div className="flex">
            <div className="flex flex-col gap-4">
              <span>Nama Mobil</span>
              <input
                type="text"
                value={props.nama}
                onChange={(event) => {
                  props.setNama(event.target.value);
                  console.log("ini nama", props.nama);
                }}
                placeholder="Innova"
                className="py-2 px-2 rounded-sm border border-black"
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col gap-4">
              <span>Kategori</span>
              {/* <input
                type="text"
                value={props.kategori}
                onChange={(event) => props.setKategori(event.target.value)}
                placeholder="6-8 Orang"
                className="py-2 px-2 rounded-sm border border-black"
              /> */}
              <details
                ref={dropdownCategoryRef}
                className="dropdown "
                onClick={closeDropdownCategory}
              >
                {props.kategori ? (
                  <summary
                    className="btn min-h-0 h-11 hover:bg-white rounded-sm border border-black bg-white"
                    onClick={handleDropdownCategoryClick}
                  >
                    {props.kategori.display}
                  </summary>
                ) : (
                  <summary
                    className="btn min-h-0 h-11 hover:bg-white rounded-sm border border-black bg-white text-gray-400"
                    onClick={handleDropdownCategoryClick}
                  >
                    Masukkan Kapasitas Mobil
                  </summary>
                )}

                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  {props.dataKategori.map(({ display, value }, i) => (
                    <li key={i}>
                      <a
                        onClick={() => {
                          props.setKategori({ display: display, value: value });
                          dropdownCategoryRef.current.removeAttribute("open"); // Close the dropdown after selecting an item
                        }}
                      >
                        {display}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col gap-4">
              <span>Harga</span>
              <details
                ref={dropdownPriceRef}
                className="dropdown"
                onClick={closeDropdownPrice}
              >
                {props.harga ? (
                  <summary
                    className="btn min-h-0 h-11 hover:bg-white rounded-sm border border-black bg-white"
                    onClick={handleDropdownPriceClick}
                  >
                    {props.harga.display}
                  </summary>
                ) : (
                  <summary
                    className="btn min-h-0 h-11 hover:bg-white rounded-sm border border-black bg-white text-gray-400"
                    onClick={handleDropdownPriceClick}
                  >
                    Masukkan Harga Sewa per Hari
                  </summary>
                )}

                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  {props.dataHarga.map(({ display, minPrice, maxPrice }, i) => (
                    <li key={i}>
                      <a
                        onClick={() => {
                          props.setHarga({
                            display: display,
                            minPrice: minPrice,
                            maxPrice: maxPrice,
                          });
                          dropdownPriceRef.current.removeAttribute("open"); // Close the dropdown after selecting an item
                        }}
                      >
                        {display}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
              {/* <details className="dropdown  ">
                {props.harga && (
                  <summary className=" btn min-h-0 h-11 hover:bg-white rounded-sm border border-black bg-white">
                    {props.harga.display}
                  </summary>
                )}
                <summary className=" btn min-h-0 h-11 hover:bg-white rounded-sm border border-black bg-white text-gray-400">
                  Masukkan Harga Sewa per Hari
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  {props.dataHarga.map(({ display, minPrice, maxPrice }, i) => (
                    <li key={i}>
                      <a
                        onClick={() =>
                          props.setHarga({
                            display: display,
                            minPrice: minPrice,
                            maxPrice: maxPrice,
                          })
                        }
                      >
                        {display}
                      </a>
                    </li>
                  ))}
                </ul>
              </details> */}
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col gap-4">
              <span>Status</span>
              <input
                type="text"
                value={props.status}
                onChange={(event) => props.setStatus(event.target.value)}
                placeholder="Disewakan"
                className="py-2 px-2 rounded-sm border border-black"
              />
            </div>
          </div>
          {/* {dataForm.map((data, i) => (
            <BoxSearch
              nama={props.nama}
              setNama={props.setNama}
              kategori={props.kategori}
              setKategori={props.setKategori}
              harga={props.harga}
              setHarga={props.setHarga}
              status={props.status}
              setStatus={props.setStatus}
              data={data}
              key={i}
            />
          ))} */}
          <button
            className="border h-11 w-24 mt-auto flex justify-center items-center border-customBlue text-customBlue"
            onClick={() => props.searchCars()}
          >
            {props.searched ? (
              <span className="cursor-pointer">Edit</span>
            ) : (
              <span className="cursor-pointer">Search</span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSearch;
