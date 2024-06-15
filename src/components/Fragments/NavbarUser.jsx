import { Link } from "react-router-dom";

function NavbarUser() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary-color__blue">
        <div className="container-xl py-3 px-xl-5">
          <Link to={"/"}>
            <img src="/assets/logo.png" alt="BCR Logo" />
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarNav"
            aria-controls="offcanvasRight"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end justify-content-end"
            tabIndex="-1"
            id="navbarNav"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header ms-2 ms-xl-0">
              <h3 className="offcanvas-title" id="offcanvasRightLabel">
                BCR
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body justify-content-end pt-0">
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
                <li className="navbar-items">
                  <button
                    type="submit"
                    className="btn btn-success mt-3 mt-md-0"
                  >
                    <span>Register</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavbarUser;
