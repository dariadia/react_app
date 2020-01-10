import React, { Component } from "react";
import Conditional from "./Conditional.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      unreadMessages: [
        "Call your mom!",
        "New spam email available. All links are definitely safe to click."
      ]
    };
  }
  renderConditionals() {
    return this.state.unreadMessages.map(el => (
      <li>
        <Conditional e={el} />
      </li>
    ));
  }
  // &&
  render() {
    return (
      <div>
        <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
        <ol>{this.renderConditionals()}</ol>
      </div>
    );
  }
}

export default App;
