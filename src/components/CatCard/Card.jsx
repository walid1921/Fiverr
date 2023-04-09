import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={item.img} alt="" />
        <span className="title">{item.title}</span>
        <span className="description">{item.description}</span>
      </div>
    </Link>
  );
};

export default Card;
