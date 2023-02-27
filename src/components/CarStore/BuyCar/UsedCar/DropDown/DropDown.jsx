import React from "react";
import { Button, ButtonGroup, Input, InputGroup } from "reactstrap";
import { city, colors, make } from "./DropDownData";

const DropDown = () => {
  return (
    <>
      <div className="container row" style={{ textAlign: "center" }}>
        <div className="col-12">
          <hr />
          <h5>FILTERS</h5>
          <hr />
          <Button
            style={{
              fontSize: "small",
              marginBottom: "0.5rem",
              marginTop: "0.5rem",
            }}
          >
            Show All
          </Button>
        </div>
        <div className="col-12 d-flex mt-3 mb-2">
          <small>CITY</small>
          <hr style={{ width: "100%" }} />
        </div>
        <div className="col-12">
          {city.map((cit, idx) => {
            return (
              <div key={idx}>
                <Button
                  style={{
                    fontSize: "small",
                    marginBottom: "4px",
                    marginTop: "4px",
                    width: "100%",
                  }}
                >
                  {cit.city}
                </Button>
              </div>
            );
          })}
        </div>
        <div className="col-12 d-flex mt-3 mb-2">
          <small>MAKE</small>
          <hr style={{ width: "100%" }} />
        </div>
        <div className="col-12">
          {make.map((mak, idx) => {
            return (
              <div key={idx}>
                <Button
                  style={{
                    fontSize: "small",
                    marginBottom: "4px",
                    marginTop: "4px",
                    width: "100%",
                  }}
                >
                  {mak.make}
                </Button>
              </div>
            );
          })}
        </div>
        <div className="col-12 d-flex mt-3 mb-2">
          <small>COLOR</small>
          <hr style={{ width: "100%" }} />
        </div>
        <div className="col-12">
          {colors.map((col, idx) => {
            return (
              <div key={idx}>
                <Button
                  style={{
                    fontSize: "small",
                    marginBottom: "4px",
                    marginTop: "4px",
                    width: "100%",
                  }}
                >
                  {col.color}
                </Button>
              </div>
            );
          })}
        </div>
        <div className="col-12 d-flex mt-3 mb-2">
          <small>PRICE RANGE</small>
          <hr style={{ width: "69%" }} />
        </div>
        <div className="col-12">
          <InputGroup>
            <Input></Input>
            <Input></Input>
            <Button
              style={{
                fontSize: "small",
              }}
            >
              Go
            </Button>
          </InputGroup>
        </div>
        <div className="col-12 d-flex mt-3 mb-2">
          <small>YEAR</small>
          <hr style={{ width: "100%" }} />
        </div>
        <div className="col-12">
          <InputGroup>
            <Input></Input>
            <Input></Input>
            <Button
              style={{
                fontSize: "small",
              }}
            >
              Go
            </Button>
          </InputGroup>
        </div>
        <div className="col-12 d-flex mt-3 mb-2">
          <small>MILEAGE(KM)</small>
          <hr style={{ width: "100%" }} />
        </div>
        <div className="col-12">
          <InputGroup>
            <Input></Input>
            <Input></Input>
            <Button
              style={{
                fontSize: "small",
              }}
            >
              Go
            </Button>
          </InputGroup>
        </div>
        <div className="col-12 d-flex mt-3 mb-2">
          <small>TRANSMISSION</small>
          <hr style={{ width: "100%" }} />
        </div>
        <div className="col-12">
          <ButtonGroup>
            <Button
              style={{
                fontSize: "small",
              }}
            >
              Automatic
            </Button>
            <Button
              style={{
                fontSize: "small",
              }}
            >
              Manual
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default DropDown;
