import React, { useState } from "react";
import { Col } from "reactstrap";
import DropDown from "./DropDown/DropDown";
import "./UsedCar.css";
import UsedCarCard from "./UsedCarCard";

const UsedCar = () => {
  let [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="main" style={{ marginTop: "10vh" }}>
        <div className="row ">
          <div
            className="col-lg-12 col-md-12 col-sm-12 bg-dark text-light pb-3"
            style={{ textAlign: "center" }}
          >
            <h2 className="mt-3">BUY USED CARS</h2>
            <small>Here is a list of used cars for sale in Pakistan</small>
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
          <div
            className="sidebar col-lg-3 col-md-3 col-sm-3 bg-dark text-light"
            style={{ width: "22%" }}
          >
            <div className="container mb-4 mt-4 " id="sideMenu">
              <DropDown />
            </div>
          </div>
          <div className="col-lg-9 mt-4">
            <UsedCarCard searchTerm={searchTerm} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UsedCar;
