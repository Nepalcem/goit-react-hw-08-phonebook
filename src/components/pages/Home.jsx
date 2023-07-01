import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();

  return (
    <div>
      <h1> Welcome to Phonebook application</h1>
    </div>
  );
}

export default Home;
