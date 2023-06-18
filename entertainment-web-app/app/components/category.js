'use client'
import React from 'react'

import styles from './components.module.css'
import MovieItem from './movieItem'

export default function Category({ name, category, movies, type }) {
  let categoryMovies

  const categoryIsFound = movies.some((movie) => {
    if(movie.category === category) return true;
    return false;
  })

  if(categoryIsFound) {
    categoryMovies = movies.filter((movie) => movie.category === category);
  }

  const bookmarkedMovies = movies.filter((movie) => movie.isBookmarked)
  const currentCategory = category.slice(11)

  return (
    <div className={`${styles.categoryCont} pd-container ${category === 'recommended' ? styles.containerRecommended : ''}`}>
        <h1 className={styles.categoryTitle}>{name}</h1>
        <div className={`${styles[type + 'Content']}`}>
          <div className={`${styles[type + 'Container']}`}>
            { category.startsWith('is') ? (
              movies.map((movie, i) => movie[category] && (
                <MovieItem type={type} key={i} title={movie['title']} year={movie['year']} category={movie['category']} rating={movie['rating']} thumbnail={movie['thumbnail']['trending']} isBookmarked={movie.isBookmarked} />
              ))
            )
            : category.split(' ')[0] === 'Bookmarked' ? (
              bookmarkedMovies.map((movie, i) => movie['category'] === currentCategory && (
                <MovieItem type={type} key={i} title={movie['title']} year={movie['year']} category={movie['category']} rating={movie['rating']} thumbnail={movie['thumbnail']['regular']} isBookmarked={movie.isBookmarked} />
              ))
            ) // refactor category and isCategory to be scalable, and combine all MovieItem props into one object
            : categoryIsFound ? (
              categoryMovies.map((movie, i) => (
                <MovieItem type={type} key={i} title={movie['title']} year={movie['year']} category={movie['category']} rating={movie['rating']} thumbnail={movie['thumbnail']['regular']} isBookmarked={movie.isBookmarked} />
              ))
            )
            : (
              movies.map((movie, i) => !movie['isTrending'] && (
                <MovieItem type={type} key={i} title={movie['title']} year={movie['year']} category={movie['category']} rating={movie['rating']} thumbnail={movie['thumbnail']['regular']} isBookmarked={movie.isBookmarked} />
              ))
            ) }
          </div>
        </div>
    </div>
  )
}
