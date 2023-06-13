import React from 'react'

import Category from '@/app/components/category'

export default function TvSeries() {
  let categoryData
  return (
    <div>
      <Category category={'TV Series'} data={{ categoryData }} type={'blocks'} />
    </div>
  )
}
