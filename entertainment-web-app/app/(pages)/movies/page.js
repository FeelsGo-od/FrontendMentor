import React from 'react'

import SearchInput from '@/app/components/searchInput'
import Category from '@/app/components/category'
import movies from '@/app/json/data.json'
import styles from './movies.module.css'

export default function Movies() {
  return (
    <div className={styles.main}>
      <SearchInput />
      <Category name={'Movies'} category={'Movie'} movies={movies} type={'blocks'} />
    </div>
  )
}
