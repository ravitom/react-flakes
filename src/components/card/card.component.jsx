import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img alt="monster" width="200" src={props.monster.avatar}></img>
    <h4>
      {props.monster.first_name} {props.monster.last_name}
    </h4>
    <p>{props.monster.email}</p>
  </div>
);
