import React from "react";

const Image = props => {
  return (
    <div>
      <img height="300" src={props.src} alt="picture_of_cat" />
      <p>{props.title}</p>
    </div>
  );
};

export default Image;
