import Footer from "../components/Fragments/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import NavbarUser from "../components/Fragments/NavbarUser";
import Highlights from "../components/Fragments/Highlights";
import { useCars, CarsProvider } from "./CarsProvider";

const SearchCar = () => {
  Aos.init();
  const { cars } = useCars();
  const [refresh, setRefresh] = useState(true);
  const [tipeDriver, setTipeDriver] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [waktuJemput, setWaktuJemput] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [filteredCar, setFilteredCar] = useState([]);

  useEffect(() => {
    setRefresh(false);
  }, [cars]);

  const filterCars = () => {
    const tanggalCar = new Date(`${tanggal} ${waktuJemput}`).valueOf();
    console.log(tanggalCar);
    const filteredCar = cars.filter(
      (car) =>
        car.available == tipeDriver &&
        tanggalCar >= Date.parse(car.availableAt) &&
        car.capacity >= capacity
    );
    console.table(filteredCar);
    setFilteredCar(filteredCar);
  };

  return (
    <>
      <NavbarUser />
      <Highlights />
      <section className="d-flex justify-content-center">
        <div
          className="box-shadow__high d-flex px-3 bg-white rounded flex-wrap py-4 py-xl-1"
          id="containerFilter"
        >
          <div className="py-xl-4 py-2">
            <label htmlFor="dropboxTipedriver" aria-required="true">
              Tipe Driver
            </label>
            <select
              className="form-select"
              id="dropboxTipedriver"
              required
              value={tipeDriver}
              onChange={(e) => setTipeDriver(e.target.value)}
            >
              <option value="" hidden>
                Pilih Tipe Driver
              </option>
              <option value="0">Dengan Sopir</option>
              <option value="1">Tanpa Sopir(Lepas Kunci)</option>
            </select>
          </div>
          <div className="py-xl-4 py-2">
            <label htmlFor="tanggal">Tanggal</label>
            <input
              className="form-control"
              type="date"
              id="tanggal"
              aria-placeholder="Pilih Tanggal"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              required
            />
          </div>
          <div className="py-xl-4 py-2">
            <label htmlFor="dropboxWaktuJemput">Waktu Jemput/Ambil</label>
            <select
              className="form-select"
              id="dropboxWaktuJemput"
              required
              value={waktuJemput}
              onChange={(e) => setWaktuJemput(e.target.value)}
            >
              <option value="" hidden>
                Pilih Waktu
              </option>
              <option value="08:00">08.00 WIB</option>
              <option value="09:00">09.00 WIB</option>
              <option value="10:00">10.00 WIB</option>
              <option value="11:00">11.00 WIB</option>
              <option value="12:00">12.00 WIB</option>
            </select>
          </div>
          <div className="py-xl-4 py-2">
            <label htmlFor="inputJumlahPenumpang">Jumlah Penumpang</label>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                id="inputJumlahPenumpang"
                placeholder="Isi banyak penumpang"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
              <span>
                <i className="iconPenumpang" data-feather="users"></i>
              </span>
            </div>
          </div>
          <div className="py-md-4 py-2">
            <button
              type="submit"
              className="btn btn-success"
              id="btnCari"
              onClick={filterCars}
            >
              Cari Mobil
            </button>
          </div>
        </div>
      </section>

      <section className="section__hasilCariMobil container-xl d-flex justify-content-center">
        <div
          className="row px-md-5 mt-5 justify-content-center justify-content-md-start"
          id="container_hasilCariMobil"
        ></div>
        <div
          className="row px-md-5 mt-5 justify-content-center justify-content-md-start"
          id="container_hasilCariMobil"
        >
          {filteredCar.map((car) => (
            <div className="card box-shadow__low border-0" key={car.id}>
              <div className="container_image mb-3">
                <img
                  src={`${car.image}`}
                  alt=""
                  className="card-img-top"
                  id="card_imageMobil"
                />
              </div>

              <div className="card-body">
                <div className="card-content">
                  <h6 className="card-title">
                    {car.manufacture}/{car.model}
                  </h6>
                  <h5 className="card-text">
                    Rp.{" "}
                    {new Intl.NumberFormat("in-ID", {
                      maximumSignificantDigits: 10,
                    }).format(car.rentPerDay)}
                    /hari
                  </h5>
                  <p className="card-text">{car.description}</p>
                  <div className="my-3">
                    <span>
                      <i className="fa-solid fa-user-group"></i>
                      <span> {car.capacity}</span>
                    </span>
                    <span>
                      <i className="fa-solid fa-gear"></i>
                      <span>{car.transmission}</span>
                    </span>
                    <span>
                      <i className="fa-regular fa-calendar"></i>
                      <span>Tahun {car.year}</span>
                    </span>
                  </div>
                </div>
                <div className="d-flex">
                  <button
                    type="button"
                    className="btn btn-success rounded-0 full-width me-3"
                  >
                    <span>Sewa</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};
export default () => (
  <CarsProvider>
    <SearchCar />
  </CarsProvider>
);
