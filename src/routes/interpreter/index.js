import React, { useState, useEffect, Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreateAccount from '../login/createAccount'
import style from './style.css'

import Footer from '../../components/Footer/Footer';

// import * as wasm from "test-wasm";

class InterpreterDisplay extends Component{
    render() {
      return (
        <div >
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:100, padding:100}}>
            <h2 className="colorlib-heading"> 100-D+ Interpretable qMRI-based Feature Space Interpretation</h2>
            </div>

            {/* wasm.greet(); */}

          <Footer/>
        </div>
      );
    }
  }
  
  export default InterpreterDisplay;