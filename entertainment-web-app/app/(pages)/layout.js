import React from 'react'
import { Outfit } from 'next/font/google'

import Navbar from '../layouts/navbar'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

// *** IN CASE OF DATABASE DATA
// const movies = getMovies('linktoapi')

export default function Layout({ children }) {
  return (
    <div className={outfit.className}>
        <Navbar />
        <main>{children}</main>
    </div>
  )
}
