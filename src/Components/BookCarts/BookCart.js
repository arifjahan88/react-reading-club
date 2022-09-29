import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import "./BookCart.css";
import SideDetals from "../SideDetails/SideDetals";

const BookCart = () => {
  const [cards, setcards] = useState([]);
  const [newtime, setTime] = useState(0);

  useEffect(() => {
    fetch("Details.json")
      .then((res) => res.json())
      .then((data) => setcards(data));
  }, []);

  const HundleClick = (time) => {
    const newtimes = time + newtime;
    const fineltime = parseInt(newtimes);
    setTime(fineltime);
  };

  return (
    <div className="container">
      <div className="bookcart">
        {cards.map((card) => (
          <Cards
            key={card.id}
            card={card}
            handleclickcart={HundleClick}
          ></Cards>
        ))}
      </div>
      <div className="bookcartdetails">
        <SideDetals card={cards} newtime={newtime}></SideDetals>
      </div>
    </div>
  );
};

export default BookCart;
