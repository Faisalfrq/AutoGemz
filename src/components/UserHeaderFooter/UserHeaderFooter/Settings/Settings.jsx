import React from "react";
import "./Settings.css";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineUser,
} from "react-icons/ai";
import {
  useDeleteUserMutation,
  useGetOneUserQuery,
  useUpdateUserMutation,
} from "../../../../features/users/userSlice";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const userID = localStorage.getItem("ID");
  const { data } = useGetOneUserQuery(userID);
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const handleUpdate = (event) => {
    event.preventDefault();
    const {
      //   profileImg: { value: profileImg },
      name: { value: name },
      email: { value: email },
      phone: { value: phone },
      address: { value: address },
      password: { value: password },
    } = event.target.elements;
    updateUser({
      id: userID,
      payload: {
        // profileImg: profileImg,
        name: name,
        email: email,
        phone: phone,
        address: address,
        password: password,
      },
    });
    alert("Updated Success");
    console.log("Working");
  };
  return (
    <div className="mainSettingDiv">
      <Row className="settings border">
        <Col
          className="d-flex justify-content-center"
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <h2> User Profile </h2>
        </Col>
        <Col
          className="d-flex justify-content-center"
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <img
            src={data?.user.profileImg}
            className="img-fluid UserProfileImg"
            alt="User Profile"
          />
          <Button
            className="btn btn-primary p-0 m-1"
            style={{ height: "2rem", width: "6rem" }}
            onClick={handleUpdate}
          >
            Update
          </Button>
          <Button
            className="btn btn-danger p-0 m-1 "
            style={{ height: "2rem", width: "6rem" }}
            onClick={() => {
              deleteUser(userID);
              navigate("/login");
            }}
          >
            Delete
          </Button>
        </Col>
        <Row className="mt-2">
          <Col
            lg={6}
            md={6}
            sm={6}
            xs={6}
            className="d-flex justify-content-end"
          >
            <div style={{ height: "2rem", width: "8rem" }}>
              <h3>
                <AiOutlineUser className="mb-2" />
                <strong>Name</strong>
              </h3>
            </div>
          </Col>
          <Col
            lg={6}
            md={6}
            sm={6}
            xs={6}
            className="d-flex justify-content-start"
          >
            <input
              id="name"
              name="name"
              type="text"
              className="form-control"
              style={{ height: "2rem", width: "12rem" }}
              defaultValue={data?.user.name}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col
            lg={6}
            md={6}
            sm={6}
            xs={6}
            className="d-flex justify-content-end"
          >
            <div style={{ height: "2rem", width: "8rem" }}>
              <h3>
                <AiOutlineMail className="mb-2" />
                <strong>Email</strong>
              </h3>
            </div>
          </Col>
          <Col
            lg={6}
            md={6}
            sm={6}
            xs={6}
            className="d-flex justify-content-start"
          >
            <input
              type="text"
              className="form-control"
              style={{ height: "2rem", width: "12rem" }}
              defaultValue={data?.user.email}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col
            lg={6}
            md={6}
            sm={6}
            xs={6}
            className="d-flex justify-content-end"
          >
            <div style={{ height: "2rem", width: "8rem" }}>
              <h3>
                <AiOutlinePhone className="mb-2" />
                <strong>Phone</strong>
              </h3>
            </div>
          </Col>
          <Col
            lg={6}
            md={6}
            sm={6}
            xs={6}
            className="d-flex justify-content-start"
          >
            <input
              type="text"
              className="form-control"
              style={{ height: "2rem", width: "12rem" }}
              defaultValue={data?.user.phone}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col
            lg={6}
            md={6}
            sm={6}
            xs={6}
            className="d-flex justify-content-end"
          >
            <div style={{ height: "2rem", width: "9.2rem" }}>
              <h3>
                <AiOutlineHome className="mb-2" />
                <strong>Address</strong>
              </h3>
            </div>
          </Col>
          <Col
            lg={6}
            md={6}
            sm={6}
            xs={6}
            className="d-flex justify-content-start"
          >
            <input
              type="text"
              className="form-control"
              style={{ height: "2rem", width: "12rem" }}
              defaultValue={data?.user.address}
            />
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Settings;
