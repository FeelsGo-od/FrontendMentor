import React from 'react'

import styles from './main.module.css'
import Category from '@/app/components/category'
import SearchInput from '@/app/components/searchInput'
import movies from '@/app/json/data.json'

export default function Main() {
  return (
    <div className={styles.main}>
        <SearchInput />
        <Category name={'Trending'} category={'isTrending'} movies={movies} type={'carousel'} />
        <Category name={'Recommended for you'} category={'recommended'} movies={ movies } type={'blocks'} />
    </div>
  )
}