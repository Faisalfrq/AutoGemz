import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import {
  useDeleteUsedCarMutation,
  useGetAllCarsQuery,
} from "../../../../features/cars/carSlice";

const Selling = () => {
  const { data } = useGetAllCarsQuery();
  const [deleteUsedCar] = useDeleteUsedCarMutation();
  const parseFilePath = (path) => {
    if (path.match(/fakepath/)) {
      // const endPath = path.split('\\')[2]
      const newp = path.replace(/C:\\fakepath\\/i, `/`);
      // console.log("new path", newp);
      return newp;
    } else {
      return path;
    }
  };
  return (
    <>
      <div
        className="main"
        style={{
          height: "85vh",
          marginTop: "15vh",
          width: "72vw",
          marginLeft: "25vw",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 style={{ color: "white" }}>
                Here are the cars that are currently avilable for sale in Auto
                Gemz
              </h4>
            </div>
            {data?.cars.map((car, idx) => {
              return (
                <div className="col-12 mt-3" key={idx}>
                  <div className="container card p-2 text-dark">
                    <div className="row gap-1 " style={{ textAlign: "center" }}>
                      <div className="col-1">
                        <img
                          src={parseFilePath(car.image)}
                          alt="Loading"
                          style={{
                            height: "5rem",
                            width: "5rem",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                      <div className="col-3 mt-3">
                        <h6>{car.carInfo}</h6>
                        <h6>{car.year}</h6>
                      </div>
                      <div className="col-2 mt-4">
                        <h6>{car.transmission}</h6>
                      </div>
                      <div className="col-2 mt-4">
                        <h6>{car.enginetype}</h6>
                      </div>
                      <div className="col-2 mt-4">
                        <h6>{car.price}</h6>
                      </div>
                      <div className="col-1 mt-3 " style={{ display: "flex" }}>
                        <NavLink to={`/dashboard/carsSale/${car._id}`}>
                          <Button className="btn-info text-light">
                            <InfoIcon />
                          </Button>
                        </NavLink>
                        <Button
                          className="btn-danger"
                          style={{ height: "2.5rem" }}
                          onClick={() => {
                            deleteUsedCar(car._id);
                          }}
                        >
                          <DeleteIcon />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Selling;
