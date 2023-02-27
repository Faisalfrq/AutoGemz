import React, { useState } from "react";
import "./UserProfile.css";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import MyRentPosts from "./MyRentPosts";
import MysellPosts from "./MySellPosts";

const UserProfile = () => {
  let [postSelect, setPostSelect] = useState(true); //if true then sell posts //if false then rent posts

  let imgsrc = localStorage.getItem("profileImg");
  let UserName = localStorage.getItem("name");
  let UserEmail = localStorage.getItem("email");
  let UserPhone = localStorage.getItem("phone");
  let UserAddress = localStorage.getItem("address");
  let activePosts = localStorage.getItem("posts");
  return (
    <>
      <div className=" UserDatabg bg-secondary" style={{ marginTop: "4.5rem" }}>
        <Row className="text-light align-content-center">
          <Col
            className="d-flex justify-content-center align-items-center"
            lg={4}
            md={6}
            sm={12}
            xs={12}
          >
            <div
              className="container"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={imgsrc}
                className="UserProfileImg border rounded"
                alt="Profile"
                style={{
                  height: "7rem",
                  width: "7rem",
                }}
              />
            </div>
          </Col>
          <Col className="textData" lg={4} md={6} sm={12} xs={12}>
            <div
              className="container mt-4 mb-4"
              style={{
                display: "flex",
                // justifyContent: "center",
                //   alignItems: "center",
                flexDirection: "column",
                color: "white",
              }}
            >
              <h4 className="userName"> {UserName} </h4>
              <p>
                <strong>Email </strong>: {UserEmail}
              </p>
              <p>
                <strong>Phone </strong>: {UserPhone}
              </p>
              <p>
                <strong>Address </strong>: {UserAddress}
              </p>
            </div>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
            lg={4}
            md={12}
            sm={12}
            xs={12}
          >
            <Row>
              <Col
                className="d-flex justify-content-center align-items-center"
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                <h3>Active Posts: {activePosts}</h3>
              </Col>
              <Col
                className="d-flex justify-content-center align-items-center"
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                <Button
                  className="btn btn-light p-0 m-1 d-inline"
                  style={{ height: "1.6rem" }}
                  onClick={() => setPostSelect(false)}
                >
                  Show Rental Posts
                </Button>
                <Button
                  className="btn btn-danger p-0 m-1 d-inline"
                  style={{ height: "1.6rem" }}
                  onClick={() => setPostSelect(true)}
                >
                  Show Sell Posts
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div>
        {postSelect ? (
          <>
            <MysellPosts />
          </>
        ) : (
          <>
            <MyRentPosts />
          </>
        )}
      </div>
    </>
  );
};

export default UserProfile;
