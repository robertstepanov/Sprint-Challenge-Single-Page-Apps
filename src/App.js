import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";

import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";

export default function App() {
  return (
    <main>
      <Header />
      <div>
        <Route exact path="/">
          <WelcomePage />
        </Route>
      </div>
      <CharacterList />
    </main>
  );
}
