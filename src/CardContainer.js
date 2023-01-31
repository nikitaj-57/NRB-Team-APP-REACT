import React from "react";
import CardComponent from "./CardComponent";
import data from "./data/data";

const CardContainer = () => {
  return (
    <div className="grid lg:grid-cols-3">
      {data.map((user) => (
        <CardComponent key={user.id} user={user} />
      ))}
    </div>
  );
};

export default CardContainer;
