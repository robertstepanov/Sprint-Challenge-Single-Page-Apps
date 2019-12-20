import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    const getCharacters = props => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          console.log(response.data.results);
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };
    getCharacters();
  }, []);

  return (
    <section className="character-list">
      <div>
        {characters.map(character => {
          return (
            <CharacterCard
              name={character.name}
              status={character.status}
              species={character.species}
            />
          );
        })}
      </div>
    </section>
  );
}

// function CharacterDetails({ character }) {
//   const { name, status, species } = character;

//   return (
//     <div>
//       <h2>Name: {name}</h2>
//       <div>
//         <h3>{status}</h3>
//       </div>
//       <div>
//         <h3>{species}</h3>
//       </div>
//     </div>
//   );
// }
