'use client'
import React, { useState } from 'react'

import styles from './main.module.css'
import Category from '@/app/components/category'
import SearchInput from '@/app/components/searchInput'
import movies from '@/app/json/data.json'
import MovieItem from '@/app/components/movieItem'

export default function Main() {
  const [searchInput, setSearchInput] = useState(null)
  const [moviesForSearch, setMoviesForSearch] = useState([])
  const [searchResult, setSearchResult] = useState([])
  return (
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
            <Category name={'Trending'} category={'isTrending'} movies={movies} type={'carousel'} />
            <Category name={'Recommended for you'} category={'recommended'} movies={ movies } type={'blocks'} setMoviesForSearch={setMoviesForSearch} />
          </>
        ) }
    </div>
  )
}