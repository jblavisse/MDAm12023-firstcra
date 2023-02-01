import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import React, {useState} from 'react';

function App() {
  const [firstname, setFirstname] = useState("Gertrude");
  const [input, setInput] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setFirstname(input);
  }

  return (
    <div className="App">
      <div className="container">
        {/* <Header/>
        <Main/>
        <Footer/> */}

        <p>Prénom: {firstname}</p>

        <form onSubmit={handleSubmit}>

          <label htmlFor="firstnameInput">Entrez votre prénom:</label>
          <input type="text" id="firstnameInput"
            value={input} onChange={handleChange} />

            <button type="submit">OK</button>
        </form>

      </div>
    </div>
  );
}

export default App;
