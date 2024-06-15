function ServiceSection() {
  return (
    <section id="section__services" className="my-4 py-md-5">
      <div className="container-fluid p-0 pt-md-5">
        <article className="d-flex justify-content-evenly justify-content-xl-center align-items-center flex-column flex-md-row px-3 px-xl-0 gap-3 gap-xl-4">
          <div
            className="col-md-5 text-center"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
          >
            <img
              src="/assets/img_service.png"
              className="img-fluid"
              alt="A Smiling Woman"
            />
          </div>
          <div
            className="col-md-4 mt-4 mt-xl-0"
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
          >
            <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p className="pe-xl-4">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <ul className="section__services_list">
              <li>
                <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
              </li>
              <li>
                <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
              </li>
              <li>
                <p>Sewa Mobil Jangka Panjang Bulanan</p>
              </li>
              <li>
                <p>Gratis Antar - Jemput Mobil di Bandara</p>
              </li>
              <li>
                <p>Layanan Airport Transfer / Drop In Out</p>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ServiceSection;
