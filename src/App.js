import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import React, {useState} from 'react';

function App() {
  const [firstname, setFirstname] = useState("Gertrude");

  function handleChange(event) {
    console.log(event.target.value);
    setFirstname(event.target.value);
  }

  return (
    <div className="App">
      <div className="container">
        {/* <Header/>
        <Main/>
        <Footer/> */}

        <p>Prénom: {firstname}</p>

        <label htmlFor="firstnameInput">Entrez votre prénom:</label>
        <input type="text" id="firstnameInput"
          value={firstname} onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
