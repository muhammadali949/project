import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='/selectoption'>
      <button className='btn'>Post an ad</button>
    </Link>
  );
}
