import React from 'react';
import bunnyGif from './assets/bunny.gif'; // Importa el archivo GIF
export const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      <div>
        <img src={bunnyGif} alt='Rabbit' className='inline pr-2 h-8' />
        <p className='text-white'>
          Horario de la conejesinga hecho con ❤️, {footerYear} All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};
