import "./SideDetails.css";
import logo from "../Logo/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { addToDb, getstoreddata } from "../../utilities/fakedb";

const SideDetals = (props) => {
  const [newBreak, setBreak] = useState(0);

  const toastmake = () => {
    toast.success("Activity Complited", {
      position: "top-center",
      theme: "dark",
    });
  };

  useEffect(() => {
    const storeddata = getstoreddata();
    console.log(storeddata);
    for (const value in storeddata) {
      //const adedvalue = storeddata[value];
      setBreak(value);
      console.log(value);
    }

    //console.log(storeddata);
    //setBreak(adedvalue);
  }, []);

  const getbreaktime = (value) => {
    setBreak(value);
    addToDb(value);
    console.log(newBreak);
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
        <button onClick={() => getbreaktime("10")} className="break-time">
          10
        </button>
        <button onClick={() => getbreaktime("20")} className="break-time">
          20
        </button>
        <button onClick={() => getbreaktime("30")} className="break-time">
          30
        </button>
        <button onClick={() => getbreaktime("40")} className="break-time">
          40
        </button>
        <button onClick={() => getbreaktime("50")} className="break-time">
          50
        </button>
      </div>
      <h2>Reading Details</h2>
      <div className="time-part">
        <div className="time-container">
          <h3>Reading Time</h3>
          <p>{props.newtime} Seconds</p>
        </div>
      </div>
      <div className="time-part">
        <div className="time-container">
          <h3>Break Time</h3>
          <p>{newBreak} Seconds</p>
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
