import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import bunnyGif from './assets/bunny.gif'; // Importa el archivo GIF

export const Navbar = ({ title }) => {
  return (
    <nav className='navbar mb-12 shadow-lg bg-indigo-700 text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <img src={bunnyGif} alt='Rabbit' className='inline pr-2 h-8' />
          <Link to='/' className='text-lg text-white font-bold align-middle'>
            {title}
          </Link>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Horario de la conejinga',
};
Navbar.prototype = {
  title: PropTypes.string,
};
