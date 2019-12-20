import React from "react";

import { Card, CardTitle, CardSubtitle, CardBody } from "reactstrap";

export default function CharacterCard(props) {
  return (
    <Card className="card-wrapper" key={props.id}>
      <CardBody className="card-body">
      <CardTitle>Name: {props.name}</CardTitle>
      <CardSubtitle>Status: {props.status}</CardSubtitle>
      <CardSubtitle>Species: {props.species}</CardSubtitle>
      </CardBody>
    </Card>
  );
}
