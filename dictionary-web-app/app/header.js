'use client'

import React, { useContext, useState } from 'react'
import Image from "next/image"

import SearchForm from './components/searchForm'
import { FontContext, ThemeContext } from './layout'

export default function Header() {
    const { state, dispatch } = useContext(FontContext)
    const { themeState, themeDispatch } = useContext(ThemeContext)

    const [currentFont, setCurrentFont] = useState('Sans Serif')
    const [selectOpened, setSelectOpend] = useState(false)
    const [currentTheme, setCurrentTheme] = useState('DARK')

    // WEBSITE LOGO CLICK
    const redirToHome = () => {
        if (typeof window !== "undefined") {
            window.location.href = '/'
        }
    }
  return (
    <header className="px-[1.875rem] md:px-[2.438rem] pt-[1rem] mxl:px-[22rem]">
        <nav className="flex justify-between">
            <Image onClick={redirToHome} className="nav_logo tn:w-[1rem] md:w-[2rem]" src={'/images/logo.svg'} width={28} height={32} alt="Dictionary app main page" />
            <div className="nav_func flex items-center relative">
                <div className="nav_func-left">
                    <div className='flex'>
                        <p onClick={() => setSelectOpend(!selectOpened)} className='cursor-pointer text-[0.875rem] md:text-[1.125rem] mr-4 font-bold'>{currentFont}</p>
                        <Image src={'/images/icon-arrow-down.svg'} width={12} height={6} alt='select website font style' />
                    </div>
                    <div id="select_opt-arrow" className={`opacity-0 absolute h-0 p-0 ${selectOpened && 'opacity-100 py-6 pr-[4.313rem] pl-6 left-[-2.625rem] h-auto'} bg-white rounded-2xl shadow-[0px_5px_30px_rgba(0,0,0,0.1)] font-bold bg-transparent text-[0.875rem] leading-[1.188rem] md:text-[1.125rem] md:leading-normal text-2D appearance-none mt-[1.125rem]`}>
                        <p onClick={() => dispatch({ type: 'SANS-SERIF' })} className={`${selectOpened ? 'block' : 'hidden'} cursor-pointer font-bold text-[1.125rem] leading-[1.5rem] hover:text-violet`}>Sans Serif</p>
                        <p onClick={() => dispatch({ type: 'SERIF' })} className={`${selectOpened ? 'block' : 'hidden'} cursor-pointer pt-4 font-bold text-[1.125rem] leading-[1.5rem] hover:text-violet`}>Serif</p>
                        <p onClick={() => dispatch({ type: 'MONO' })} className={`${selectOpened ? 'block' : 'hidden'} cursor-pointer pt-4 font-bold text-[1.125rem] leading-[1.5rem] hover:text-violet`}>Mono</p>
                    </div>
                </div>
                <div className="nav_func-right flex items-center border-l border-E9 pl-4 md:pl-[1.625rem] ml-4 md:ml-[1.625rem]">
                    <div onClick={() => {
                        themeDispatch({ type: currentTheme })
                        setCurrentTheme(currentTheme === 'LIGHT' ? 'DARK' : 'LIGHT')
                    }} className="cursor-pointer switch-theme-bg w-10 h-5 bg-75 rounded-xl">
                        <div className="circle w-3.5 h-3.5 bg-FF rounded-2xl"></div>
                    </div>
                    <svg className="ml-3 md:ml-[1.25rem] theme-logo" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </nav>
        <SearchForm />
    </header>
  )
}
