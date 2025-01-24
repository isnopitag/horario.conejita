import React, { useEffect, useState } from 'react';
import moment from 'moment/moment';
import DatePicker from 'react-datepicker';
import {
  WiSunrise,
  WiSolarEclipse,
  WiMoonAltWaningCrescent5,
  WiNa,
} from 'react-icons/wi';
import { AiFillExperiment } from 'react-icons/ai';
import { FiPackage } from 'react-icons/fi';
import { FcBiomass } from 'react-icons/fc';

import 'react-datepicker/dist/react-datepicker.css';
import 'moment/locale/es';
import schedules from './schedules25.json';
moment.locale('es');

function getIsSame(date, start, finish) {
  if (moment(date).isSame(start)) {
    return true;
  } else if (moment(date).isSame(finish)) {
    return true;
  }
  return false;
}

function getIsAfter(date, start) {
  if (moment(date).isAfter(start)) {
    return true;
  }
  return false;
}

function getIsBefore(date, finish) {
  if (moment(date).isBefore(finish)) {
    return true;
  }
  return false;
}

function resolve(date, start, finish) {
  let times = 0;

  if (getIsSame(date, start, finish)) {
    times++;
  }
  if (getIsAfter(date, start)) {
    times++;
  }
  if (getIsBefore(date, finish)) {
    times++;
  }
  if (times === 2) {
    return true;
  }
  return false;
}

function getShiftObject(date) {
  return schedules.find((s) => resolve(date, s.start, s.finish));
}

function getShiftPretty(shift) {
  if (shift === '1') {
    return 'mañana';
  }
  if (shift === '2') {
    return 'tarde';
  }
  if (shift === '3') {
    return 'noche';
  }
}

export const Cover = () => {
  const sysDate = moment().format('YYYY-MM-DD');

  // const [date, setDate] = useState(sysDate);
  const [startDate, setStartDate] = useState(new Date());
  const [info, setInfo] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setInfo(getShiftObject(sysDate));

    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );
    setTheme(darkModeMediaQuery.matches ? 'dark' : 'light');

    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, [sysDate]);

  const handleChange = (date) => {
    setIsOpen(!isOpen);
    if (date === null) {
      setInfo(undefined);
      setStartDate(new Date());
    }
    setStartDate(date);
    setInfo(getShiftObject(moment(date).format('YYYY-MM-DD')));
  };

  const getPrettyDate = (date) => {
    return moment(date).format('LL');
  };

  const getIconForShift = (shift) => {
    const iconClass = `inline pr-2 text-5xl ${
      theme === 'dark' ? 'text-white' : 'text-black'
    }`;
    switch (shift) {
      case '1':
        return <WiSunrise className={iconClass} />;
      case '2':
        return <WiSolarEclipse className={iconClass} />;
      case '3':
        return <WiMoonAltWaningCrescent5 className={iconClass} />;
      default:
        return <WiNa className={iconClass} />;
    }
  };

  const getIconForActivity = (activity) => {
    const iconClass = `inline pr-2 text-5xl ${
      theme === 'dark' ? 'text-white' : 'text-black'
    }`;
    switch (activity) {
      case 'Siembra':
        return <AiFillExperiment className={iconClass} />;
      case 'Preparación':
        return <FcBiomass className={iconClass} />;
      case 'Material de Empaque':
        return <FiPackage className={iconClass} />;
      default:
        return <WiNa className={iconClass} />;
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          {info === undefined ? (
            <h1 className='mb-5 text-5xl font-bold'>
              No hay datos para esa fecha
            </h1>
          ) : (
            <div>
              <h2 className='mb-5 text-3xl font-bold'>
                <span className='font-bold'>Fecha:</span>{' '}
                {getPrettyDate(sysDate)}
              </h2>
              <h2 className='mb-5 text-2xl'>
                Del: {getPrettyDate(info.start)}
              </h2>
              <h2 className='mb-5 text-2xl'>
                Hasta: {getPrettyDate(info.finish)}
              </h2>
              <h2 className='mb-5 text-3xl'>
                <span className='font-bold'>Turno: </span>{' '}
                {getShiftPretty(info.shift)} {getIconForShift(info.shift)}
              </h2>
              <h2 className='mb-5 text-3xl'>
                <span className='font-bold'>Actividad: </span> {info.activity}{' '}
                {getIconForActivity(info.activity)}
              </h2>

              <h3 className='mb-5 text-3xl'>
                <span className='font-bold'>Compañeros:</span>
              </h3>
              {info?.colleagues !== undefined ? (
                info?.colleagues.map((colleague, index) => (
                  <h3 key={index} className='mb-5 text-2xl'>
                    {colleague.activity} - {colleague.name}
                  </h3>
                ))
              ) : (
                <span>Error Loading Colleagues!</span>
              )}
            </div>
          )}
          <div>
            <div className='mb-5 text-2xl font-bold'>Consultar otra fecha:</div>
            <button className='btn btn-primary mx-4 my-2' onClick={handleClick}>
              {getPrettyDate(startDate)}
            </button>
            {isOpen && (
              <DatePicker selected={startDate} onChange={handleChange} inline />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
