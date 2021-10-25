import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar handleClick={handleClick} isOpen={isOpen} />
      <Sidebar handleClick={handleClick} isOpen={isOpen} />
    </>
  );
}

export default App;
