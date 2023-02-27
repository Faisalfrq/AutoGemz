import React from "react";
import { BsGem } from "react-icons/bs";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import {
  useAddOneFeedbackMutation,
  useGetAllFeedsQuery,
} from "../../features/feedback/feedbackSlice";
import "./About.css";

const About = () => {
  const { data } = useGetAllFeedsQuery();
  const [addOneFeed] = useAddOneFeedbackMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      email: { value: email },
      status: { value: status },
      comment: { value: comment },
    } = e.target.elements;
    addOneFeed({
      email: email,
      status: status,
      comment: comment,
    });
  };
  return (
    <div style={{ marginTop: "11vh" }}>
      <div className="row">
        <div className="col-12 mt-4 mb-1" style={{ textAlign: "center" }}>
          <h1
            className=" d-inline"
            style={{ color: "black", fontWeight: "bold" }}
          >
            AUTO
          </h1>
          <BsGem
            className="mb-4 m-1"
            style={{ color: "white", fontSize: "1.5rem" }}
          />
          <h1 className="d-inline" style={{ color: "red" }}>
            GEMZ
          </h1>
          <h6 style={{ color: "white" }}>
            An Online Car Showroom, providing services like buying, selling and
            renting cars.
          </h6>
        </div>
        <hr />

        <div className="col-12 container mt-2">
          <div className="container section1">
            <h2 style={{ textTransform: "uppercase", fontWeight: "bold" }}>
              Give Us Your Feedback
            </h2>
            <div className="row ">
              <Form onSubmit={handleSubmit}>
                <div className="row mt-4">
                  <div className="col-6">
                    <FormGroup className="d-flex justify-content-center">
                      <Label for="email" lg={2} style={{ color: "white" }}>
                        Enter Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        placeholder="Enter Email"
                        type="email"
                        style={{ width: "15rem" }}
                      />
                    </FormGroup>
                  </div>
                  <div className="col-6 ">
                    <FormGroup className="d-flex justify-content-center">
                      <Label for="status" lg={2} style={{ color: "white" }}>
                        Feedback
                      </Label>
                      <Input
                        id="status"
                        name="status"
                        type="select"
                        style={{ width: "15rem" }}
                      >
                        <option>Satisfied</option>
                        <option>Not Satisfied</option>
                      </Input>
                    </FormGroup>
                  </div>
                  <div className="col-12">
                    <FormGroup className="d-flex mt-4 justify-content-center">
                      <Label for="status" lg={1} style={{ color: "white" }}>
                        Comment
                      </Label>
                      <Input
                        id="comment"
                        name="comment"
                        type="textarea"
                        placeholder="Describe Your Experience"
                        style={{ width: "60%", height: "5rem" }}
                      />
                    </FormGroup>
                    <FormGroup className="d-flex justify-content-center">
                      <Button>Submit</Button>
                    </FormGroup>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>

        <div className="container col-12 mt-1">
          <div className="container section2">
            <h2 style={{ color: "black", fontWeight: "bold" }}>
              USER FEEDBACKS
            </h2>
            <div className="row gap-5 d-flex justify-content-center mt-4 mb-5">
              {data?.data.map((dat,idx) => {
                return (
                  <div className="col-3" key={idx}>
                    <div className="container card" style={{ opacity: "0.6" }}>
                      <div
                        className="col-12 mt-2"
                        style={{ textAlign: "center" }}
                      >
                        <h5>{dat.email}</h5>
                      </div>
                      <div className="col-12">
                        <h6>{dat.status}</h6>
                      </div>
                      <div className="col-12">
                        <p>{dat.comment}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
