import React, { useEffect, useState } from 'react';
import logoSVG from '../assets/logo.svg';

function Navigation() {

  return ( 
    <>
        <div className='login'>
          <form className='login-form'>
            <label>
              <input className='input-log' type='text' name='login'placeholder='Identifiant' />
            </label>
            <br />
            <label>
              <input className='input-log' type='password' name='password' placeholder='Mot de passe'/>
            </label>
            <br />
            <input className='input-send' type='submit' value='Connexion' />
          </form>
        </div>
        <img className='logo' src={logoSVG} alt='logo' />
        </>
  )
}

export default Navigation