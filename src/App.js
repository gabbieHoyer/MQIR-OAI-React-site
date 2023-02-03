import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navigation from './components/Navbar'
import Footer from './components/Footer/Footer';

import logo from './logo.svg';
import rad_logo from './assets/dept-radiology-biomedical-imaging-logo.png'
import './App.css';

import InterpreterDisplay from './routes/interpreter'
import OAIInfo from './routes/OAI-Info'
import Login from './routes/login'
import CreateAccount from './routes/login/createAccount'
import { LanguageContext } from './contexts/LanguageContext.js'
import { useLanguage } from './utils/localization'


function App() {
  const [language, setLanguage] = useLanguage();
  const [token, setToken] = useState();
  // const [wasm, setWasm] = useState(null);

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  // useEffect(async () => {
  //   setWasm(await import("test-wasm"));
  // }, []);

  return (
    <Router>
      <div className='app'>
        {/* {wasm ? wasm.greet() : null} */}

        <div>
          <img  src={rad_logo} style={{ height:'50px'}}></img>
        </div>

        <div style={{width:'1450px'}}>
          
          <Navigation />
        </div>
        
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <Routes>
              <Route exact path='/' element={<Login/>}/>
              {/* <InterpreterDisplay  path='/interpreter/:userId/:nickname?/:name?' /> */}
              <Route exact path='/interpreter' element={<InterpreterDisplay/>}/> 
              {/* <Route exact path='/interpreter/:userId?' element={<InterpreterDisplay/>}/>  */}
              <Route exact path='/login/createAccount' element={<CreateAccount/>} />
              <Route exact path='/OAI-info' element={<OAIInfo/>}/>
          </Routes>
        </LanguageContext.Provider>
      </div>
    </Router>

  );
}

export default App;


