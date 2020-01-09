import React from "react";
import logo from "../assets/logo.svg";
import "../styles/App.css";
import Image from "./Image.js";

class App extends React.Component {
  getImages() {
    return [
      { id: 1, src: "./assets/cat.jpg", title: "Mr Whiskers" },
      { id: 2, src: "./assets/kitty.jpeg", title: "Snowball" }
    ].map(img => <Image src={img.src} title={img.title} key={img.id} />);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.getImages()}
        </header>
      </div>
    );
  }
}

export default App;
