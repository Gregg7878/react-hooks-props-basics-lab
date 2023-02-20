import React from "react";

const Home = ({ username, city, color }) => {
  return (
    <div>
      <h1 style={{ color: color }}>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
};

export default Home;
