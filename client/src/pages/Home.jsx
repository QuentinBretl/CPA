import React from 'react';
import Actis from '../components/Actis';
import Escalade from '../assets/escalade.svg'

const Home = ({currentDay}) => {
  return (
   
      <section className='content'>
        <div className='planning'>
          <div className='heading'>{currentDay}</div>
          <Actis />
        </div>
      </section>
  );
};

export default Home;
