import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function Structure() {
  return (
    <div className="container">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default Structure;
