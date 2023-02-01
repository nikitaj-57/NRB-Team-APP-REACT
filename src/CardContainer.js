import React, { useEffect } from "react";
import CardComponent from "./CardComponent";
// import data from "./data/data";

const CardContainer = ({ users }) => {
  useEffect(() => {}, []);
  return (
    <div className="grid lg:grid-cols-3">
      {users.map((user) => (
        <CardComponent key={user.id} user={user} />
      ))}
    </div>
  );
};

export default CardContainer;
