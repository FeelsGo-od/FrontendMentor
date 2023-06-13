import React from 'react'

import styles from './main.module.css'
import Category from '@/app/components/category'
import SearchInput from '@/app/components/searchInput'

export default function Main() {
  let categoryData
  return (
    <div className={styles.main}>
        <SearchInput />
        <Category category={'Trending'} data={{ categoryData }} type={'Slider'} />
        <Category category={'Recommended for you'} data={{ categoryData }} type={'Blocks'} />
    </div>
  )
}