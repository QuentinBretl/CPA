import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.config';
import logoSVG from '../assets/logo.svg';

function Navigation() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  const auth = getAuth();
  useEffect(() => {
    if (login) {
      setUser(auth.currentUser);
      console.log(auth.currentUser);
    }
  }, [login]);

  const { username, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        username + '@cpa-lathus.asso.fr',
        password
      );

      if (userCredential.user) {
        setLogin(true);
        console.log('connecté !');
        navigate('/');
      }
    } catch (error) {
      toast.error('Identifiant et/ou mot de passe incorrecte(s) !');
    }
  };

  return user ? (
    <>
      <div className='login'>connecté !</div>
      <img className='logo' src={logoSVG} alt='logo' />
    </>
  ) : (
    <>
      <div className='login'>
        <form className='login-form' onSubmit={onSubmit}>
          <label>
            <input
              className='input-log'
              type='text'
              name='login'
              id='username'
              placeholder='Identifiant'
              value={username}
              onChange={onChange}
            />
          </label>
          <br />
          <label>
            <input
              className='input-log'
              type='password'
              name='password'
              id='password'
              placeholder='Mot de passe'
              value={password}
              onChange={onChange}
            />
          </label>
          <br />
          <Link className='forgotPasswordLink' to='/mot-de-passe-oublie'>
            Mot de passe oublié ?
          </Link>
          <input className='input-send' type='submit' value='Connexion' />
        </form>
      </div>
      <img className='logo' src={logoSVG} alt='logo' />
    </>
  );
}

export default Navigation;
