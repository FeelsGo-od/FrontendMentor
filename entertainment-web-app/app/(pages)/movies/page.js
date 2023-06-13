import React from 'react'

import Category from '@/app/components/category'

export default function Movies() {
  return (
    <div>
        <Category category={'Movies'} data={{ categoryData }} type={'blocks'} />
    </div>
  )
}
