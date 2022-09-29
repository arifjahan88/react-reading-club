import "./Card.css";

const Cards = (props) => {
  const { name, img, time, details, age } = props.card;
  const { handleclickcart } = props;

  return (
    <div className="card-container">
      <div>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>{details}</p>
        <p>Age For : {age}</p>
        <h4>Required Time : {time} Seconds</h4>
      </div>
      <button onClick={() => handleclickcart(time)} className="btn">
        <p>Add To List</p>
      </button>
    </div>
  );
};

export default Cards;
