import React from "react";
// import CharacterList from "./CharacterList";
import SearchForm from "./SearchForm";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <SearchForm/>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      {/* <CharacterList/> */}
    </section>
  );
}
