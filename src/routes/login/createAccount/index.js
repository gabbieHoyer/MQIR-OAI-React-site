import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import style from './style.css'
import logo from '../../../assets/logo.png'


import { getLocalizedValue, locales } from '../../../utils/localization'
import { LanguageContext } from '../../../contexts/LanguageContext'

const CreateAccount = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [institution, setInstitution] = useState('')
  const [position, setPosition] = useState('')
  const [nickname, setNickName] = useState('')
  const [newUserId, setNewUserId] = useState('')
  const { language, setLanguage } = useContext(LanguageContext)

  const onSubmit = (event) => {
    event.preventDefault()
    // route(`/interpreter/${newUserId}/${nickname}/${name}`)
    Route(`/interpreter/${newUserId}`)
  }

  const handleLanguageSelect = (e) => {
    const languageKey = e.target.value
    if (!locales[languageKey]) {
      return
    }
    setLanguage(languageKey)
  }

  const handleCreateAccountSubmit = async (e) => {
    e.preventDefault()
    const preferredName = nickname
    // const isSafe = await moderate(preferredName)
    // if (!isSafe) {
    //   alert(getLocalizedValue(language, 'Please choose another preferred name'))
    //   return
    // }
    setNickName(nickname)
  }

  return (
    <div className="wrapper">
      <form onSubmit={onSubmit}>
        <img src={logo} alt='UCSF' />
        <input
          className="createAccount"
          value={name}
          type='text'
          aria-label='Name'
          placeholder={getLocalizedValue(language, 'Name')}
          onInput={(e) => {
            setName(e.target.value)
          }}
        />
        {/* <input
          className={style.createAccount}
          value={nickname}
          type='text'
          aria-label='Nickname'
          placeholder={getLocalizedValue(language, 'Nickname')}
          onInput={(e) => {
            setNickName(e.target.value)
          }}
        /> */}
        <input
          className="createAccount"
          value={email}
          type='text'
          aria-label='Email'
          placeholder={getLocalizedValue(language, 'Email')}
          onInput={(e) => {
            setEmail(e.target.value)
          }}
        />
        <input
          className="createAccount"
          value={institution}
          type='text'
          aria-label='Institution'
          placeholder={getLocalizedValue(language, 'Institution')}
          onInput={(e) => {
            setInstitution(e.target.value)
          }}
        />
        <input
          className="createAccount"
          value={position}
          type='text'
          aria-label='Position'
          placeholder={getLocalizedValue(language, 'Position')}
          onInput={(e) => {
            setPosition(e.target.value)
          }}
        />
        <input
          className="createAccount"
          value={newUserId}
          type='text'
          aria-label='UserID'
          placeholder={getLocalizedValue(language, 'User ID')}
          onInput={(e) => {
            setNewUserId(e.target.value)
          }}
        />
        {/* <Link class={style.button} href={`/interpreter/${newUserId}/${nickname}/${name}`}> */}
        <Link class="button" type="button" to={`/interpreter/${newUserId}`}>
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
          <span>
            {getLocalizedValue(language, 'Already have an account?')}
            <Link to='/'>{getLocalizedValue(language, 'Login')}</Link>
          </span>
        </div>
      </form>
    </div>
  )
}

export default CreateAccount