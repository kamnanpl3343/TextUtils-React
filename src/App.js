// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#3c566d';
      // document.title = 'Text-utils Dark mode';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.title = 'Text-utils Light mode';
      showAlert("Light mode has been enabled", "success");
    }
  }

  let showAlert = (message, type) => {
    setAlert
      ({
        msg: message,
        type: type,
      })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <div>

        <BrowserRouter>
          <NavBar title="TextUtils" abt="About" mode={Mode} toggleMode={toggleMode} />
          <Alert alert={alert} />

          <div className="container my-3">
            <Routes>
              <Route exact path="/about" element={<About mode={Mode}/>} />
              <Route exact path="/" element={<TextForm mode={Mode} showAlert={showAlert} />}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}




/* function App() {
  let name="kamna";
  return (
   <>
   <nav>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
   </nav>

   <div className="container">
    <h1>hello {name}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt at pariatur corporis? 
      Et iusto in qui? Ipsum provident esse consequatur modi sit, odio sed tempore aliquid nisi necessitatibus
        perspiciatis consectetur?</p>
   </div>
   </>
  );
} */


