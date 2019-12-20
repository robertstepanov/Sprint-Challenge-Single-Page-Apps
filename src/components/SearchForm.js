import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";

export default function SearchForm(props) {
  const [searchName, setSearchName] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  // useEffect(
  //   props => {
  //     const results = characters.filter(character =>
  //       character.toLowerCase().includes(searchName.toLocaleLowerCase())
  //     );
  //     setSearchResults(results);
  //   },
  //   [searchName]
  // );

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
          name="textfield"
          placeholder="Search"
          value={searchName}
          onChange={handleChange}
        />
      </form>
      <div>
        <ul>
          {searchResults.map(character => (
            <li key={character}>{character}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
