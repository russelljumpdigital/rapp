import React, { useState } from "react";
import Naviation from "./Navigation";
import SearchBar from "./Search/SearchBar";
import Results from "./Search/Results";
import { useSelector } from "react-redux";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const allUsers = useSelector((state) => state.allUsers);
  const user = useSelector((state) => state.user);

  const results = allUsers.filter((potentialFriend) => {
    //if already a friend
    if (user.friends && user.friends.includes(potentialFriend.id)) return;

    return potentialFriend.userName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  return (
    <>
      Search
      <Naviation />
      <SearchBar setSearchTerm={setSearchTerm} />
      {results.length > 0 ? (
        <Results results={results} />
      ) : (
        <p>Sorry, no friends found</p>
      )}
    </>
  );
};

export default Search;
