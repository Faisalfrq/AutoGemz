import React from "react";
import { Link } from "react-router-dom";
import { Badge, Button } from "reactstrap";
import { useGetAllCarsQuery } from "../../../../features/cars/carSlice";

const UsedCarCard = (p) => {
  const { data } = useGetAllCarsQuery();
  let { searchTerm } = p;
  searchTerm = searchTerm.toLowerCase();
  // console.log("===>", data?.cars[9].image);
 
  const parseFilePath = (path) => {
    if (path.match(/fakepath/)) {
      // const endPath = path.split('\\')[2]
      const newp = path.replace(
        /C:\\fakepath\\/i,
        `/`
      );
      // console.log("new path", newp)
      return newp;
    } else {
      return path
    }
  }

  return (
    <>
      <div className="container-fluid main" style={{ marginLeft: "1rem" }}>
        <div className="row">
          {data?.cars.filter((car) => {
            if (searchTerm == "") {
              return car;
            } else if (car.carInfo.toLowerCase().includes(searchTerm)) {
              return car;
            }
          }).map((car,idx) => {
            return (
              <div
                className="col-12 mt-2 d-flex bg-light"
                style={{ border: "2px solid black" }}
                key={idx}
              >
                <div className="col-3">
                  <img
                    src={parseFilePath(car.image)}
                    alt="loading"
                    style={{
                      backgroundColor: "white",
                      height: "7rem",
                      width: "12rem",
                      marginTop: "1.5rem",
                      marginBottom: "1rem",
                      border: "1px solid black",
                      marginLeft: "6px",
                    }}
                  />
                </div>
                <div className="col-9">
                  <div className="row">
                    <div className="col-9" style={{ marginTop: "2.3rem" }}>
                      <h4 style={{ fontWeight: "bold", textAlign: "start" }}>
                        {car.carInfo} for Sale
                      </h4>
                      <h5>{car.city}</h5>
                      <div className="col-12">
                        <small style={{ wordSpacing: "1rem" }}>
                          {car.year} | {car.mileage} | {car.enginetype} |
                          {car.transmission}
                        </small>
                      </div>
                    </div>
                    <div className="col-3">
                      <Badge style={{ marginTop: "3rem", fontSize: "medium" }}>
                        ${car.price}
                      </Badge>
                      <div className="mt-3" style={{ marginLeft: "-2rem" }}>
                        <span key={car._id}>
                          <Link to={`/buyCar/usedCar/car/${car._id}`}>
                            <Button>DETAILS</Button>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UsedCarCard;
