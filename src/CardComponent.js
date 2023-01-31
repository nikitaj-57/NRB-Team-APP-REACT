import React from "react";

const CardComponent = (props) => {
  const { name, img, company, role, location } = props.user;
  return (
    <div className="mx-5 my-5 border-2 border-orange-400 gap-2 items-center flex">
      <div>
        <img className="h-40 w-44" src={img} alt="" />
      </div>
      <div>
        <div className="flex">
          <h1>Name : {name}</h1>
          {/* <img src="" alt="github logo" /> */}
        </div>
        <h2>Designation : {role}</h2>
        <h3>Company : {company}</h3>
        <h4>Location : {location}</h4>
      </div>
    </div>
  );
};

export default CardComponent;
