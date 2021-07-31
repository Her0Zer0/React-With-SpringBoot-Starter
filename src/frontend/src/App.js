import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [testMessage, setTestMessage] = useState(null);

  useEffect(()=>{
    fetch('http://localhost:8080/api/test')
        .then(response => response.text())
        .then(message => {
          setTestMessage(`The test was ${message}`);
        }).catch((error)=>{
      setTestMessage(`${error}`)
    });
  });



  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {testMessage}
        </header>
      </div>
  );
}

export default App;
