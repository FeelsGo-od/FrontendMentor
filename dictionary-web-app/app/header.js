import React from 'react'
import Image from "next/image"

import { inter700 } from "./fonts"

export default function Header() {
  return (
    <header className="px-[1.875rem] md:px-[2.438rem] pt-[1rem] mxl:px-[22rem]">
        <nav className="flex justify-between">
        <Image className="nav_logo tn:w-[1rem] md:w-[2rem]" src={'images/logo.svg'} width={28} height={32} alt="Dictionary app main page" />
        <div className="nav_func flex items-center">
            <div className="nav_func-left">
            <select id="select_opt-arrow" className={`${inter700.variable} font-inter700 bg-transparent text-[0.875rem] leading-[1.188rem] md:text-[1.125rem] md:leading-normal text-2D appearance-none`}>
                <option value="sans-serif">Sans Serif</option>
                <option value="serif">Serif</option>
                <option value="mono">Mono</option>
            </select>
            </div>
            <div className="nav_func-right flex items-center border-l border-E9 pl-4 md:pl-[1.625rem] ml-4 md:ml-[1.625rem]">
            <div className="switch-theme-bg w-10 h-5 bg-75 rounded-xl">
                <div className="circle w-3.5 h-3.5 bg-FF rounded-2xl"></div>
            </div>
            <svg className="ml-3 md:ml-[1.25rem]" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
        </div>
        </nav>
        <div className="nav_search-bar bg-F4 flex items-center rounded-2xl px-6 py-4 mt-6 md:mt-[3.188rem] justify-between">
        <input type="text" value='keyboard' className={`${inter700.variable} font-inter700 text-2D w-[90%] text-[1rem] leading-[1.188rem] md:text-[1.25rem] bg-transparent focus:outline-none`}/>
        <Image src={'images/icon-search.svg'} width={16} height={16} alt="search word button" className="cursor-pointer" />
        </div>
    </header>
  )
}
