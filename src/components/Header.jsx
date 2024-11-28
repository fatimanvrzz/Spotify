import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800">
      <h1 className="text-xl font-bold">Spotify UI</h1>
      <nav>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </header>
  );
};

export default Header;
