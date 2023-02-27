import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Label,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
} from "reactstrap";
import {
  useGetOneNewCarQuery,
  useUpdateNewCarMutation,
} from "../../../../features/newCars/newCarSlice";
// import "./CarModal.css";

const UpdateCarNew = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetOneNewCarQuery(id);
  const [updateCarNew] = useUpdateNewCarMutation();
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

    updateCarNew({
      id: data?.car._id,
      payload: {
        carInfo: carInfo,
        year: year,
        enginetype: enginetype,
        transmission: transmission,
        color: color,
        price: price,
        description: description,
        image: image,
      },
    });
    // console.log(carInfo, year);
    // console.log(data?.car._id);
    navigate("/dashboard/carsNew");
  };
  return (
    <>
      <div
        className="container"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Form onSubmit={handleSubmit} style={{ color: "white" }}>
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
                defaultValue={data?.car.carInfo}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="year" sm={2}>
              year
            </Label>
            <Col sm={10}>
              <Input
                id="year"
                name="year"
                placeholder="Year?"
                type="text"
                defaultValue={data?.car.year}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="enginetype" sm={2}>
              Engine Type
            </Label>
            <Col sm={10}>
              <Input
                id="enginetype"
                name="enginetype"
                type="select"
                defaultValue={data?.car.enginetype}
              >
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
              <Input
                id="transmission"
                name="transmission"
                type="select"
                defaultValue={data?.car.transmission}
              >
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
              <Input
                id="color"
                name="color"
                type="select"
                defaultValue={data?.car.color}
              >
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
                  defaultValue={data?.car.price}
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
                  placeholder="Describe"
                  type="textarea"
                  defaultValue={data?.car.description}
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
      </div>
    </>
  );
};

export default UpdateCarNew;
