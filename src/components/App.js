import React from 'react';
import Home from './Home';
import About from './About';

const App = () => {
  const user = {
    name: 'John Doe',
    age: 28,
    bio: 'John is a software developer who loves to code.',
    githubLink: 'https://github.com/johndoe',
    linkedinLink: 'https://www.linkedin.com/in/john-doe-123456/'
  }

  return (
    <div>
      <Home name={user.name} age={user.age} />
      <About bio={user.bio} githubLink={user.githubLink} linkedinLink={user.linkedinLink} />
    </div>
  );
};

export default App;