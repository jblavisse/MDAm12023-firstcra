
import React, {useState} from 'react';

function Structure() {
  const [firstname, setFirstname] = useState("Gertrude");

  return (
    <div className="container">

      <p>Prénom: {firstname}</p>
      <input type="text" id="firstnameInput"
        value={firstname} onChange={(e) => setFirstname(e.target.value)} />
    </div>
  );
}

export default Structure;




// import Header from './components/Header';
// import Main from './Pages/Exo1/Main';
// import Footer from './components/Footer';


//

// <form onSubmit={handleSubmit}>

//   <label htmlFor="firstnameInput">Entrez votre prénom:</label>


//     <button type="submit">OK</button>
// </form> */}