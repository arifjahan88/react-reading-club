import React, { useState } from "react";
import "./SideDetails.css";
import logo from "../Logo/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SideDetals = (props) => {
  const [time, settime] = useState(0);

  const toastmake = () => {
    toast.success("Activity Complited", {
      position: "top-center",
      theme: "dark",
    });
  };
  return (
    <div>
      <div className="name-details">
        <img src={logo} alt="" />
        <div>
          <h4>Md Arif Jahan</h4>
          <p>
            <small>Dhaka, Bangladesh</small>
          </p>
        </div>
      </div>
      <div className="weight-details">
        <div>
          <h3>75 Kg</h3>
          <p>Weight</p>
        </div>
        <div>
          <h3>6.5</h3>
          <p>Height</p>
        </div>
        <div>
          <h3>25 yrs</h3>
          <p>Age</p>
        </div>
      </div>
      <h2>Add a Break</h2>
      <div className="break-part">
        <button className="break-time">
          <p>10</p>
        </button>
        <button className="break-time">
          <p>20</p>
        </button>
        <button className="break-time">
          <p>30</p>
        </button>
        <button className="break-time">
          <p>40</p>
        </button>
        <button className="break-time">
          <p>50</p>
        </button>
      </div>
      <h2>Reading Details</h2>
      <div className="time-part">
        <div className="time-container">
          <h3>Reading Time</h3>
          <p>{time} Seconds</p>
        </div>
      </div>
      <div className="time-part">
        <div className="time-container">
          <h3>Break Time</h3>
          <p>0 Seconds</p>
        </div>
      </div>
      <button onClick={toastmake} className="activity-btn">
        <p>Activity Completed</p>
      </button>
      <ToastContainer />
    </div>
  );
};

export default SideDetals;
