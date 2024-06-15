import { Link } from "react-router-dom";

function Highlights() {
  return (
    <>
      <main>
        <section
          id="section__home"
          className="d-flex justify-content-center align-items-end bg-primary-color__blue flex-column flex-md-row"
        >
          <article
            className="col-md-6 align-self-center px-3 pt-2 mb-md-4 mb-xl-0"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
          >
            <div className="ms-xl-5 ps-xl-5">
              <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p className="pe-xl-5 me-xl-5 pe-2">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <Link to={"/cars"}>
                <button className="btn btn-success">
                  <span>Mulai Sewa Mobil</span>
                </button>
              </Link>
            </div>
          </article>
          <article
            className="col-md-6 text-end ps-3 ps-md-0 pt-4 pt-md-3"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
          >
            <img
              src="/assets/img_car.png"
              className="img-fluid"
              alt="A Car Image"
            />
          </article>
        </section>
      </main>
    </>
  );
}

export default Highlights;
