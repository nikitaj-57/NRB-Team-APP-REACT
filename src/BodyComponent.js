import React, { useState } from "react";
import CardContainer from "./CardContainer";
import SearchBar from "./SearchBar";
import data from "./data/data";

const BodyComponent = () => {
  const [users, setUser] = useState(data);
  const [searchedUser, setSearchedUser] = useState([]);
  return (
    <div>
      <SearchBar users={users} setSearchedUser={setSearchedUser} />
      <CardContainer users={searchedUser.length ? searchedUser : users} />
    </div>
  );
};

export default BodyComponent;
