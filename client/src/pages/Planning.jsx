import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useAuthStatus } from '../hooks/useAuthStatus';

function Planning({ currentDay }) {
  const { loggedIn, checkingStatus } = useAuthStatus();

  const onClick = (e) =>{
   
    if(!loggedIn){
      e.preventDefault()
      toast.error('Connectez-vous pour accéder aux paramètres.')
    }
  }
  return (
    <section className='content'>
      <div className='planning'>
        <div className='heading'>
          <h3> </h3>
          <h3>{currentDay}</h3>
          <h3><Link className='settings' to='/parametres' onClick={onClick}>
            <FaCog />
          </Link>
          </h3>
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
