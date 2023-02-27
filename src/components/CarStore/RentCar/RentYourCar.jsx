import React, { useState } from "react";
import { Col } from "reactstrap";
import "../BuyCar/UsedCar/UsedCar.css";
import RentCarCard from "./RentCarCard";


const RentYourCar = () => {
  let [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="main" style={{ marginTop: "10vh" }}>
        <div className="row ">
          <div
            className="col-lg-12 col-md-12 col-sm-12 bg-dark text-light pb-3"
            style={{ textAlign: "center" }}
          >
            <h2 className="mt-3">RENT A CAR</h2>
            <small>
              Here is a list of cars available for renting in Pakistan
            </small>
            <Col className="d-flex justify-content-center align-items-center">
              <input
                type="text"
                style={{ height: "2rem", width: "12rem" }}
                className="search-input"
                placeholder="Search"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                  console.log(searchTerm);
                }}
              />
            </Col>
          </div>
          <div className="container">
            <RentCarCard searchTerm={searchTerm} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RentYourCar;
