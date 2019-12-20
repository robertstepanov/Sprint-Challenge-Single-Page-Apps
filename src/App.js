import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { Route, Switch, Link } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Header />
      <CharacterList />
    </main>
  );
}
