import React from "react";

const initialCharacters = [
  {
    id: "1",
    name: "Lra Ofan",
    convicted: false
  },
  {
    id: "2",
    name: "Opsad Rioaf ",
    convicted: false
  }
];

const characterReducer = (state, action) => {
  switch (action.type) {
    case "SET_FREE":
      return state.map(character => {
        if (character.id === action.id) {
          return { ...character, convicted: false };
        } else {
          return character;
        }
      });
    case "CONVICT":
      return state.map(character => {
        if (character.id === action.id) {
          return { ...character, convicted: true };
        } else {
          return character;
        }
      });
    default:
      return state;
  }
};

const App = () => {
  const [characters, dispatch] = React.useReducer(
    characterReducer,
    initialCharacters
  );

  const handleChange = character => {
    dispatch({
      type: character.convicted ? "SET_FREE" : "CONVICT",
      id: character.id
    });
  };

  return (
    <div>
      <h1>
        These characters did sth so we need to check if you have everyone on the
        list
      </h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <label>
              <input
                type="checkbox"
                checked={character.convicted}
                onChange={() => handleChange(character)}
              />
              {character.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
