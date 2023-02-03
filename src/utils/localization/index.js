import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const locales = {
    en: {
      name: 'English',
      values: require('./en.json')
    },
    es: {
      name: 'Spanish',
      values: require('./es.json')
    }
  }
  
  export function getLocalizedValue(languageCode, key) {
    const localeConfig = locales[languageCode]
    if (!localeConfig) {
      throw new Error(`locale configuration for language code ${languageCode} does not exist`)
    }
    // fallback to english
    const fallbackLocale = locales.en
    return localeConfig.values[key] || fallbackLocale.values[key]
  }
  
  const LanguageLocalStorageKey = 'languageId'
  
  export function useLanguage() {
    const [storedValue, setStoredValue] = useState(() => {
      return localStorage.getItem(LanguageLocalStorageKey) || navigator.language.slice(0, 2)
    })
  
    const setValue = (value) => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore = value instanceof Function ? value(storedValue) : value
        const isSupportedLanguage = Object.keys(locales).includes(valueToStore)
  
        if (!isSupportedLanguage) {
          throw new Error(`Tried to set language to unexpected locale '${valueToStore}'`)
        }
        // Save state and to local storage
        setStoredValue(valueToStore)
        localStorage.setItem(LanguageLocalStorageKey, valueToStore)
      } catch (error) {
        console.log(error)
      }
    }
  
    return [storedValue, setValue]
  }