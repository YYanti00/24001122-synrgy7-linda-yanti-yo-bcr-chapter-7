import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="container-md px-xl-5 px-3 my-5">
      <div
        className="row flex-md-row flex-column align-items-baseline"
        data-aos="fade-zoom-in"
        data-aos-duration="800"
        data-aos-easing="ease-in-sine"
        data-aos-delay="300"
      >
        <article className="col col-md-3">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </article>
        <article className="col col-md-2">
          <ul className="navbar-nav">
            <li className="navbar-items">
              <a
                className="nav-link"
                aria-current="page"
                href="#section__services"
              >
                Our Services
              </a>
            </li>
            <li className="navbar-items">
              <a className="nav-link" href="#section__whyus">
                Why Us
              </a>
            </li>
            <li className="navbar-items">
              <a className="nav-link" href="#section__testimonial">
                Testimonial
              </a>
            </li>
            <li className="navbar-items">
              <a className="nav-link" href="#section__faq">
                FAQ
              </a>
            </li>
          </ul>
        </article>
        <article className="col col-md-3 mt-3 mt-md-0">
          <p>Connect with us</p>
          <div className="d-flex gap-2 mb-4">
            <div className="section__footer_icon_container">
              <Link to="https://www.facebook.com/">
                <i className="fa-brands fa-facebook-f section__footer_icon"></i>
              </Link>
            </div>
            <div className="section__footer_icon_container">
              <Link to="https://www.instagram.com/">
                <i className="fa-brands fa-instagram section__footer_icon"></i>
              </Link>
            </div>
            <div className="section__footer_icon_container">
              <Link to="https://twitter.com/">
                <i className="fa-brands fa-twitter section__footer_icon"></i>
              </Link>
            </div>
            <div className="section__footer_icon_container">
              <Link to="https://www.gmail.com/">
                <i className="fa-regular fa-envelope section__footer_icon"></i>
              </Link>
            </div>
            <div className="section__footer_icon_container">
              <Link to="https://www.twitch.tv/">
                <i className="fa-brands fa-twitch section__footer_icon"></i>
              </Link>
            </div>
          </div>
        </article>
        <article className="col col-md-4">
          <p>Copyright Binar 2022</p>
          <div>
            <img src="/assets/logo.png" alt="BCR Logo" />
          </div>
        </article>
      </div>
    </footer>
  );
}
