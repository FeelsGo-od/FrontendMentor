'use client'

import { useContext } from 'react'

import { ThemeContext } from './layout'

export default function LocalStorage() {
    const { themeState, themeDispatch } = useContext(ThemeContext)
    const preferredTheme = window.localStorage.getItem('currentTheme')

    themeDispatch({ type: preferredTheme })

    return preferredTheme
}
