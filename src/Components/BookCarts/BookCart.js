import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import "./BookCart.css";
import SideDetals from "../SideDetails/SideDetals";

const BookCart = () => {
  const [cards, setcards] = useState([]);

  useEffect(() => {
    fetch("Details.json")
      .then((res) => res.json())
      .then((data) => setcards(data));
  }, []);
  return (
    <div className="container">
      <div className="bookcart">
        {cards.map((card) => (
          <Cards key={card.id} card={card}></Cards>
        ))}
      </div>
      <div className="bookcartdetails">
        <SideDetals cart={cards}></SideDetals>
      </div>
    </div>
  );
};

export default BookCart;
