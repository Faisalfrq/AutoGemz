import React, { useState } from "react";
import { BsGem } from "react-icons/bs";
import "./Auth.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  // setCredentials,
  useLazyLoginUserQuery,
} from "../../features/auth/authSlice";
import { useLazyLoginAdminQuery } from "../../features/admin/adminSlice";
// import { useDispatch } from "react-redux";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailLabel, setEmailLabel] = useState("Enter Email");
  const [passwordLabel, setPasswordLabel] = useState("Enter Password");
  const [button, setButton] = useState("Login");

  // const dispatch = useDispatch();
  const [loginUser] = useLazyLoginUserQuery();
  const [adminLogin] = useLazyLoginAdminQuery()

  const navigate = useNavigate();
  const handleLogin = () => {
    if (password === "" && email === "") {
      setEmailLabel("Please Enter Email");
      setPasswordLabel("Enter Password First");
      setButton("Something Missing");
    } else if (password === "" || email === "") {
      setEmailLabel("Please Enter Email");
      setPasswordLabel("Please Enter Password");
      setButton("Something Missing");
    } else {
      loginUser({ email, password }, true).then((response) => {
        const { token } = response.data;
        const { user } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("ID",user._id)
        localStorage.setItem("name",user.name)
        localStorage.setItem("email",user.email)
        localStorage.setItem("address",user.address)
        localStorage.setItem("phone", user.phone);
        localStorage.setItem("profileImg", user.profileImg);
        localStorage.setItem("posts", user.posts);

        // console.log(localStorage.getItem("email"));
        // console.log(localStorage.getItem("name"));
        // console.log(localStorage.getItem("ID"));
        navigate("/")
        // console.log(admin.data);
        // if (
        //   (admin.data?.data.email === email) &
        //   (admin.data?.data.password === password)
        // ) {
        //   navigate("/dashboard");
        // } else {
        //   navigate("/");
        // }
      });
      adminLogin({ email, password }, true).then((response) => {
        const { token } = response.data
        const { user } = response.data
        localStorage.setItem("adminToken", token);
        console.log(localStorage.getItem("token"));
        console.log(user);
        navigate("/dashboard")

      })

      // loginUser({ email, password }, true)
      //   .then((response) => {
      //     // debugger
      //     const { data } = response.data;
      //     localStorage.setItem("token", data.token)
      /** NAVIGATE TO DASHBOARD OR WHATEVER THE PROTECTED ROUTE
           * YOU WANNA SHOW TO THE USER
           *
           * you can also write token to localstorage if you don't want to use mutation
           * data sharing
        //    * SAMPLE NAVIAGTION*/
      //   dispatch(setCredentials(data));
      //   navigate("/");
      // })
      // .catch(() => {
      //   alert("Login Failed");
      /** NAVIGATE TO A FALLBACK ROUTE OR
       * SHOW A MESSAGE SAYING LOGIN WAS NOT SUCCESSFUL
       */
      // });
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
              <input
                type="email"
                name={email}
                value={email}
                placeholder={emailLabel}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                name={password}
                value={password}
                placeholder={passwordLabel}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div
              className="icons col-12"
              style={{
                textAlign: "center",
                color: "white",
                marginTop: "-1rem",
              }}
            >
              <Button
                id="iconBtn"
                style={{
                  fontSize: "3rem",
                  borderRadius: "50%",
                  background: "none",
                  border: "none",
                }}
              >
                <AiFillGoogleCircle />
              </Button>
              <Button
                id="iconBtn"
                style={{
                  fontSize: "2.6rem",
                  borderRadius: "50%",
                  background: "none",
                  border: "none",
                }}
              >
                <BsFacebook />
              </Button>
            </div>
            <div className="col-12 d-flex justify-content-center mt-2 mb-2 gap-3">
              <Button
                className="btn btn-light"
                size="small"
                onClick={handleLogin}
              >
                {button}
              </Button>
            </div>
            <Link
              to={"/signup"}
              style={{
                textAlign: "center",
                textDecoration: "none",
                color: "red",
              }}
            >
              Don't have an account?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
