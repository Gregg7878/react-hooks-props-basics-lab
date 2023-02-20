import React from "react";

const Links = ({ links }) => {
  return (
    <div>
      <a href={links.github}>GitHub</a>
      <a href={links.linkedin}>LinkedIn</a>
    </div>
  );
};

export default Links;
