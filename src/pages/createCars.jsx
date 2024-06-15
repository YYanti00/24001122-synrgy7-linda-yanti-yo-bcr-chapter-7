import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateCars() {
  const [manufacture, setManufacture] = useState("");
  const [image, setImage] = useState("");
  const [rentPerDay, setRentPerDay] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const navigate = useNavigate();

  const addCar = (e) => {
    e.preventDefault();
    const newCar = {
      plate: "DH100UT",
      manufacture,
      model: "Pathfiner",
      image,
      rentPerDay,
      capacity,
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, unde officia. ",
      availableAt: new Date(),
      transmission: "Automatic",
      available: true,
      type: "Sedan",
      year: "2024",
      options: [],
      specs: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    fetch("http://localhost:8000/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCar),
    }).then(() => {
      setCapacity(0);
      setManufacture("");
      setRentPerDay(0);

      navigate("/admin");
    });
  };

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
                    <li className="breadcrumb-item">
                      <a href="cars">List Car</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Add New Car
                    </li>
                  </ol>
                </nav>
              </div>
              <div>
                <h2>Add New Car</h2>
              </div>
            </div>
            <div className="form">
              <form>
                <div className="form-group bg-white p-4 rounded">
                  <div className="row mb-3">
                    <label
                      htmlFor="manufacture"
                      className="col-sm-2 col-form-label required"
                    >
                      Nama
                    </label>
                    <div className="col-sm-10 col-md-5">
                      <input
                        type="text"
                        className="form-control"
                        id="manufacture"
                        placeholder="Input Car Name"
                        name="manufacture"
                        value={manufacture}
                        onChange={(e) => setManufacture(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="capacity"
                      className="col-sm-2 col-form-label required"
                    >
                      Size
                    </label>
                    <div className="col-sm-10 col-md-5">
                      <select
                        className="form-select"
                        name="capacity"
                        aria-label="Default select example"
                        value={capacity}
                        id="capacity"
                        onChange={(e) => setCapacity(e.target.value)}
                      >
                        <option hidden>Select Size</option>
                        <option value="2">Small</option>
                        <option value="4">Medium</option>
                        <option value="6">Large</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="harga"
                      className="col-sm-2 col-form-label required"
                    >
                      Harga
                    </label>
                    <div className="col-sm-10 col-md-5">
                      <input
                        type="number"
                        className="form-control"
                        id="harga"
                        placeholder="Input price"
                        name="rentPerDay"
                        value={rentPerDay}
                        onChange={(e) => setRentPerDay(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="image"
                      className="col-sm-2 col-form-label required"
                    >
                      Gambar
                    </label>
                    <div className="col-sm-10 col-md-5">
                      <input
                        type="text"
                        className="form-control"
                        id="image"
                        placeholder="Input image url"
                        name="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="finishRent"
                      className="col-sm-2 col-form-label"
                    >
                      Finish Rent
                    </label>
                    <div className="col-sm-10 col-md-5 align-self-center">
                      <span>-</span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="createdAt"
                      className="col-sm-2 col-form-label"
                    >
                      Created at
                    </label>
                    <div className="col-sm-10 col-md-5 align-self-center">
                      <span>-</span>
                    </div>
                  </div>
                  <div className="row">
                    <label
                      htmlFor="updatedAt"
                      className="col-sm-2 col-form-label"
                    >
                      Updated at
                    </label>
                    <div className="col-sm-10 col-md-5 align-self-center">
                      <span>-</span>
                    </div>
                  </div>
                </div>
                <Link to={"/admin"}>
                  <button
                    type="button"
                    className="btn btn-primary-blue-border me-2 my-3"
                  >
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  className="btn btn-primary-blue my-3"
                  onClick={(e) => addCar(e)}
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateCars;
