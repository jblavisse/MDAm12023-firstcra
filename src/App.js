import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import React, {useState} from 'react';

function App() {
  const [firstname, setFirstname] = useState("Gertrude");

  function handleClick() {
    console.log("coucou");
    setFirstname("Bruuuuuu");
  }

  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Main/>
        <Footer/>

        <p onClick={handleClick}>{firstname}</p>
      </div>
    </div>
  );
}

export default App;
