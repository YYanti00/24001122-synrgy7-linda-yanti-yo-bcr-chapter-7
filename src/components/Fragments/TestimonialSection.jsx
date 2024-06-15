function TestimonialSection() {
  return (
    <section
      className="testimonial container-fluid p-3 pt-5"
      id="section__testimonial"
    >
      <div className="container-fluid p-0 pt-md-5">
        <div className="row">
          <article
            className="text-center"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
          >
            <h2>Testimonial</h2>
            <p>Berbagai review positif dari para pelanggan kami</p>
          </article>
        </div>
        <div className="owl-carousel owl-theme mt-4 mb-md-4">
          <div
            className="item bg-primary-color__blue box-shadow__low"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="50"
            data-aos-duration="800"
          >
            <div className="row p-3">
              <div className="col-md-3 my-auto">
                <img
                  src="/assets/img_photo_pp_1.png"
                  className="section__testimonial-image rounded-circle"
                  alt="GambarPhoto2"
                />
              </div>
              <div className="col-md d-flex flex-column align-center justify-content-center">
                <div className="star d-flex justify-content-md-start justify-content-center my-3 my-md-0">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                </div>

                <p>
                  <q>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maxime, incidunt odit? Exercitationem earum officia est.
                    Dolore nobis totam quia dolores ad velit tempora accusamus
                    maiores eligendi, illo quidem modi fugit.
                  </q>
                </p>
                <p className="user fw-bold">John Dee 32, Sedayu</p>
              </div>
            </div>
          </div>
          <div
            className="item bg-primary-color__blue box-shadow__low"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="50"
            data-aos-duration="800"
          >
            <div className="row p-3">
              <div className="col-md-3 my-auto">
                <img
                  src="/assets/img_photo_pp.png"
                  className="section__testimonial-image rounded-circle"
                  alt="GambarPhoto3"
                />
              </div>
              <div className="col-md d-flex flex-column align-center justify-content-center">
                <div className="star d-flex justify-content-md-start justify-content-center my-3 my-md-0">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                </div>

                <p>
                  <q>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maxime, incidunt odit? Exercitationem earum officia est.
                    Dolore nobis totam quia dolores ad velit tempora accusamus
                    maiores eligendi, illo quidem modi fugit.
                  </q>
                </p>
                <p className="user fw-bold">John Dee 32, Sedayu</p>
              </div>
            </div>
          </div>
          <div
            className="item bg-primary-color__blue box-shadow__low"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="50"
            data-aos-duration="800"
          >
            <div className="row p-3">
              <div className="col-md-3 my-auto">
                <img
                  src="/assets/img_photo_pp_1.png"
                  className="section__testimonial-image rounded-circle"
                  alt="GambarPhoto3"
                />
              </div>
              <div className="col-md d-flex flex-column align-center justify-content-center">
                <div className="star d-flex justify-content-md-start justify-content-center my-3 my-md-0">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                </div>

                <p>
                  <q>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Maxime, incidunt odit? Exercitationem earum officia est.
                    Dolore nobis totam quia dolores ad velit tempora accusamus
                    maiores eligendi, illo quidem modi fugit.
                  </q>
                </p>
                <p className="user fw-bold">John Dee 32, Sedayu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
