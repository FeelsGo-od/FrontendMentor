import React, { useState } from 'react'
import Image from "next/image"

import { inter700 } from '../fonts'

export default function SearchForm() {
    const [word, setWord] = useState('')

    const handleSearching = () => {
        window.location.href = `/search/${word}`
    }

  return (
    <div className="nav_search-bar bg-F4 flex items-center rounded-2xl px-6 py-4 mt-6 md:mt-[3.188rem] justify-between">
        <input type="text" value={word} onChange={(e) => setWord(e.target.value)} className={`${inter700.variable} font-inter700 text-2D w-[90%] text-[1rem] leading-[1.188rem] md:text-[1.25rem] bg-transparent focus:outline-none`} placeholder='Write some word...'/>
        <Image onClick={handleSearching} src={'/images/icon-search.svg'} width={16} height={16} alt="search word button" className="cursor-pointer" />
    </div>
  )
}
