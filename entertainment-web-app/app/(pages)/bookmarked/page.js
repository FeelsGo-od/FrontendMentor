'use client'
import React, { useState } from 'react'

import SearchInput from '@/app/components/searchInput'
import Category from '@/app/components/category'
import movies from '@/app/json/data.json'
import styles from './bookmarked.module.css'
import MovieItem from '@/app/components/movieItem'

export default function Bookmarked() {
  const [searchInput, setSearchInput] = useState(null)
  const [moviesForSearch, setMoviesForSearch] = useState([])
  const [searchResult, setSearchResult] = useState([])
  return (
    <div>
      <div className={styles.main}>
        <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} moviesForSearch={moviesForSearch} setSearchResult={setSearchResult} />
        { searchInput ? searchResult.length > 0 ? (
          <div>
            Found results for '{searchInput}'
            <div className='blocksContainer'>
              {searchResult.map((movie, i) => (
                <MovieItem type={'blocks'} key={i} title={movie['title']} year={movie['year']} category={movie['category']} rating={movie['rating']} thumbnail={movie['thumbnail']['regular']} movieObj={movie} />
              ))}
            </div>
          </div>
        ) 
        : (<div>No results found for '{searchInput}'</div>)
        : (
          <>
            <Category name={'Bookmarked Movies'} category={'Bookmarked Movie'} movies={movies} type={'blocks'} setMoviesForSearch={setMoviesForSearch} />
            <Category name={'Bookmarked TV Series'} category={'Bookmarked TV Series'} movies={movies} type={'blocks'} setMoviesForSearch={setMoviesForSearch} />
          </>
        ) }
      </div>
    </div>
  )
}
