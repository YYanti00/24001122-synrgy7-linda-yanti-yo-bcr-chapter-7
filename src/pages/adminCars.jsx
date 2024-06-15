import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCars, CarsProvider } from "./CarsProvider";

function AdminCars() {
  const { cars, deleteCar } = useCars();
  const [refresh, setRefresh] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  useEffect(() => {
    setRefresh(false);
  }, [cars]);
  return (
    <>
      <div className="wrapper">
        <aside id="sidebar" className="js-sidebar">
          <div className="component d-flex">
            <div className="h-100 bg-secondary-color__blue">
              <div className="text-center p-4">
                <img src="assets/Rectangle63.png" alt="" />
              </div>
              <ul className="sidebar-nav mt-3">
                <li className="sidebar-item">
                  <a
                    href="#"
                    className="aside-sidebar-link d-flex flex-column align-items-center"
                  >
                    <i className="fa-solid fa-home"></i>
                    <p className="mt-2">Dashboard</p>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="#"
                    className="aside-sidebar-link active d-flex flex-column align-items-center"
                  >
                    <i className="fa-solid fa-truck"></i>
                    <p className="mt-2">Cars</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="h-100 w-100">
              <div className="text-start p-4">
                <a href="#">
                  <img src="assets/Rectangle_logo.png" alt="" />
                </a>
              </div>
              <ul className="sidebar-nav">
                <li className="text-secondary sidebar-header fw-bold ps-4">
                  <span> CARS </span>
                </li>
                <li className="sidebar-item active ps-4 py-2">
                  <a href="#" className="sidebar-link">
                    List Car
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <div className="main">
          <nav className="navbar navbar-expand px-3 border-bottom bg-white">
            <button className="btn" id="sidebar-toggle" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse navbar">
              <ul className="navbar-nav">
                <form className="d-flex navbar-nav me-4" role="search">
                  <div className="input-group">
                    <span
                      className="input-group-text border-secondary-subtle bg-white pe-0"
                      id="basic-addon1"
                    >
                      <i className="fa-solid fa-search text-secondary"></i>
                    </span>
                    <input
                      className="form-control rounded-0 border-secondary-subtle border-start-0"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <button className="btn btn-primary-blue-border" type="submit">
                    Search
                  </button>
                </form>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    data-bs-toggle="dropdown"
                    className="nav-icon pe-md-0"
                  >
                    <img
                      src="assets/image2.png"
                      className="avatar img-fluid rounded"
                      alt=""
                    />
                    <span>Admin</span>
                    <i className="fa-solid fa-angle-down"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a href="#" className="btn dropdown-item">
                      <span>Profile</span>
                    </a>
                    <a href="#" className="btn dropdown-item">
                      <span>Setting</span>
                    </a>
                    <Link to={"/login"}>
                      <button type="submit" className="dropdown-item  fs-6">
                        <span>Logout</span>
                      </button>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <div className="container mt-5 px-5">
            <div className="row no-gutter">
              <div>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Cars</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <a href="#">List Car</a>
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="d-flex justify-content-between">
                <h2>List Car</h2>
                <div>
                  <Link to={"/createcars"}>
                    <button className="btn btn-primary-blue position-relative">
                      <i className="fa-solid fa-plus"></i>
                      <span>Add New Car</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="button-group">
              <button
                className="btn btn-primary-blue-border-2 btn-filter-car active"
                value="All"
              >
                All
              </button>
              <button
                className="btn btn-primary-blue-border-2 btn-filter-car"
                value="Small"
              >
                Small
              </button>
              <button
                className="btn btn-primary-blue-border-2 btn-filter-car"
                value="Medium"
              >
                Medium
              </button>
              <button
                className="btn btn-primary-blue-border-2 btn-filter-car"
                value="Large"
              >
                Large
              </button>
            </div>
            <div
              className="component-card my-4 d-flex justify-content-center justify-content-md-start flex-wrap"
              id="container_hasilCariMobil"
            >
              {cars.map((car) => (
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
                      </h5>
                      <div className="my-3">
                        <span>
                          <i className="fa-regular fa-calendar"></i>
                          <span>Start rent - Finish rent</span>
                        </span>
                        <span>
                          <i className="fa-regular fa-clock"></i>

                          <span>
                            Update at{" "}
                            {`${new Date(car.updatedAt).toLocaleDateString(
                              "en-us",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )} ${new Date(car.updatedAt).toLocaleTimeString(
                              "en-us",
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )}`}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="d-flex">
                      <button
                        type="button"
                        className="btn btn-outline-danger rounded-0 full-width me-3"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteCarModal"
                        data-id={car.id}
                        onClick={() => setDeleteId(car.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                        <span>Delete</span>
                      </button>
                      <Link to={`/editcars/${car.id}`} className="full-width">
                        <button
                          type="submit"
                          className="btn btn-success rounded-0 full-width"
                        >
                          <i className="fa-regular fa-pen-to-square"></i>
                          <span>Edit</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="deleteCarModal"
        tabIndex="-1"
        aria-labelledby="deleteCarModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content ">
            <form id="deleteCarForm">
              <div className="modal-header d-flex justify-content-center border-0">
                <img
                  src="assets/img-BeepBeep.png"
                  width="200"
                  className="img-thumbnail border-0"
                />
              </div>
              <div className="modal-body mt-3 text-center">
                <p className="fw-bold" style={{ fontSize: "1rem" }}>
                  Mengahapus Data Mobil
                </p>
                <p>
                  Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin
                  ingin menghapus?
                </p>
                <input type="hidden" name="carId" value={cars.id} />
              </div>
              <div className="modal-footer border-0 justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary-blue"
                  onClick={() => deleteCar(deleteId)}
                >
                  Ya
                </button>
                <button
                  type="button"
                  className="btn btn-primary-blue-border"
                  data-bs-dismiss="modal"
                >
                  Tidak
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default () => (
  <CarsProvider>
    <AdminCars />
  </CarsProvider>
);
