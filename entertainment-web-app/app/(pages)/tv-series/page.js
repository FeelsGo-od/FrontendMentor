import React from 'react'

import Category from '@/app/components/category'
import SearchInput from '@/app/components/searchInput'
import movies from '@/app/json/data.json'
import styles from './tv-series.module.css'

export default function TvSeries() {
  return (
    <div className={styles.main}>
      <SearchInput />
      <Category name={'TV Series'} category={'TV Series'} movies={movies} type={'blocks'} />
    </div>
  )
}
