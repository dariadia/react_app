import React, { Component } from "react";
import "../styles/style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.getDietaryRestrictions = this.getDietaryRestrictions.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState(prevState => {
          return {
            dietaryRestrictions: {
              ...prevState.dietaryRestrictions,
              [name]: checked
            }
          };
        })
      : this.setState({
          [name]: value
        });
  }

  getDietaryRestrictions() {
    const values = Object.values(this.state.dietaryRestrictions);
    const keys = Object.keys(this.state.dietaryRestrictions).map(el =>
      el.slice(2).toLowerCase()
    );
    return values.map((el, index) => `${keys[index]} : ${el}; `);
  }

  render() {
    return (
      <div className="container">
        <form>
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <br />

          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <br />

          <input
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age"
          />
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />{" "}
            Male
          </label>

          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />{" "}
            Female
          </label>

          <br />

          <select
            value={this.state.destination}
            name="destination"
            onChange={this.handleChange}
          >
            <option value="">-- Please Choose a destination --</option>
            <option value="germany">Germany</option>
            <option value="norway">Norway</option>
            <option value="north pole">North Pole</option>
            <option value="south pole">South Pole</option>
          </select>

          <br />

          <label>
            <input
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.isVegan}
            />{" "}
            Vegan?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.isKosher}
            />{" "}
            Kosher?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              onChange={this.handleChange}
              checked={this.state.dietaryRestrictions.isLactoseFree}
            />{" "}
            Lactose Free?
          </label>
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions:
          {this.getDietaryRestrictions()}
        </p>
      </div>
    );
  }
}

export default App;
