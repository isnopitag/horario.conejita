import React from 'react';
import { FaBars } from 'react-icons/fa';
import { GiRabbit } from "react-icons/gi";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Navbar = ({ title }) => {
  const navigation = [
    { id: 1, name: 'Home', to: '/', current: true },
    { id: 2, name: 'About', to: '/about', current: false },
    { id: 3, name: 'Login', to: '/login', current: false },
    { id: 4, name: 'registrar', to: '/register', current: false },
  ];

  return (
    <nav className='navbar mb-12 shadow-lg bg-indigo-700 text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <GiRabbit className='inline pr-2 text-3xl text-white' />
          <Link to='/' className='text-lg text-white font-bold align-middle'>
            {title}
          </Link>
        </div>

        {/* Navigation Desktop */}
        {/* <div className='hidden md:block flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            {navigation.map((nav) => (
              <Link
                key={nav.id}
                to={nav.to}
                className='btn btn-ghost btn-sm rounded-btn text-white'
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div> */}

        {/* <div className='md:hidden mx-auto dropdown dropdown-end'>
          <label
            tabIndex='0'
            className='btn btn-square text-white hover:text-white hover:bg-gray-700  '
          >
            <GiRabbit className='block  h-6 w-6' aria-hidden='true' />
          </label>

          <ul
            tabIndex='0'
            className='menu dropdown-content p-2 m-2 shadow bg-gray-800 rounded-box w-52 mt-4'
          >
            <li>
              {navigation.map((nav) => (
                <Link key={nav.id} to={nav.to}>
                  {nav.name}
                </Link>
              ))}
            </li>
          </ul>
        </div> */}
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
