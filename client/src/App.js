import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Calendar.css';
import moment from 'moment/moment';
import 'moment/locale/fr';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Planning from './pages/Planning'
function App() {

  const [value, setValue] = useState(new Date());
  let currentDay =
    moment(value).locale('fr').format('dddd') +
    ' ' +
    moment(value).locale('fr').format('LL');

  useEffect(() => {
    currentDay =
      moment(value).locale('fr').format('dddd') +
      ' ' +
      moment(value).locale('fr').format('LL');
    console.log(currentDay);
  }, [value]);

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    
    <BrowserRouter>
      <div className='container'>
      <main>
      <section className='navigation'>
        <Calendar value={value} onChange={onChange} />
      <Navigation />
      </section>
      
        <Routes>
          <Route path='/' element={<Home currentDay={currentDay} />} ></Route>
          <Route path='/planning' element={<Planning/>}></Route>
        </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
