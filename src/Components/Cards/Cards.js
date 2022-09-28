import React from "react";
import "./Card.css";

const Cards = (props) => {
  const { name, img, time, details, age } = props.card;
  return (
    <div className="card-container">
      <div>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>{details}</p>
        <p>Age For : {age}</p>
        <h4>Required Time : {time}</h4>
      </div>
      <button className="btn">
        <p>Add To List</p>
      </button>
    </div>
  );
};

export default Cards;
