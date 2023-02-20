import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

const App = () => {
  return (
    <div>
      <NavBar />
      <div id="home">
        <Home username={user.name} city={user.city} color={user.color} />
      </div>
      <div id="about">
        <About bio={user.bio} links={user.links} />
      </div>
    </div>
  );
};

export default App;
