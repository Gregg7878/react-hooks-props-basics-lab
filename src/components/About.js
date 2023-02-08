import React from "react";

const About = (props) => {
  let bioDisplay;

  if (props.bio && props.bio !== '') {
    bioDisplay = <p>{props.bio}</p>;
  }

  return (
    <div>
      <h3>About</h3>
      {bioDisplay}
    </div>
  );
};

export default About;
