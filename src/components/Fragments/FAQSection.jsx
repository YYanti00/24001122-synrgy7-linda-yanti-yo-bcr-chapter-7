function FAQSection() {
  return (
    <section id="section__faq" className="container-md px-xl-5 px-3 mt-5">
      <div className="container-fluid p-0 pt-md-5">
        <div className="row">
          <article
            className="col-md-5 text-center text-md-start"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <h2>Frequently Asked Question</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </article>
          <article className="col-md-7">
            <div className="accordion" id="accordionExample">
              <div
                className="accordion-item border-0"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body border-bottom">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vero doloribus eos exercitationem consequatur est nemo
                    recusandae autem, architecto, necessitatibus sunt voluptas,
                    debitis repudiandae nam fuga ducimus! Quia et perferendis
                    voluptates!
                  </div>
                </div>
              </div>
              <div
                className="accordion-item border-0 b-0"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body border-bottom">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nemo vero a aperiam molestias quos quo beatae ea voluptatem,
                    voluptatum ipsam debitis commodi similique alias inventore.
                    Ad non obcaecati quidem. Repellendus.
                  </div>
                </div>
              </div>
              <div
                className="accordion-item border-0"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body border-bottom">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero a adipisci repudiandae eos eum necessitatibus
                    officiis at. Omnis incidunt nostrum, fugiat, recusandae aut,
                    non deserunt autem sequi vel tempora mollitia!
                  </div>
                </div>
              </div>
              <div
                className="accordion-item border-0"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body border-bottom">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero a adipisci repudiandae eos eum necessitatibus
                    officiis at. Omnis incidunt nostrum, fugiat, recusandae aut,
                    non deserunt autem sequi vel tempora mollitia!
                  </div>
                </div>
              </div>
              <div
                className="accordion-item border-0"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
              >
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Bagaimana jika terjadi kecelakaan?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body border-bottom">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero a adipisci repudiandae eos eum necessitatibus
                    officiis at. Omnis incidunt nostrum, fugiat, recusandae aut,
                    non deserunt autem sequi vel tempora mollitia!
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
