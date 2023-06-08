'use client'

import localFont from 'next/font/local';
import { createContext, useEffect, useReducer } from 'react';

import './globals.css';
import Header from "./header";

// GET FONTS FOR FONT-CONTEXT(below)
export const inter = localFont({
  src: './fonts/inter/Inter-VariableFont_slnt,wght.ttf',
  display: 'swap',
});

export const lora = localFont({
  src: './fonts/lora/Lora-VariableFont_wght.ttf',
  display: 'swap',
});

export const inconsolata = localFont({
  src: './fonts/inconsolata/Inconsolata-VariableFont_wdth,wght.ttf',
  display: 'swap',
});

// CONTEXT initial states
const initialFont = {
  font: inter.className
}
const initialTheme = {
  theme: 'light'
}

// CONTEXT reducers
const fontReducer = (state, action) => {
  switch (action.type) {
    case "SANS-SERIF":
      return { font: inter.className }
    case "SERIF":
      return { font: lora.className }
    case "MONO":
      return { font: inconsolata.className }
    default:
      return state
  }
}
const themeReducer = (state, action) => {
  switch (action.type) {
    case "DARK":
      return { theme: 'dark' }
    case "LIGHT":
      return { theme: 'light' }
    default:
      return state
  }
}

// CONTEXT creation
export const FontContext = createContext({
  state: initialFont,
  dispatch: () => null
})
export const ThemeContext = createContext({
  state: initialTheme,
  dispatch: () => null
})
 
export default function RootLayout({ children }) {
  const [state, dispatch] = useReducer(fontReducer, initialFont)
  const [themeState, themeDispatch] = useReducer(themeReducer, initialTheme)
  let preferredTheme

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localTheme =  window.localStorage.getItem('currentTheme')
      preferredTheme = localTheme ? localTheme : null
      if(!preferredTheme) {
        const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
        if(darkThemeMq.matches) {
          preferredTheme = 'dark'
        } else {
          preferredTheme = 'light'
        }
      }

      themeDispatch({ type: !preferredTheme ? 'LIGHT' : preferredTheme === 'light' ? 'LIGHT' : 'DARK' })
    }
  }, [])

 return (
    <html lang="en" className={`${state.font} ${themeState.theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <body>
        <ThemeContext.Provider value={{ themeState, themeDispatch }}>
          <FontContext.Provider value={{ state, dispatch }}>
            <Header />
            {children}
          </FontContext.Provider>
        </ThemeContext.Provider>
      </body>
    </html>
  )
}
