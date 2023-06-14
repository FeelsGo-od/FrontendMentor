import React from 'react'

import styles from './main.module.css'
import Category from '@/app/components/category'
import SearchInput from '@/app/components/searchInput'
import movies from '../../data'

export default function Main() {
  return (
    <div className={styles.main}>
        <SearchInput />
        {/* <Category name={'Trending'} category={'isTrending'} movies={movies} type={'Slider'} /> */}
        {/* <Category category={'Recommended for you'} movies={{ movies }} type={'Blocks'} /> */}
    </div>
  )
}