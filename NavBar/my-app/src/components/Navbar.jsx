import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='bg-gray-800 p-4 text-white flex justify-between'>
        <Link to='/'
        className='font-extrabold text-white hover:text-fuchsia-500 '>Home</Link>
         <Link to='/about'className='font-extrabold text-white hover:text-fuchsia-500 '>About</Link>
        <Link to='/contact' className='font-extrabold text-white hover:text-fuchsia-500 '>Contact</Link>

    </nav>
  );
}

export default Navbar
