import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, CardBody, CardTitle } from "reactstrap";
import { useGetAllRentCarsQuery } from "../../../features/rent/rentSlice";

const RentCarCard = (p) => {
  const { data } = useGetAllRentCarsQuery();
  let { searchTerm } = p;
  searchTerm = searchTerm.toLowerCase();
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
      <div className="row">
        {data?.data
          .filter((car) => {
            if (searchTerm == "") {
              return car;
            } else if (car.info.toLowerCase().includes(searchTerm)) {
              return car;
            }
          })
          .map((dat) => {
            return (
              <div className="col-lg-3 col-sm-12 col-md-6" key={dat._id}>
                <Card
                  id="card"
                  className="my-2"
                  inverse
                  style={{
                    width: "18rem",
                    textAlign: "center",
                  }}
                >
                  <CardBody>
                    <CardTitle className="mb-2" tag="h5">
                      {dat.info}
                    </CardTitle>
                    <img
                      className="mt-1"
                      id="cardImage"
                      src={parseFilePath(dat.image)}
                      alt="loading"
                    />
                    <div className="row">
                      <div className="col-12">
                        <small>Rent {dat.rentPerDay} Rs per Day</small>
                      </div>
                      <NavLink
                        to={`/rentCar/rentACar/rentCarDetails/${dat._id}`}
                      >
                        <Button className="btn-light mt-3">View Details</Button>
                      </NavLink>
                    </div>
                  </CardBody>
                </Card>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default RentCarCard;
