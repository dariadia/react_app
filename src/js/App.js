import React, { Component } from "react";
import logo from "../assets/logo.svg";
import "../styles/App.css";
import Image from "./Image.js";

class App extends Component {
  constructor() {
    super();
    this.images = [
      { id: 1, src: "./assets/cat.jpg", title: "Mr Whiskers" },
      { id: 2, src: "./assets/kitty.jpeg", title: "Snowball" }
    ];
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  getImages() {
    return this.images.map(img => (
      <Image src={img.src} title={img.title} key={img.id} says={img.says} />
    ));
  }
  handleClick() {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.getImages()}
        </header>
        <div>
          <p>{this.state.count}</p>
          <button onClick={this.handleClick}>Click Here!</button>
        </div>
      </div>
    );
  }
}

export default App;
