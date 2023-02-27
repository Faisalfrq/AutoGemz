import React, { useState } from "react";
import { useGetAllCarsQuery } from "../../../features/cars/carSlice";
import { useGetAllFeedsQuery } from "../../../features/feedback/feedbackSlice";
import { useGetAllNewCarsQuery } from "../../../features/newCars/newCarSlice";
import { useGetAllUsersQuery } from "../../../features/users/userSlice";
import DatePicker from "react-date-picker";


const SingleCArd = () => {
  let time = new Date().toLocaleTimeString();
  const [value, onChange] = useState(new Date());
  const [ctime, setTime] = useState(time);
  const newCars = useGetAllNewCarsQuery()
  const usedCars = useGetAllCarsQuery()
  const allUsers = useGetAllUsersQuery()
  const allFeeds = useGetAllFeedsQuery()
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(UpdateTime);
  const data = [
    {
      title: "New Cars",
      totalNumber: newCars.data?.cars.length,
      icon: "ri-car-fill",
    },
    {
      title: "Used Cars",
      totalNumber: usedCars.data?.cars.length,
      icon: "ri-steering-2-line",
    },
    {
      title: "Users",
      totalNumber: allUsers.data?.users.length,
      icon: "ri-user-line",
    },
    {
      title: "Feedbacks",
      totalNumber: allFeeds.data?.data.length,
      icon: "ri-feedback-line",
    },
    {
      title: "Rented Out Cars",
      totalNumber: 1000,
      icon: "ri-money-dollar-box-line",
    },
    {
      title: <DatePicker className="bg-secondary" onChange={onChange} value={value}/>,
      totalNumber: ctime,
      icon: "ri-time-line",
    },
  ];
  return (
    <>
      <div
        className="container main"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15vh",
          height: "85vh",
          width: "71vw",
          marginLeft:"29vw",
        }}
      >
        <div className="container mb-3" style={{marginTop:"-5rem"}}>
          <h2 style={{color:"black", fontWeight:"bold"}}>Welcome Back Admin</h2>
          <h4>Here is an Overview of the Gemz</h4>
        </div>
        <div className="row gap-5">
          {data.map((dat, idx) => {
            return (
              <div
                className="col-3 bg-dark text-light"
                key={idx}
                style={{
                  borderRadius: "1rem",
                  textAlign: "center",
                  padding: "1rem",
                  boxShadow: "0px 0px 1rem 4px grey",
                }}
              >
                <div className="single_card">
                  <span className="card_icon">
                    <i className={dat.icon}></i>
                  </span>
                  <div className="card_content">
                    <h4>{dat.title}</h4>
                    <span style={{fontSize:"1.5rem", fontWeight:"bold", color:"red"}}>{dat.totalNumber}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SingleCArd;
