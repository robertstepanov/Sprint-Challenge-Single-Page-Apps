import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
  const [searchName, setSearchName] = useState("");
  const [characters, setCharacters] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  // const below when commented out breaks it
  // props not being passed down correctly
  // const characters = [];
  useEffect(() => {
    const results = characters.filter(character =>
      character.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setSearchResults(results);
    console.log(results);
  }, [characters]);

  const handleChange = event => {
    setSearchName(event.target.value);
  };

  return (
    <div>
      <form className="search-form">
        <label htmlFor="name">Search: </label>
        <input
          id="name"
          type="text"
          // name="textfield"
          placeholder="Search"
          value={searchName}
          onChange={handleChange}
        />
      </form>
      <div>
        <ul key="id">
          {searchResults.map(character => (
            <li key={character}>{character}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
