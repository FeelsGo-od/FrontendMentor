import React from 'react'

import SearchInput from '@/app/components/searchInput'
import Category from '@/app/components/category'
import movies from '@/app/json/data.json'
import styles from './bookmarked.module.css'

export default function Bookmarked() {
  return (
    <div>
      <div className={styles.main}>
        <SearchInput />
        <Category name={'Bookmarked Movies'} category={'Bookmarked Movie'} movies={movies} type={'blocks'} />
        <Category name={'Bookmarked TV Series'} category={'Bookmarked TV Series'} movies={movies} type={'blocks'} />
      </div>
    </div>
  )
}
