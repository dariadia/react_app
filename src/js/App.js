import React, { Component } from "react";
import randomcolor from "randomcolor";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      color: ""
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }
  decrement() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      const newColor = randomcolor();
      this.setState({ color: newColor });
    }
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color, margin: 30 }}>
          {this.state.count}
        </h1>
        <button style={{ margin: 30 }} onClick={this.increment}>
          Increment!
        </button>
        <button onClick={this.decrement}>Decrement!</button>
      </div>
    );
  }
}

export default App;
