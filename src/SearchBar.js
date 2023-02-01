import React, { useState } from "react";

const SearchBar = ({ users, setSearchedUser }) => {
  const [searchText, setSearchText] = useState("");

  function searchUser(searchText) {
    const filteredSearchedData = users.filter((user) => {
      return user.name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });
    return filteredSearchedData;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredData = searchUser(searchText);
    setSearchedUser(filteredData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Enter name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
