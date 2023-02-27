import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";
import { Button } from "@mui/material";
import data from "./BuyCarData";
const BuyCar = () => {
  return (
    <>
      <div
        className="container d-flex justify-content-center"
        style={{ marginTop: "11vh", height: "89vh", alignItems: "center" }}
      >
        <div className="row">
          {data.map((dat, idx) => {
            return (
              <div
                className="container col-lg-4"
                style={{ textAlign: "center" }}
                key={idx}
              >
                <Card
                  className="my-2"
                  color="dark"
                  inverse
                  style={{
                    width: "18rem",
                    boxShadow: "0px 0px 1rem 2px white",
                  }}
                >
                  <CardHeader style={{ paddingTop: "1.5rem" }}>
                    <div
                      className="container d-flex justify-content-center gap-3"
                      style={{ alignItems: "center" }}
                    >
                      <span
                        style={{
                          border: "2px solid white",
                          height: "2.5rem",
                          width: "2.5rem",
                          borderRadius: "50%",
                          padding: "0.6rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center ",
                        }}
                      >
                        <dat.icon />
                      </span>
                      <CardTitle className="pt-2" tag="p">
                        {dat.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <CardText
                      className="container"
                      style={{ fontSize: "14px" }}
                    >
                      {dat.description}
                    </CardText>
                    <Link to={dat.path}>
                      <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        style={{
                          color: "white",
                          boxShadow: "0px 0px 6px grey",
                        }}
                      >
                        {dat.button}
                      </Button>
                    </Link>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BuyCar;
