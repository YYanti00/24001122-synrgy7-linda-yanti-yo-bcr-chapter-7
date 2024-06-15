import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CarsContext = createContext();

export const useCars = () => {
  return useContext(CarsContext);
};

export const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (refresh) {
      fetch("http://localhost:8000/cars")
        .then((res) => res.json())
        .then((data) => {
          setRefresh(false);
          setCars(data);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted.");
          }
        });
    }
  }, [refresh]);

  const deleteCar = (id) => {
    fetch(`http://localhost:8000/cars/${id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("car deleted.");
      setRefresh(true);
      setTimeout(() => {
        alert("car deleted");
      }, 200);
    });
  };

  const updateCar = (cars, e) => {
    e.preventDefault();
    fetch("http://localhost:8000/cars/" + cars.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cars),
    }).then(() => {
      navigate("/admin");
    });
  };

  const value = {
    cars,
    deleteCar,
    updateCar,
    setRefresh,
  };

  return <CarsContext.Provider value={value}>{children}</CarsContext.Provider>;
};
