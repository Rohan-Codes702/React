import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <nav className='ml-80'>
      <Link to="/" className='m-14'>Home</Link>
      <Link to="/about"  className='m-14'>About</Link>
      <Link to="/Contactus" className='m-14' >Contact</Link>
    </nav>
  );
}

export default Navbar;
