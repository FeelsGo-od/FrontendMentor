'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import styles from './components.module.css'

export default function MovieItem({ type, title, year, category, rating, thumbnail, movieObj }) {
    const [imgSrc, setImgSrc] = useState('./assets/loading.gif')
    const [imgSize, setImgSize] = useState({ width: 0, height: 0 })
    const [bookmarked, setBookmarked] = useState('empty')
    let bookmarkedMovies;

    useEffect(() => {
        if (typeof window !== "undefined") {
            if(type === 'carousel') {
                if(window.matchMedia("(max-width: 375px)").matches) {
                    setImgSrc(thumbnail.small)
                    setImgSize({width: 240, height: 140})
                } else {
                    setImgSrc(thumbnail.large)
                    setImgSize({width: 470, height: 230})
                }
            } else {
                if (window.matchMedia("(min-width: 1440px)").matches) {
                    setImgSrc(thumbnail.large)
                    setImgSize({width: 220, height: 140})
                } else if(window.matchMedia("(max-width: 375px)").matches) {
                    setImgSrc(thumbnail.small)
                    setImgSize({width: 164, height: 110})
                } else if (window.matchMedia('(max-width: 769px)')) {
                    setImgSrc(thumbnail.medium)
                    setImgSize({width: 220, height: 140})
                }
            }
        }

        bookmarkedMovies = JSON.parse(localStorage.getItem('bookmarkedMovies'))
        if(bookmarkedMovies) {
            const movieFound = bookmarkedMovies.some((movie) => {
                if(movie.title === title) {
                    return true
                }
                return false
            })
            movieFound ? setBookmarked('full') : setBookmarked('empty')
        } else {
            setBookmarked('empty')
        }
    }, [])

    const handleBookmarkChange = () => {
        bookmarked === 'empty' ? setBookmarked('full') : setBookmarked('empty')

        bookmarkedMovies = JSON.parse(localStorage.getItem('bookmarkedMovies'))

        if(bookmarkedMovies) {
            const movieFound = bookmarkedMovies.some((movie) => {
                if(movie.title === title) {
                    return true
                }
                return false
            })

            if(movieFound) {
                bookmarkedMovies = bookmarkedMovies.filter((movie) => movie.title !== movieObj.title)
            } else {
                bookmarkedMovies.push(movieObj)
            }

            localStorage.setItem('bookmarkedMovies', JSON.stringify(bookmarkedMovies))
        } else {
            bookmarkedMovies = []
            bookmarkedMovies.push(movieObj)
            localStorage.setItem('bookmarkedMovies', JSON.stringify(bookmarkedMovies))
        }
    }

    return (
        <div className={styles.movieItem}>
            <div onClick={handleBookmarkChange} className={styles.movieBookmark}>
                <div className={styles.movieBookmarkBg}></div>
                <Image className={styles.movieBookmarkImg} src={`/assets/icon-bookmark-${bookmarked}.svg`} width={11.67} height={14} quality={100} priority={true} alt='add to bookmark button' />
            </div>
            <div className={styles.movieDescr}>
                <div className={styles.movieInfo}>
                    <p>{year}</p>
                    <div className={styles.dot}></div>
                    <p className={styles.movieCategoryTitle}><Image src={`/assets/icon-category-${category.split(' ')[0].toLowerCase()}.svg`} width={12}  height={12} quality={100} priority={true} alt='movie category'/> <span>{category}</span></p>
                    <div className={styles.dot}></div>
                    <p className={styles.rating}>{rating}</p>
                </div>
                <p className={styles.movieTitle}>{title}</p>
            </div>
            <Image className={styles.img} src={imgSrc.slice(1)} width={imgSize.width} height={imgSize.height} quality={100} priority={true} alt='movie thumbnail' />
        </div>
    )
}
