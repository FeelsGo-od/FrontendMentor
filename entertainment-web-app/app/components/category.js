'use client'
import React from 'react'

import styles from './components.module.css'
import MovieItem from './movieItem'

export default function Category({ name, category, movies, type }) {
  return (
    <div className={`${styles.categoryCont} pd-container ${category === 'recommended' ? styles.containerRecommended : ''}`}>
        <h1 className={styles.categoryTitle}>{name}</h1>
        <div className={`${styles[type + 'Content']}`}>
          <div className={`${styles[type + 'Container']}`}>
            { category.startsWith('is') ? (
              movies.map((movie, i) => movie[category] && (
                <MovieItem type={type} key={i} title={movie['title']} year={movie['year']} category={movie['category']} rating={movie['rating']} thumbnail={movie['thumbnail']['trending']} />
              ))
            )
            : (
              movies.map((movie, i) => movie['isTrending'] ? (
                ''
              ) : (
                <MovieItem type={type} key={i} title={movie['title']} year={movie['year']} category={movie['category']} rating={movie['rating']} thumbnail={movie['thumbnail']['regular']} />
              ))
            ) }
          </div>
        </div>
    </div>
  )
}
