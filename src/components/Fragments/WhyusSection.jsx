function WhyusSection() {
  return (
    <section
      id="section__whyus"
      className="container-md flex-md-row px-3 px-md-5 my-md-5"
    >
      <div className="container-fluid p-0 pt-md-5">
        <article
          className="mb-3 text-center text-md-start"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
        >
          <h2>Why Us?</h2>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </article>
        <article className="d-flex flex-wrap flex-xl-nowrap mt-5">
          <div className="row grid gap-3 m-auto justify-content-evenly justify-content-md-start">
            <div
              className="section__whyus_container col-12 col-sm-5 col-xl-3 border-neutral rounded p-4"
              data-aos="flip-down"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="section__whyus_icon_container mb-2">
                <i className="section__whyus_icon" data-feather="thumbs-up"></i>
              </div>
              <h3>Mobil Lengkap</h3>
              <p>
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
            <div
              className="section__whyus_container col-12 col-sm-5 col-xl-3 border-neutral rounded p-4"
              data-aos="flip-down"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-easing="ease-in-sine"
            >
              <div className="section__whyus_icon_container mb-2">
                <i className="section__whyus_icon" data-feather="tag"></i>
              </div>
              <h3>Harga Murah</h3>
              <p>
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </p>
            </div>
            <div
              className="section__whyus_container col-12 col-sm-5 col-xl-3 border-neutral rounded p-4"
              data-aos="flip-down"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="section__whyus_icon_container mb-2">
                <i className="section__whyus_icon" data-feather="clock"></i>
              </div>
              <h3>Layanan 24 Jam</h3>
              <p>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </p>
            </div>
            <div
              className="section__whyus_container col-12 col-sm-5 col-xl-3 border-neutral rounded p-4"
              data-aos="flip-down"
              data-aos-duration="1000"
              data-aos-delay="400"
              data-aos-easing="ease-in-sine"
            >
              <div className="section__whyus_icon_container mb-2">
                <i className="section__whyus_icon" data-feather="award"></i>
              </div>
              <h3>Sopir Profesional</h3>
              <p>
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default WhyusSection;
