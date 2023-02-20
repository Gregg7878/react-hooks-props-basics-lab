import React from "react";
import Links from "./Links";

const About = ({ bio, links }) => {
  return (
    <div>
      <h3>About</h3>
      {bio && bio.trim() !== "" && <p>{bio}</p>}
      <Links links={links} />
    </div>
  );
};

export default About;
