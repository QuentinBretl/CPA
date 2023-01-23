import React from 'react';
import Escalade from '../assets/escalade.svg'

function Actis() {
  return (
    <div className='activities'>
      <h1 className='activities-title'>Activités</h1>
      <div className='list'>
        <div className='activity' id='kayak'>
          <img id='escalade' src={Escalade} alt="escalade" />
        </div>
        <div className='activity' id='accrobranche'></div>
        <div className='activity' id='tal'></div>
        <div className='activity' id='paddle'></div>
        <div className='activity' id='escalade'></div>
        <div className='activity' id='grimpe-abre'></div>
      </div>
    </div>
  );
}

export default Actis;
