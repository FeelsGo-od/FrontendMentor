import React from 'react'

import styles from './components.module.css'
import MovieItem from './movieItem'

export default function Category({ name, category, movies, type }) {
  return (
    <div className={`${styles.categoryCont} pd-container`}>
        <h1 className={styles.categoryTitle}>{name}</h1>
        <div className={`${styles['category' + type]}`}>
            { movies.map((movie) => movie[category] && (
              <MovieItem title={movie['title']} year={movie['year']} category={movie['category']} rating={movie['rating']} thumbnail={movie['thumbnail']['trending']} />
            )) }
        </div>
    </div>
  )
}
