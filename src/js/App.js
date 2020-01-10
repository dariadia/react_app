import React, { Component } from "react";
import CharacterCard from "./CharacterCard.js";
import "../styles/style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      loading: true,
      search: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: false });
    fetch("https://swapi.co/api/people")
      .then(response => response.json())
      .then(data => this.setState({ characters: data.results }));
  }

  renderCharacters() {
    return this.state.characters.map(
      character =>
        Object.values(character).map(value =>
          value
            //есть ли введенный символ среди всех значений объекта
            .includes(this.state.search)
            //получаем массив совпадений типа [[true,false],[false,true]], сокращаем до [1,1]
            .map(el => el.reduce((a, b) => a + b))
            //сокращаем, если >= 1, то хотя бы одно значение было true, нам подходит этот персонаж
            .reduce((a, b) => a + b)
        ) >= 1 && (
          <CharacterCard aboutCharacter={character} key={character.name} />
        )
    );
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const content = this.state.loading ? "loading..." : this.renderCharacters();
    setTimeout(console.log("Rendered!"), 1000); // после каждого render
    return (
      <div className="container">
        <input
          type="text"
          value={this.state.search}
          name="search"
          placeholder="Search for ..."
          onChange={this.handleChange}
        />
        <br />
        {content}
      </div>
    );
  }
}

export default App;
