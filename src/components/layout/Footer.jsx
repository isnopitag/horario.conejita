import React from 'react';
import { GiRabbit } from "react-icons/gi";
export const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      <div>
        <GiRabbit className='inline pr-2 text-3xl text-white' />
        <p>Horario de la conejesinga para: {footerYear} All Rights Reserved</p>
      </div>
    </footer>
  );
};
