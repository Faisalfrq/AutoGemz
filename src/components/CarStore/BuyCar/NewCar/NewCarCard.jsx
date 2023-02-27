import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, CardBody, CardTitle } from "reactstrap";
import { useGetAllNewCarsQuery } from "../../../../features/newCars/newCarSlice";

const NewCarCard = () => {
  const { data } = useGetAllNewCarsQuery()
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
        {data?.cars.map((dat, idx) => {
          return (
            <div className="col-lg-3 col-sm-12 col-md-6" key={idx}>
              <Card
                id="card"
                className="my-2"
                inverse
                style={{
                  width: "18rem",
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">
                    {dat.carInfo} {dat.year}
                  </CardTitle>
                  <img id="cardImage" className="mt-3" src={parseFilePath(dat.image)} alt="" style={{height:"8rem"}}/>
                  <div className="row">
                    <div className="col-12">
                      <small>Starting at $ {dat.price}</small>
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    <NavLink to={`/buyCar/newCar/newCarDetail/${dat._id}`}>
                      <Button className="btn-light">Details</Button>
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

export default NewCarCard;
