import React from 'react';
import { FaCog } from 'react-icons/fa';

function Planning({ currentDay }) {
  return (
    <section className='content'>
      <div className='planning'>
        <div className='heading'>
          <h3></h3>
          <h3>{currentDay}</h3>
          <FaCog />
        </div>
        <div className='planning-reservations'>
          <div className='planning-am'></div>
          <div className='planning-pm'></div>
        </div>
      </div>
    </section>
  );
}

export default Planning;
