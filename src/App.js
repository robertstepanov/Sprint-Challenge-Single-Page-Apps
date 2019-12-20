import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";
import { Route, NavLink } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";

export default function App() {
  return (
    <main>
      <Header />
      <div>
     <Route exact path="/"><WelcomePage/></Route>
     {/* <NavLink to="{`/CharacterList`}">Character List</NavLink> */}
      </div>
      <CharacterList />
    </main>
  );
}
