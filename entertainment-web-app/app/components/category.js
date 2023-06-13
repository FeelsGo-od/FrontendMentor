import React from 'react'

import styles from './components.module.css'
import MovieItem from './movieItem'

export default function Category({ category, data, type }) {
  return (
    <div className={`${styles.categoryCont} pd-container`}>
        <h1 className={styles.categoryTitle}>{category}</h1>
        <div className={`${styles['category' + type]}`}>
            <MovieItem movies={data} />
        </div>
    </div>
  )
}
