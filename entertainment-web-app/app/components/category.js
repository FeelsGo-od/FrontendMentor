'use client'
import React, { useEffect, useState } from 'react'

import styles from './components.module.css'
import MovieItem from './movieItem'

export default function Category({ name, category, movies, type, setMoviesForSearch }) {
  let categoryMovies
  const [bookmarkedMovies, setBookmarkedMovies] = useState()

  const categoryIsFound = movies && movies.some((movie) => {
    if(movie.category === category) return true;
    return false;
  })

  if(categoryIsFound) {
    categoryMovies = movies.filter((movie) => movie.category === category);
  }

  const currentCategory = movies && category.slice(11)
  useEffect(() => {
    setBookmarkedMovies(JSON.parse(localStorage.getItem('bookmarkedMovies')))
  }, [])

  // refactor it
  let bookmarkedCategoryIsFound
  if(bookmarkedMovies) {
    bookmarkedCategoryIsFound = bookmarkedMovies.some((movie) => {
      if(movie.category === currentCategory) {
        return true
      }
      return false
    })
  }

  useEffect(() => {
    if (category.split(' ')[0] === 'Bookmarked' && bookmarkedMovies && bookmarkedMovies.length !== 0) {
      setMoviesForSearch(bookmarkedMovies)
    } else if (categoryIsFound) {
      setMoviesForSearch(categoryMovies)
    } else {
      setMoviesForSearch(movies)
    }
  }, [bookmarkedMovies, categoryIsFound])

  return (
    <div className={`${styles.categoryCont} pd-container ${category === 'recommended' ? styles.containerRecommended : ''}`}>
        <h1 className={styles.categoryTitle}>{name}</h1>
        <div className={`${styles[type + 'Content']}`}>
          <div className={`${styles[type + 'Container']}`}>
            { category.startsWith('is') ? (
              movies.map((movie, i) => movie[category] && (
                <MovieItem type={type} key={i} title={movie['title']} year={movie['year']} category={movie['category']} rating={movie['rating']} thumbnail={movie['thumbnail']['trending']} movieObj={movie} />
              ))
            )
            : category.split(' ')[0] === 'Bookmarked' ? (
              bookmarkedMovies && bookmarkedMovies.length !== 0 && bookmarkedMovies.some(movie => movie.category === currentCategory) ? (
                bookmarkedMovies.map((movie, i) => movie['category'] === currentCategory && (
                  <MovieItem type={type} key={i} title={movie['title']} year={movie['year']} category={movie['category']} rating={movie['rating']} thumbnail={movie['thumbnail']['regular']} movieObj={movie} />
                ))
              ) : `There are no bookmarked movies in ${currentCategory} category`
            ) // refactor category and isCategory to be scalable & combine all MovieItem props into one object
            : categoryIsFound ? (
              categoryMovies.map((movie, i) => (
                <MovieItem type={type} key={i} title={movie['title']} year={movie['year']} category={movie['category']} rating={movie['rating']} thumbnail={movie['thumbnail']['regular']} movieObj={movie} />
              ))
            )
            : (
              movies.map((movie, i) => !movie['isTrending'] && (
                <MovieItem type={type} key={i} title={movie['title']} year={movie['year']} category={movie['category']} rating={movie['rating']} thumbnail={movie['thumbnail']['regular']} movieObj={movie} />
              ))
            ) }
          </div>
        </div>
    </div>
  )
}
