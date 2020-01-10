import React from "react";
import Card from "react-bootstrap/Card";

const CharacterCard = props => {
  return (
    <Card style={{ width: 400, outline: "1px solid blue" }}>
      <Card.Body style={{ padding: 20 }}>
        <Card.Title>{props.aboutCharacter.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Birth year: {props.aboutCharacter.birth_year}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Height: {props.aboutCharacter.height}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Mass: {props.aboutCharacter.mass}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Hair color: {props.aboutCharacter.hair_color}{" "}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Skin color: {props.aboutCharacter.skin_color}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
