import React from "react";
import "./NewCar.css";
import NewCarCard from "./NewCarCard";
import NewCarModal from "./CarModal";
import {
  SiFerrari,
  SiMercedes,
  SiLamborghini,
  SiBugatti,
  SiLandrover,
  SiFord,
} from "react-icons/si";

const NewCar = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ textAlign: "center", marginTop: "10vh" }}
      >
        <div className="row">
          <div
            className="container gap-5 col-4 d-flex justify-content-center bg-dark"
            style={{ alignItems: "center" }}
          >
            <SiFerrari
              color="#f23500"
              style={{ height: "5rem", width: "5rem" }}
            />
            <SiMercedes
              color="#f23500"
              style={{ height: "4rem", width: "4rem" }}
            />
            <SiFord color="#f23500" style={{ height: "5rem", width: "5rem" }} />
          </div>
          <div className="col-4 bg-dark">
            <h1 className="text-light mt-2">FIND NEW CARS</h1>
            <small className="text-light mb-1">
              Find information about the new cars in market
            </small>
            <div className="mt-3 mb-3">
              <NewCarModal />
            </div>
          </div>
          <div
            className="container gap-5 col-4 d-flex justify-content-center bg-dark"
            style={{ alignItems: "center" }}
          >
            <SiLamborghini
              color="#f23500"
              style={{ height: "5rem", width: "5rem" }}
            />
            <SiBugatti
              color="#f23500"
              style={{ height: "4rem", width: "4rem" }}
            />
            <SiLandrover
              color="#f23500"
              style={{ height: "5rem", width: "5rem" }}
            />
          </div>
          <NewCarCard />
        </div>
      </div>
    </>
  );
};

export default NewCar;
