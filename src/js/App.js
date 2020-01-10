import React, { Component } from "react";
import CharacterCard from "./CharacterCard.js";
import "../styles/style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      loading: true
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
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
    const content = this.state.loading ? "loading..." : this.renderCharacters();
    setTimeout(console.log("Hi!"), 1000); // после каждого render, сейчас вызывается 3 раза
    return <div className="container">{content}</div>;
  }
}

export default App;
