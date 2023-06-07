// "use client"
// import React, { createContext, useReducer } from "react"

// import { inter, lora, inconsolata } from "@/app/layout"

// const initialState = {
//   font: inter.className
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SANS-SERIF":
//       return { font: inter.className }
//     case "SERIF":
//       return { font: lora.className }
//     case "MONO":
//       return { font: inconsolata.className }
//     default:
//       return state
//   }
// }

// export const CounterContext = createContext({
//   state: initialState,
//   dispatch: () => null
// })

// export const CounterContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState)

//   return (
//     <CounterContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CounterContext.Provider>
//   )
// }