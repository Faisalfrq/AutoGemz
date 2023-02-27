import React from "react";
import { useState } from "react";
import {
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  Label,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
} from "reactstrap";
import { useAddNewCarMutation } from "../../../../features/newCars/newCarSlice";
// import "./CarModal.css";

const AddCarNew = (args) => {
  const [modal, setModal] = useState(false);
  const [addNewCar] = useAddNewCarMutation();

  const toggle = () => setModal(!modal);
  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      carInfo: { value: carInfo },
      year: { value: year },
      enginetype: { value: enginetype },
      transmission: { value: transmission },
      color: { value: color },
      price: { value: price },
      description: { value: description },
      image: { value: image },
    } = event.target.elements;

    addNewCar({
      carInfo: carInfo,
      year: year,
      enginetype: enginetype,
      transmission: transmission,
      color: color,
      price: price,
      description: description,
      image: image,
    });
    // console.log(carInfo,year);
    toggle()
    alert("New Car Posted, Please refresh page")
  };
  return (
    <>
      <div>
        <Button
          className="btn btn-light mt-3"
          style={{
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
          onClick={toggle}
        >
          Add New Car
        </Button>
        <Modal
          centered={true}
          isOpen={modal}
          toggle={toggle}
          {...args}
          fullscreen
        >
          <ModalHeader toggle={toggle}>ADD NEW CAR</ModalHeader>
          <ModalBody className="container body">
            <Form onSubmit={handleSubmit} style={{ color: "black" }}>
              <FormGroup row>
                <Label for="carInfo" sm={2}>
                  Car carInfo
                </Label>
                <Col sm={10}>
                  <Input
                    id="carInfo"
                    name="carInfo"
                    placeholder="Make/Model/Version"
                    type="text"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="year" sm={2}>
                  year
                </Label>
                <Col sm={10}>
                  <Input id="year" name="year" type="text" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="enginetype" sm={2}>
                  Engine Type
                </Label>
                <Col sm={10}>
                  <Input id="enginetype" name="enginetype" type="select">
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
                <Label for="pri" sm={2}>
                  Starting price (Rs)
                </Label>
                <Col sm={10}>
                  <InputGroup id="pri">
                    <Button className="btn-dark" disabled>
                      PKR
                    </Button>
                    <Input
                      type="text"
                      id="price"
                      name="price"
                      placeholder="price"
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
                    <Input
                      id="description"
                      name="description"
                      type="textarea"
                    />
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
              <Button className="btn btn-light mt-5" outline>
                Submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

export default AddCarNew;
