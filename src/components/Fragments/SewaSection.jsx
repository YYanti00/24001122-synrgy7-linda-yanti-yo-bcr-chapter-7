import { Link } from "react-router-dom";

function SewaSection() {
  return (
    <section className="container-md px-xl-5 px-3 pt-5 pb-md-5">
      <div
        className="container-fluid pt-md-5"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-in-sine"
      >
        <article className="section__sewa text-center p-5">
          <h1 className="text-white mb-0 mt-4">
            Sewa Mobil di (Lokasimu) Sekarang
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/cars">
            <button type="submit" className="btn btn-success my-4">
              <span>Mulai Sewa Mobil</span>
            </button>
          </Link>
        </article>
      </div>
    </section>
  );
}

export default SewaSection;
