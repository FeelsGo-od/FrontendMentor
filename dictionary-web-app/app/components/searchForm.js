import React, { useEffect, useState } from 'react'
import Image from "next/image"

export default function SearchForm() {
    const [word, setWord] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
      const pathname = window.location.pathname
      const searchedWord = pathname.split('/')[2]

      if(searchedWord) {
        setWord(searchedWord)
      }
    }, [])
    

    const handleSearching = (e) => {
      e.preventDefault()
        if(!word || word === '') {
          setError('Whoops, can’t be empty…')
        } else {
          if (typeof window !== "undefined") {
            window.location.href = `/search/${word}`
          }
        }
    }

  return (
    <>
      <form onSubmit={handleSearching} className={`${error && 'border border-red'} nav_search-bar bg-F4 flex items-center border border-transparent hover:border-violet transition duration-150 ease-in-out rounded-2xl px-6 h-[3.1rem] md:h-[4.1rem] mt-6 md:mt-[3.188rem] justify-between`}>
        <input type="text" value={word} onChange={(e) => setWord(e.target.value)} className={`font-bold text-2D w-[90%] text-[1rem] h-full leading-[1.188rem] md:text-[1.25rem] bg-transparent focus:outline-none`} placeholder='Write some word...'/>
        <Image onClick={handleSearching} src={'/images/icon-search.svg'} width={16} height={16} alt="search word button" className="cursor-pointer" />
      </form>
      {error ? <span className='text-red text-[0.8rem] md:text-[1.25rem] pt-[0.5rem]'>{error}</span> : ''}
    </>
  )
}
