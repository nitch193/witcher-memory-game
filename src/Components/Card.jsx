import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img className="character" src={props.image} alt={props.image} />
      <h5>{props.image}</h5>
    </div>
  );
};

export default Card;
