import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import useForm from 'react-hook-form';

import PropTypes from 'prop-types';

import { getLocalizedValue, locales } from '../../utils/localization'
import { LanguageContext } from '../../contexts/LanguageContext'

import Navigation from '../../components/Navbar'
import style from './style.css'
import logo from '../../assets/logo.png'


// meant to help with authentication of userId and password
//  functions with server.js as example server backend, and token 
// definition in App.js
async function loginUser(credentials) {
  return fetch('http://localhost:8080/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

const Login = ({ setToken }) => {
  const [userId, setUserId] = useState('')
  const { language, setLanguage } = useContext(LanguageContext)
  // const { useForm, register } = useForm();
  
  const handleLanguageSelect = (e) => {
    const languageKey = e.target.value
    if (!locales[languageKey]) {
      return
    }
    setLanguage(languageKey)
  }

  const onInputChange = (event) => {
    setUserId(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    Route(`/interpreter`)
    // Route(`/interpreter/${userId}`)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      userId
    });
    setToken(token);
  }

  const contactSubmit = data => {
    console.log(data);
  };

  return (
    <div className="wrapper">
      {/* <Navigation/> */}
      <form onSubmit={onSubmit} className="form">
        <img src={logo} alt='UCSF' />
        <input
          value={userId}
          type='text'
          aria-label='UserID'
          placeholder={getLocalizedValue(language, 'UserID')}
          onInput={onInputChange}
          // ref={register}
        />
        <Link to={`/interpreter`} className="button">
        {/* <Link to={`/interpreter/${userId}`} className="button"> */}
          {getLocalizedValue(language, 'Login')}
        </Link>
        <Link to={`/login/createAccount`} className="button">
            {getLocalizedValue(language, 'Create Account')}
        </Link>
        <div className="optionsContainer">
          <select
            className="language_select"
            onChange={handleLanguageSelect}
            aria-label='Language'
          >
            {Object.keys(locales).map((key) => {
              return (
                <option key={key} value={key} selected={key === language}>
                  {locales[key].name}
                </option>
              )
            })}
          </select>

        </div>
      </form>
    </div>
  )
}

export default Login

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};