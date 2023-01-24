import React from 'react';
import Actis from '../components/Actis';

const Home = ({currentDay, formattedDate}) => {
  

  return (
   
      <section className='content'>
        <div className='planning'>
          <div className='heading'>{currentDay}</div>
          <Actis formattedDate={formattedDate}/>
        </div>
      </section>
  );
};

export default Home;
