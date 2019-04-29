import React from 'react';
import './style.css';
import Header from '../Header';
import Mars from '../Mars';
import Planets from '../Planets';
import Hubble from '../Hubble';

function Wrapper() {
  return (
      <div className="wrapperHome">
      <Mars />
      <Planets />
      <Hubble />
            </div>
            );
}

export default Wrapper;