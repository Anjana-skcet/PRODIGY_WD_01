// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Avatar from '@mui/material/Avatar';
const Navbar = () => {
  return (
    <nav >
    <div style={{ display: 'flex', paddingLeft: '2px',backgroundColor:'beige'}}>
      <ul className="size" style={{ listStyleType: 'none'}}>  
        <li  style={{ float: 'left',marginRight: '10px' }}><Avatar alt="Remy Sharp" src="https://img.freepik.com/premium-photo/colorful-background-with-triangle-pattern_204916-383.jpg" /></li>
        <li  style={{ float: 'left', marginRight: '70px' }}><Link className="a" to="/">Clumsy Nails</Link></li>
        <li  style={{ float: 'left', marginRight: '30px' }}><Link className="a" to="/">ChromeRoseGold</Link></li>
        <li style={{ float: 'left', marginRight: '30px' }}><Link className="a" to="/pg2">PearlLavender</Link></li>
        <li style={{ float: 'left', marginRight: '30px' }}><Link className="a" to="/pg3">PaleBlue</Link></li>
        <li style={{ float: 'left', marginRight: '30px' }}><Link className="a" to="/pg4">LemonGreen</Link></li>
        <li style={{ float: 'left', marginRight: '10px' }}><Link className="a" to="/pg5">PearlLemonChiffon</Link></li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
