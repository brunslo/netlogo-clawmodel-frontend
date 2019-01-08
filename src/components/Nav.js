import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/nav.css';

export default function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}