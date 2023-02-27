import React from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
} from "reactstrap";
import DialpadIcon from "@mui/icons-material/Dialpad";
import { useAddRentCarMutation } from "../../../features/rent/rentSlice";
import { useNavigate } from "react-router-dom";

const RentOutCar = () => {
  const [addRentCar] = useAddRentCarMutation();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    debugger;
    const {
      pickup: { value: pickup },
      info: { value: info },
      engineType: { value: engineType },
      transmission: { value: transmission },
      color: { value: color },
      rentPerDay: { value: rentPerDay },
      description: { value: description },
      image: { value: image },
      contact: { value: contact },
      secondContact: { value: secondContact },
    } = event.target.elements;

    addRentCar({
      pickup: pickup,
      info: info,
      engineType: engineType,
      transmission: transmission,
      color: color,
      rentPerDay: rentPerDay,
      description: description,
      image: image,
      contact: contact,
      secondContact: secondContact,
    });
    navigate("/sellCar");
    alert("Successfully Rented Out");
  };
  return (
    <div className="main" style={{ marginTop: "11vh" }}>
      <div className="container mb-4">
        <div
          className="head bg-dark text-light mb-2"
          style={{ textAlign: "center" }}
        >
          <h2>Car information</h2>
          <small>All Fields Are Mandatory</small>
        </div>
        <Form style={{ color: "white" }} onSubmit={handleSubmit}>
          <FormGroup row>
            <Label for="pickup" sm={2}>
              pickup
            </Label>
            <Col sm={10}>
              <Input
                id="pickup"
                name="pickup"
                placeholder="Enter Pickup Location"
                type="text"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="info" sm={2}>
              Car info
            </Label>
            <Col sm={10}>
              <Input
                id="info"
                name="info"
                placeholder="Make/Model/Version"
                type="text"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="engineType" sm={2}>
              Engine Type
            </Label>
            <Col sm={10}>
              <Input id="engineType" name="engineType" type="select">
                <optgroup label="Fuel">
                  <option>Diesel</option>
                  <option>Petrol</option>
                </optgroup>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="transmission" sm={2}>
              transmission
            </Label>
            <Col sm={10}>
              <Input id="transmission" name="transmission" type="select">
                <optgroup label="transmission">
                  <option>Automatic</option>
                  <option>Manual</option>
                </optgroup>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="color" sm={2}>
              color
            </Label>
            <Col sm={10}>
              <Input id="color" name="color" type="select">
                <option></option>
                <option>White</option>
                <option>Silver</option>
                <option>Black</option>
                <option>Gray</option>
                <option>Blue</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="ren" sm={2}>
              rentPerDay Per Day (Rs)
            </Label>
            <Col sm={10}>
              <InputGroup id="ren">
                <Button className="btn-dark" disabled>
                  PKR
                </Button>
                <Input
                  type="text"
                  id="rentPerDay"
                  name="rentPerDay"
                  placeholder="rentPerDay"
                />
              </InputGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="desc" sm={2}>
              description
            </Label>
            <Col sm={10}>
              <InputGroup id="desc">
                <Input id="description" name="description" type="textarea" />
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="img" sm={2}>
              Upload image
            </Label>
            <Col sm={10}>
              <InputGroup id="img">
                <Input
                  id="image"
                  name="image"
                  type="file"
                  style={{ zIndex: "100" }}
                />
              </InputGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="No." sm={2}>
              Mobile Number
            </Label>
            <Col sm={10}>
              <InputGroup id="No.">
                <Button className="btn-dark" disabled>
                  <DialpadIcon />
                </Button>
                <Input
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder="Mobile Number"
                />
              </InputGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="secondContact" sm={2}>
              Second Number
            </Label>
            <Col sm={10}>
              <Input
                id="secondContact"
                name="secondContact"
                type="text"
                placeholder="Second Number"
              />
            </Col>
          </FormGroup>
          <Button className="btn btn-light" outline>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RentOutCar;
