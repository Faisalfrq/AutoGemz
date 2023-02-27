import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import navlinks from "../assets/navLinks";
import "../styles/dashboard.css";
import { BsGem } from "react-icons/bs";
import Unauthorized from "../../Auth/Unauthorized";
import { Button } from "@mui/material";

const SideBar = () => {
  const navigate = useNavigate();
  const adminToken = localStorage.getItem("adminToken");
  if (adminToken) {
    return (
      <>
        <div className="sidebar" style={{ position: "fixed", height: "100%" }}>
          <div className="sidebar_top">
            <div className="mt-3">
              <h2 className=" d-inline" style={{ color: "Grey" }}>
                Auto
              </h2>
              <BsGem className="mb-2 m-1" style={{ color: "white" }} />
              <h2 className="d-inline" style={{ color: "red" }}>
                Gemz
              </h2>
            </div>
          </div>
          <div className="sidebar_content">
            <div className="menu">
              <ul className="nav_list">
                {navlinks.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav_active nav_link" : "nav_link"
                      }
                    >
                      <i className={item.icon}></i>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sidebar_bottom mb-3" style={{ marginLeft: "2rem" }}>
              <i className="ri-logout-circle-r-line"> </i>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
        <Outlet />
      </>
    );
  } else if (!adminToken) {
    return (
      <>
        <Unauthorized />
      </>
    );
  }
};

export default SideBar;
