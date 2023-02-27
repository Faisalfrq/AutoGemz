import React from "react";
import { useParams } from "react-router-dom";
// import DetailsCarousel from "../NewCar/DetailsCarousel";
import { GiGearStickPattern } from "react-icons/gi";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalGasStationRoundedIcon from "@mui/icons-material/LocalGasStationRounded";
import "../UsedCar/overlay.css";
import { useGetOneNewCarQuery } from "../../../../features/newCars/newCarSlice";
// import { Badge } from "reactstrap";

const NewCarDetails = () => {
  const { id } = useParams();
  const { data } = useGetOneNewCarQuery(id);

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
                <h3>
                  {data?.car.carInfo} {data?.car.year}
                </h3>

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
                          <em>Color</em>
                        </li>
                        <li>
                          <em>Year</em>
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
                          <em>{data?.car.price}</em>
                        </li>
                        <li>
                          <em>{data?.car.enginetype}</em>
                        </li>
                        <li>
                          <em>{data?.car.transmission}</em>
                        </li>
                        <li>
                          <em>{data?.car.color}</em>
                        </li>
                        <li>
                          <em>{data?.car.year}</em>
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
                    <small>{data?.car.description}</small>
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
                    <tbody>
                      <tr>
                        <td></td>
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
                                  {data?.car.transmission}
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
                                  {data?.car.enginetype}
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
                                <div className="col-12 text-light">
                                  {data?.car.year}
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
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

export default NewCarDetails;
