
import React, {useState} from 'react';

function Structure() {

  const [firstname, setFirstname] = useState("Gertrude");
  const [inputFirstname, setInputFirstname] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setFirstname(inputFirstname);
  }

  return (
    <div className="container">

      <p>Prénom: {firstname}</p>

      <form onSubmit={handleSubmit}>
        <input type="text" id="firstnameInput"
        value={inputFirstname} onChange={(e) => setInputFirstname(e.target.value)} />
        <button type="submit">OK</button>
      </form>

    </div>
  );
}

export default Structure;
