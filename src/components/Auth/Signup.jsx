import React, { useState } from "react";
import { BsGem } from "react-icons/bs";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import "./Auth.css";
import { Button, Form } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAddUsersMutation } from "../../features/users/userSlice";

const Signup = () => {
  const navigate=useNavigate()
  const [addUsers] = useAddUsersMutation();
  const [Name, setName] = useState("");
  const [NameLabel, setNameLabel] = useState("Enter Full Name");
  const [Email, setEmail] = useState("");
  const [EmailLabel, setEmailLabel] = useState("Enter Email");
  const [Contact, setContact] = useState("");
  const [ContactLabel, setContactLabel] = useState("Enter Phone Number");
  const [Address, setAddress] = useState("");
  const [AddressLabel, setAddressLabel] = useState("Enter Permanent Address");
  const [Password, setPassword] = useState("");
  const [PasswordLabel, setPasswordLabel] = useState(
    "Enter Password(Min 8 Char)"
  );
  const [PasswordText, setPasswordText] = useState();
  const minLength = "8";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      Name === "" &&
      Email === "" &&
      Contact === "" &&
      Address === "" &&
      Password === ""
    ) {
      setNameLabel("Full Name Please");
      setEmailLabel("Enter Valid Email");
      setContactLabel("Enter Phone Number");
      setAddressLabel("Your Permanent Address");
      setPasswordLabel("Enter Secure Password");
    } else if (
      Name === "" ||
      Email === "" ||
      Contact === "" ||
      Address === "" ||
      Password === ""
    ) {
      setNameLabel("Full Name Please");
      setEmailLabel("Enter Valid Email");
      setContactLabel("Enter Phone Number");
      setAddressLabel("Your Permanent Address");
      setPasswordLabel("Enter Secure Password");
    } else {
      const {
        profileImg: { value: profileImg },
        name: { value: name },
        email: { value: email },
        phone: { value: phone },
        address: { value: address },
        password:{value:password}
      } = event.target.elements;
      addUsers({
        profileImg: profileImg,
        name: name,
        email: email,
        phone: phone,
        address: address,
        password:password
      });
      console.log(profileImg, name, email, phone, address, password);
      alert("Signed in Successfully, Now Login Please")
      navigate("/login")
    }
  };
  return (
    <>
      <div
        className="main"
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <div
            className="container form"
            style={{
              width: "35vw",
              backgroundColor: "black",
              opacity: "0.7",
              borderRadius: "1rem",
              boxShadow: "0rem 0rem 24px 2rem ",
              border: "1rem solid black",
            }}
          >
            <div className="row">
              <div className="col-12 mt-2" style={{ textAlign: "center" }}>
                <h1 className=" d-inline" style={{ color: "Grey" }}>
                  AUTO
                </h1>
                <BsGem
                  className="mb-4 m-1"
                  style={{ color: "white", fontSize: "1.5rem" }}
                />
                <h1 className="d-inline" style={{ color: "red" }}>
                  GEMZ
                </h1>
              </div>
              <div className="inputs col-12">
                <div className="cont" style={{ marginLeft: "4rem" }}>
                  <div className="button-wrap">
                    <label className="filebutton" htmlFor="profileImg">
                      Image <CameraAltIcon />
                    </label>
                    <input id="profileImg" name="profileImg" type="file" />
                  </div>
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={NameLabel}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <input
                  id="email"
                  name="email"
                  type="Email"
                  placeholder={EmailLabel}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  placeholder={ContactLabel}
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                />
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder={AddressLabel}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
                <input
                  id="password"
                  name="password"
                  type="Password"
                  placeholder={PasswordLabel}
                  minLength={minLength}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (Password.length < minLength) {
                      setPasswordText("Minimum 9 character Password");
                      if (
                        Password.length === minLength ||
                        Password.length > minLength
                      ) {
                        setPasswordText();
                      } else {
                        setPasswordText("Minimum 9 character Password");
                      }
                    } else {
                      setPasswordText();
                    }
                  }}
                />
              </div>
              <span
                style={{
                  marginTop: "-0.5rem",
                  marginBottom: "0.5rem",
                  textAlign: "center",
                  color: "red",
                }}
              >
                {PasswordText}
              </span>

              <div className="col-12 d-flex justify-content-center mt-2 mb-2 gap-3">
                <Button className="btn btn-light" size="small">
                  Sign Up
                </Button>
              </div>
              <Link
                to={"/login"}
                style={{
                  textAlign: "center",
                  textDecoration: "none",
                  color: "red",
                }}
              >
                Already Have an Account
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
