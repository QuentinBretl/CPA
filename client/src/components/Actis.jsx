import React from 'react';
import { Link } from 'react-router-dom';
import Escalade from '../assets/escalade.svg';
import Paddle from '../assets/paddle.svg';
import Tal from '../assets/tal.svg';
import Cirque from '../assets/cirque.svg'
import Kayak from '../assets/kayak.svg'

function Actis({ formattedDate }) {
  return (
    <div className='activities'>
      <h1 className='activities-title'>Activités</h1>
      <div className='list'>
      <article>
          <h3>KAYAK</h3>
          <Link
            className='link-acti'
            to={`/planning?acti=kayak&date=${formattedDate}`}
          >
            <div className='activity' id='kayak'>
              <img id='img-pah' src={Kayak} alt='kayak' />
            </div>
          </Link>
          <p>
            Places restantes: <span>12/12</span>
          </p>
        </article>
        <article>
          <h3>ESCALADE</h3>
          <Link
            className='link-acti'
            to={`/planning?acti=escalade&date=${formattedDate}`}
          >
            <div className='activity' id='escalade'>
              <img id='img-escalade' src={Escalade} alt='escalade' />
            </div>
          </Link>
          <p>
            Places restantes: <span>12/12</span>
          </p>
        </article>
        <article>
          <h3>TIR A L'ARC</h3>
          <Link
            className='link-acti'
            to={`/planning?acti=tal&date=${formattedDate}`}
          >
            <div className='activity' id='tal'>
              <img id='img-tal' src={Tal} alt='tal' />
            </div>
          </Link>
          <p>
            Places restantes: <span>12/12</span>
          </p>
        </article>
        <article>
          <h3>ACCROBRANCHE</h3>
          <Link
            className='link-acti'
            to={`/planning?acti=pah&date=${formattedDate}`}
          >
            <div className='activity' id='pah'>
              <img id='img-pah' src={Escalade} alt='pah' />
            </div>
          </Link>
          <p>
            Places restantes: <span>12/12</span>
          </p>
        </article>
        <article>
          <h3>CIRQUE</h3>
          <Link
            className='link-acti'
            to={`/planning?acti=cirque&date=${formattedDate}`}
          >
            <div className='activity' id='cirque'>
              <img id='img-cirque' src={Cirque} alt='cirque' />
            </div>
          </Link>
          <p>
            Places restantes: <span>12/12</span>
          </p>
        </article>
        <article>
          <h3>PADDLE</h3>
          <Link className='link-acti' to={`/planning/paddle-${formattedDate}`}>
            <div className='activity' id='tal'>
              <img id='img-tal' src={Paddle} alt='tal' />
            </div>
          </Link>
          <p>
            Places restantes: <span>12/12</span>
          </p>
        </article>
      </div>
    </div>
  );
}

export default Actis;
