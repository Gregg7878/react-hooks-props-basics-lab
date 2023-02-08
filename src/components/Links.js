import React from "react";

const Links = (props) => {
    return (
      <div>
        <h3>Links</h3>
        <a href={props.githubLink}>Github</a>
        <a href={props.linkedinLink}>LinkedIn</a>
      </div>
    );
  };
  
  export default Links;