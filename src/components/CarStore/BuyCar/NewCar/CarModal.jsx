import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup,
  Input,
  InputGroup,
} from "reactstrap";
import "./CarModal.css";

const NewCarModal = (args) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <div>
        <Button
          color="error"
          size="small"
          variant="outlined"
          style={{
            color: "white",
            boxShadow: "0px 0px 6px grey",
          }}
          onClick={toggle}
        >
          Select Filters
        </Button>
        <Modal centered={true} isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>Filters</ModalHeader>
          <ModalBody className="container body">
            <FormGroup className="d-flex gap-4">
              <Label for="selectMake">Make</Label>
              <Input type="select" id="selectMake">
                <option></option>
                <option>Suzuki</option>
                <option>Toyota</option>
                <option>Honda</option>
                <option>Nissan</option>
                <option>Daihatsu</option>
              </Input>
            </FormGroup>
            <FormGroup className="d-flex gap-4">
              <Label for="inputGroup">Price</Label>
              <InputGroup id="inputGroup">
                <Input multiple type="select">
                  <option>From</option>
                  <option>100,000 PKR</option>
                  <option>200,000 PKR</option>
                  <option>300,000 PKR</option>
                  <option>400,000 PKR</option>
                  <option>500,000 PKR</option>
                  <option>600,000 PKR</option>
                  <option>700,000 PKR</option>
                  <option>800,000 PKR</option>
                  <option>900,000 PKR</option>
                  <option>1,000,000 PKR</option>
                  <option>1,500,000 PKR</option>
                  <option>2,000,000 PKR</option>
                  <option>2,500,000 PKR</option>
                </Input>
                <Input multiple type="select">
                  <option>To</option>
                  <option>200,000 PKR</option>
                  <option>300,000 PKR</option>
                  <option>400,000 PKR</option>
                  <option>500,000 PKR</option>
                  <option>600,000 PKR</option>
                  <option>700,000 PKR</option>
                  <option>800,000 PKR</option>
                  <option>900,000 PKR</option>
                  <option>1,000,000 PKR</option>
                  <option>1,500,000 PKR</option>
                  <option>2,000,000 PKR</option>
                  <option>3,000,000 PKR</option>
                </Input>
              </InputGroup>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Filter
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export default NewCarModal;
