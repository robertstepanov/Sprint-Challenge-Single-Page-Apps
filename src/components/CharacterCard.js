import React from "react";
import CharacterList from "./CharacterList";

export default function CharacterCard(props) {
  return (
    <div key={props.id}>
      <h2>Name: {props.name}</h2>
      <h3>Status: {props.status}</h3>
      <h3>Species: {props.species}</h3>
    </div>
  );
}
