import React, { Component } from "react";
import CharacterCard from "./CharacterCard.js";
import "../styles/style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people")
      .then(response => response.json())
      .then(data => this.setState({ characters: data.results }));
  }

  renderCharacters() {
    return this.state.characters.map(character => (
      <CharacterCard aboutCharacter={character} key={character.name} />
    ));
  }

  render() {
    return <div className="container">{this.renderCharacters()}</div>;
  }
}

export default App;
