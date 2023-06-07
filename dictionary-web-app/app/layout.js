'use client'

import localFont from 'next/font/local';
import { createContext, useReducer } from 'react';

import './globals.css';
import Header from "./header";
// import { CounterContext } from '@/context/counter';

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

const initialState = {
  font: inter.className
}

const reducer = (state, action) => {
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

export const CounterContext = createContext({
  state: initialState,
  dispatch: () => null
})
 
export default function RootLayout({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
 return (
    <html lang="en" className={state.font}>
      <body>
        <CounterContext.Provider value={{ state, dispatch }}>
          <Header />
          {children}
        </CounterContext.Provider>
      </body>
    </html>
  )
}
