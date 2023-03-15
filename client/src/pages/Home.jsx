import React from 'react';
import { FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Actis from '../components/Actis';

const Home = ({ currentDay, formattedDate }) => {
  return (
    <section className='content'>
      <div className='planning'>
        <div className='heading'>
          <h3></h3>
          <h3>{currentDay}</h3>
          <h3>
            <Link to='/parametres'>
              <FaCog />
            </Link>
          </h3>
        </div>
        <Actis formattedDate={formattedDate} />
      </div>
    </section>
  );
};

export default Home;
