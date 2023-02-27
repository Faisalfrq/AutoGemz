import React from "react";
import { GiGearStickPattern } from "react-icons/gi";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalGasStationRoundedIcon from "@mui/icons-material/LocalGasStationRounded";
import "../BuyCar/UsedCar/overlay.css";
import { Badge } from "reactstrap";
import { useGetOneRentCarsQuery } from "../../../features/rent/rentSlice";
import { useParams } from "react-router-dom";

const RentCarDetails = () => {
  const { id } = useParams();
  const { data } = useGetOneRentCarsQuery(id);
  return (
    <>
      <div className="bgImage" style={{ marginTop: "6vh" }}>
        <div className="overlay">
          <div
            className="holder"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="container-fluid row mt-3">
              <div className="col-12">
                <h3>{data?.data.info}</h3>

                <hr style={{ width: "100%" }} />
              </div>
              <div className="row">
                <div className="col-5" style={{ textAlign: "center" }}>
                  <h5>Specifications</h5>
                  <div className="row container-fluid">
                    <div className="col-6">
                      <ul
                        style={{
                          listStyleType: "none",
                          lineHeight: "2rem",
                          textAlign: "start",
                        }}
                      >
                        <li>
                          <em>Price</em>
                        </li>
                        <li>
                          <em>Fuel Type</em>
                        </li>
                        <li>
                          <em>Transmission</em>
                        </li>
                        <li>
                          <em>Pickup Location</em>
                        </li>
                        <li>
                          <em>Color</em>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul
                        style={{
                          listStyleType: "none",
                          lineHeight: "2rem",
                          textAlign: "right",
                        }}
                      >
                        <li>
                          <em>{data?.data.rentPerDay}</em>
                        </li>
                        <li>
                          <em>{data?.data.engineType}</em>
                        </li>
                        <li>
                          <em>{data?.data.transmission}</em>
                        </li>
                        <li>
                          <em>{data?.data.pickup}</em>
                        </li>
                        <li>
                          <em>{data?.data.color}</em>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="container portion"
                    style={{ textAlign: "left" }}
                  >
                    <small style={{ fontWeight: "bold" }}>
                      <u>DESCRIPTION</u> :{" "}
                    </small>
                    <small>{data?.data.description}</small>
                  </div>
                  <div className=" container contacts mt-3 d-flex">
                    <h5 className="m-1">
                      <Badge>{data?.data.contact}</Badge>
                    </h5>
                    <h5 className="m-1">
                      <Badge>{data?.data.secondContact}</Badge>
                    </h5>
                  </div>
                </div>
                <div className="col-7">{/* <DetailsCarousel /> */}</div>
              </div>
              <div className="row">
                <div className="col-12 mt-2">
                  <table
                    className="container"
                    style={{
                      height: "100%",
                      width: "100%",
                      textAlign: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <tr>
                      <td>
                        <div className="container row">
                          <div className=" container col-1">
                            <GiGearStickPattern
                              style={{
                                fontSize: "3rem",
                                borderRadius: "50%",
                                padding: "0.6rem",
                                height: "3.5rem",
                                border: "1px solid white",
                                width: "3.5rem",
                                color: "white",
                                borderLeft: "4px solid white",
                                borderRight: "2px",
                              }}
                            />
                          </div>
                          <div className="col-9">
                            <div
                              className="row"
                              style={{
                                fontSize: "small",
                                marginTop: "8px",
                              }}
                            >
                              <div className="col-12 text-light">
                                TRANSMISSION
                              </div>
                              <div className="col-12 text-light">
                                {data?.data.transmission}
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="container row">
                          <div className=" container col-1">
                            <LocalGasStationRoundedIcon
                              style={{
                                fontSize: "3rem",
                                borderRadius: "50%",
                                padding: "0.6rem",
                                height: "3.5rem",
                                border: "1px solid white",
                                width: "3.5rem",
                                color: "white",
                                borderLeft: "4px solid white",
                                borderRight: "2px",
                              }}
                            />
                          </div>
                          <div className="col-9">
                            <div
                              className="row"
                              style={{
                                fontSize: "small",
                                marginTop: "8px",
                              }}
                            >
                              <div className="col-12 text-light">
                                ENGINE TYPE
                              </div>
                              <div className="col-12 text-light">
                                {data?.data.engineType}
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="container row">
                          <div className=" container col-1">
                            <CalendarMonthIcon
                              style={{
                                fontSize: "3rem",
                                borderRadius: "50%",
                                padding: "0.6rem",
                                height: "3.5rem",
                                border: "1px solid white",
                                width: "3.5rem",
                                color: "white",
                                borderLeft: "4px solid white",
                                borderRight: "2px",
                              }}
                            />
                          </div>
                          <div className="col-9">
                            <div
                              className="row"
                              style={{
                                fontSize: "small",
                                marginTop: "8px",
                              }}
                            >
                              <div className="col-12 text-light">
                                MODEL YEAR
                              </div>
                              {/* <div className="col-12 text-light">
                                {data?.data.year}
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentCarDetails;
